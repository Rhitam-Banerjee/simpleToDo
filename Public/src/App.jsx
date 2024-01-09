import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, ToDo } from "./Pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<ToDo />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
