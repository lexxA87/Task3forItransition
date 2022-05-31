import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Login from "./login/Login";
import Registration from "./regisration/Registration";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <BrowserRouter>
      <div>
        <Header />
        {!isAuth && (
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;