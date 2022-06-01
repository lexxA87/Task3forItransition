import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Login from "./login/Login";
import Registration from "./regisration/Registration";
import Users from "./users/Users";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        {isAuth ? (
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/registration" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
