import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthPages from "./Pages/AuthPages/AuthPages";
import UserPages from "./Pages/UserPages/UserRages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPages />}></Route>
        <Route path="/:name" element={<UserPages />}></Route>
      </Routes>
    </>
  );
}

export default App;
