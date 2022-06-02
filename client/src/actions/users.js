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
