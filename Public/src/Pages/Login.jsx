import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIroutes";
import { bg, logoNoBg } from "../assets";
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
    <section
      className="absolute top-0 left-0 h-full w-full flex flex-col justify-center gap-4
      items-center bg-no-repeat bg-top bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <form
        action=""
        onSubmit={(e) => handleSubmit(e)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full 
          h-3/4 flex flex-col gap-4 justify-around items-center text-base
          p-10 max-w-[400px] shadow-lg bg-highlight shadow-highlight rounded-lg"
      >
        <div className="mb-4">
          <img src={logoNoBg} alt="Logo" className="w-[200px]" />
        </div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => handleChange(e)}
          className="w-full px-4 py-2 text-center outline-none font-bold backdrop-blur-sm transition-all shadow-custom_1 text-logoColor bg-transparent border-highlight border-b-[1px] focus:border-logoColor"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => handleChange(e)}
          className="w-full px-4 py-2 text-center outline-none font-bold backdrop-blur-sm transition-all shadow-custom_1 text-logoColor bg-transparent border-highlight border-b-[1px] focus:border-logoColor"
        />
        <button
          type="submit"
          className="bg-logoColor py-2 px-4 rounded-md font-bold text-highlight"
        >
          Sign-In
        </button>
        <span>
          Don&apos;t have an account?
          <Link to="/register">
            <span className="font-black text-logoColor"> Register</span>
          </Link>
        </span>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Login;
