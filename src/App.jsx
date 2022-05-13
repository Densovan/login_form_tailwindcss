import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/account/account";
import Connection from "./components/connection/connection";
import Message from "./components/message/message";
import Phone from "./components/phone/phone";
import Navbar from "./components/Layouts/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Account />}>
          <Route index element={<Account />} />
        </Route>
        <Route path="/connection" element={<Connection />}>
          <Route element={<Connection />} />
        </Route>
        <Route path="/message" element={<Message />}>
          <Route element={<Message />} />
        </Route>
        <Route path="/phone" element={<Phone />}>
          <Route element={<Phone />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
