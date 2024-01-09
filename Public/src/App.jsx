import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, ToDo } from "./Pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
