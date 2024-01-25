import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Settings, ToDo } from "./Pages";
import useWindowDimensions from "./Hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsTablet } from "./Features/Users/userSlice";
const App = () => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width <= 700) {
      dispatch(setIsTablet(true));
    } else dispatch(setIsTablet(false));
  }, [width]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
