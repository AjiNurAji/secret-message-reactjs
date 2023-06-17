import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import AddMessage from "./components/addMessage";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" theme="dark" />
      <Routes>
        <Route path="/" element={<AddMessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
