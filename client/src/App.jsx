import { Routes, Route } from "react-router-dom";
import "./App.css"
import LoginPage from "./pages/LoginPage";
import ChatApp from "./pages/ChatApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="chat" element={<ChatApp />} />
      <Route path="*" element={<h1>Errour Page not found</h1>} />
    </Routes>
  );
}
export default App;
