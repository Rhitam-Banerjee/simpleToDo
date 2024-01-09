import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIroutes";
const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const toastPreference = {
    position: "bottom-right",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleChange = (e) => {
    // console.log(`${[e.target.name]}: ${e.target.value}`);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleValidation = () => {
    const { username, password, confirmPassword } = values;
    if (username.trim().length < 3) {
      toast.error(
        "Username should not be less than 3 characters",
        toastPreference
      );
      return false;
    }
    if (password.trim().length < 8) {
      toast.error(
        "Password should not be less than 8 characters",
        toastPreference
      );
      return false;
    }
    if (confirmPassword !== password) {
      toast.error("Confirm passrowd is not same as Password", toastPreference);
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { username, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        password,
      });
      if (data.status === true) {
        localStorage.setItem("ToDo-user", JSON.stringify(data.user));
        navigate("/");
      }
      if (data.status === false) {
        toast.error(data.msg, toastPreference);
      }
    }
  };
  useEffect(() => {
    if (localStorage.getItem("ToDo-user")) navigate("/");
  }, []);
  return (
    <section>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="confirmPassword"
          placeholder="Confirm-Password"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Sign-Up</button>
        <span>
          Already have an account ?<Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Register;
