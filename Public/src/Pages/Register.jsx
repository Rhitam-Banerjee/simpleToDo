import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIroutes";
import { Loader, logoNoBg } from "../assets";
const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
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
            <input
              type="text"
              name="confirmPassword"
              placeholder="Confirm-Password"
              onChange={(e) => handleChange(e)}
              className="w-full px-4 py-2 text-center outline-none font-bold transition-all !bg-white rounded-md text-primary shadow-md focus:shadow-none focus:rounded-none focus:!bg-transparent focus:border-b-[1px] focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary_transparent py-2 px-4 rounded-md font-bold text-white shadow-md hover:bg-primary"
            >
              Sign-Up
            </button>
            <span className="text-secondary">
              Already have an account?
              <Link to="/login">
                <span className="font-black text-primary hover:text-secondary">
                  {" "}
                  Log-In
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

export default Register;
