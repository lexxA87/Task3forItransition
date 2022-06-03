import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  deleteUsers,
  updateUserSelected,
  updateUserStatus,
} from "../../actions/users";
import { logout } from "../../reducers/userReducer";
// import UsersTable from "../usersTable/UsersTable";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const currentUserID = useSelector((state) => state.user.currentUser.id);
  const [masterChecked, setMasterChecked] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      dispatch(getUsers());
    }
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    setSelectedUsers([]);
  }, [users]);

  const onMasterCheck = (e) => {
    const checkUsers = users;
    checkUsers.forEach((user) => (user.selected = e.target.checked));
    setMasterChecked(e.target.checked);
    setSelectedUsers(checkUsers.filter((e) => e.selected));
  };

  const onItemCheck = (e, item) => {
    const checkUsers = users;

    checkUsers.forEach((user) => {
      if (user._id === item._id) {
        user.selected = e.target.checked;
      }
    });

    const totalItems = users.length;
    const totalCheckedItems = checkUsers.filter((e) => e.selected).length;
    setMasterChecked(totalItems === totalCheckedItems);
    setSelectedUsers(users.filter((e) => e.selected));
  };

  const allUsers = users.map((user) => {
    return (
      <tr key={user._id} className={user.selected ? "table-active" : ""}>
        <th scope="row">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id={`rowCheck${user._id}`}
            checked={user.selected}
            onChange={(e) => onItemCheck(e, user)}
          />
        </th>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.dateOfRegistration}</td>
        <td>{user.dateOfLastLogin}</td>
        <td>{user.userStatus}</td>
      </tr>
    );
  });

  const deleteUsersByCheck = (array) => {
    array.forEach((user) => {
      updateUserSelected(user._id);
      if (user._id === currentUserID) {
        dispatch(logout());
      }
    });

    dispatch(deleteUsers());
  };

  const updateUsersStatusBlock = (array, userStatus) => {
    array.forEach((user) => {
      updateUserSelected(user._id);
      if (user._id === currentUserID) {
        dispatch(logout());
      }
    });
    dispatch(updateUserStatus(userStatus));
  };

  const updateUsersStatusUnblock = (array, userStatus) => {
    array.forEach((user) => {
      updateUserSelected(user._id);
    });
    dispatch(updateUserStatus(userStatus));
  };

  console.log(selectedUsers);

  return (
    <div>
      <div className="d-grid gap-2 m-3 d-md-block">
        <button
          className="btn btn-primary m-3"
          type="button"
          onClick={() => deleteUsersByCheck(selectedUsers)}
        >
          Delete
        </button>
        <button
          className="btn btn-primary m-3"
          type="button"
          onClick={() => updateUsersStatusBlock(selectedUsers, "Blocked")}
        >
          Block
        </button>
        <button
          className="btn btn-primary m-3"
          type="button"
          onClick={() => updateUsersStatusUnblock(selectedUsers, "Unblock")}
        >
          Unblock
        </button>
      </div>
      <table className="table mt-3 table-hover">
        <thead>
          <tr>
            <th scope="col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="masterCheck"
                checked={masterChecked}
                onChange={(e) => onMasterCheck(e)}
              />
            </th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Date of registration</th>
            <th scope="col">Date of last login</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">{allUsers}</tbody>
      </table>
    </div>
  );
}

export default Users;
