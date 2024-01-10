import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Settings, ToDo } from "./Pages";
const App = () => {
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
