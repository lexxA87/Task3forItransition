import React from "react";

function UsersTable(props) {
  console.log(props);
  const { _id, name, email, userStatus, dateOfRegistration, dateOfLastLogin } =
    props.user;

  return (
    <tr>
      <th scope="row">
        <input className="form-check-input" type="checkbox" value="" />
      </th>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{dateOfRegistration}</td>
      <td>{dateOfLastLogin}</td>
      <td>{userStatus}</td>
    </tr>
  );
}

export default UsersTable;
