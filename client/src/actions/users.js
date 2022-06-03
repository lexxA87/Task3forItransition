import axios from "axios";
import { setUsers } from "../reducers/usersReducer";

export function getUsers() {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      //   console.log(response.data);
      dispatch(setUsers(response.data));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
}

export function deleteUsers() {
  return async (dispatch) => {
    try {
      const response = await axios.delete("http://localhost:5000/api/users");
      //   console.log(response.data);
      dispatch(setUsers(response.data));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
}

export const updateUserSelected = async (id) => {
  try {
    await axios.put("http://localhost:5000/api/users/updateSelected", {
      id: id,
    });
    //   console.log(response.data);
  } catch (error) {
    alert(error.response.data.message);
  }
};

export function updateUserStatus(userStatus) {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        "http://localhost:5000/api/users/updateStatus",
        {
          userStatus: userStatus,
        }
      );
      //   console.log(response.data);
      dispatch(setUsers(response.data));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
}
