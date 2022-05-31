import axios from "axios";
import { setUser } from "../reducers/userReducer";

export const registration = async (name, email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/registration",
      {
        name,
        email,
        password,
      }
    );
    alert(response.data.message);
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const login = (name, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          name,
          password,
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
