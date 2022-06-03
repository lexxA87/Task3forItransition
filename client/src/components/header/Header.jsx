import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";

function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const currentUserName = useSelector((state) => state.user.currentUser.name);

  return (
    <div>
      <h1>Users</h1>
      <div>
        {isAuth ? (
          <div>
            <h2>Current user: {currentUserName}</h2>
            <button
              className="btn btn-warning"
              onClick={() => dispatch(logout())}
            >
              <i className="bi bi-box-arrow-left m-2"></i>
              Exit
            </button>
            <hr class="border-dark border-3 opacity-75"></hr>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
