/** @format */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.scss";
import Home from "./Pages/Home/Home";
import NoPage from "./Pages/NoPage/NoPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import EditHero from "./Pages/EditHero/EditHero";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/edit" element={<EditHero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
