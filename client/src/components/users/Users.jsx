import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/users";
import UsersTable from "../usersTable/UsersTable";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  // const usersMemo = useMemo(() => users, [users]);

  useEffect(() => {
    async function fetchData() {
      dispatch(getUsers());
    }
    fetchData();
  }, [dispatch]);

  console.log(users);

  const allUsers = users.map((user, key) => {
    return <UsersTable user={user} key={key} />;
  });

  return (
    <div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">
              <input className="form-check-input" type="checkbox" value="" />
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
