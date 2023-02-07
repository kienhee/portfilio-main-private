/** @format */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.scss";
import Home from "./Pages/Home/Home";
import NoPage from "./Pages/NoPage/NoPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Dashboard/Login";

function PrivateRoute({ children }) {
  const currentUser = useSelector((state) => state.authentication.current_user?.success);

  if (!currentUser) {
    return (
      <Navigate
        to={{
          pathname: "/dashboard/login",
        }}
        replace={true}
      />
    );
  }

  return children;
}
function PublicRoute({ children }) {
  const currentUser = useSelector((state) => state.authentication.current_user?.success);

  if (currentUser) {
    return (
      <Navigate
        to={{
          pathname: "/dashboard/",
        }}
        replace={true}
      />
    );
  }
  return children;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="*" element={<NoPage />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
