import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIroutes";
import { Loader, logoNoBg } from "../assets";
const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
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
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <section
      className="absolute top-0 left-0 h-full w-full flex flex-col justify-center gap-4
      items-center bg-base"
    >
      {isLoading ? (
        <img src={Loader} alt="loader" />
      ) : (
        <>
          <form
            action=""
            onSubmit={(e) => handleSubmit(e)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full 
          h-3/4 flex flex-col gap-4 justify-around items-center text-base
          p-10 max-w-[400px] shadow-cust1 bg-white rounded-[20px]"
          >
            <div className="mb-4">
              <img
                src={logoNoBg}
                alt="Logo"
                className="w-[200px] drop-shadow-lg"
              />
            </div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => handleChange(e)}
              className="w-full px-4 py-2 text-center outline-none font-bold transition-all !bg-white rounded-md text-primary shadow-md focus:shadow-none focus:rounded-none focus:!bg-transparent focus:border-b-[1px] focus:border-primary"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
              className="w-full px-4 py-2 text-center outline-none font-bold transition-all !bg-white rounded-md text-primary shadow-md focus:shadow-none focus:rounded-none focus:!bg-transparent focus:border-b-[1px] focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary_transparent py-2 px-4 rounded-md font-bold text-white shadow-md hover:bg-primary"
            >
              Sign-In
            </button>
            <span className="text-secondary">
              Don&apos;t have an account?
              <Link to="/register">
                <span className="font-black text-primary hover:text-secondary">
                  {" "}
                  Register
                </span>
              </Link>
            </span>
          </form>
          <ToastContainer />
        </>
      )}
    </section>
  );
};

export default Login;
