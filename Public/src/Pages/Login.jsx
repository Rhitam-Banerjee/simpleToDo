import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIroutes";
const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const toastPreference = {
    position: "bottom-right",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleValidation = () => {
    const { username, password } = values;
    if (username.trim().length === 0) {
      toast.error("Username should not me empty", toastPreference);
      return false;
    } else if (password.trim() === "") {
      toast.error("Password should not be empty", toastPreference);
      return false;
    }
    // dispatch(login(username));
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastPreference);
      }
      if (data.status === true) {
        localStorage.setItem("ToDo-user", JSON.stringify(data.user));
        navigate("/");
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
        <button type="submit">Sign-In</button>
        <span>
          Don&apos;t have an account ?<Link to="/register">Register</Link>
        </span>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Login;
