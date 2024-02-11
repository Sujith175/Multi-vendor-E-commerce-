import axios from "axios";
import { server } from "../../server";
import {
  LoadUserFail,
  LoadUserRequest,
  LoadUserSuccess,
} from "../reducres/user";
//load user

export const loadUser = () => async (dispatch) => {
  //higher order function
  try {
    dispatch(LoadUserRequest());
    const { data } = await axios.get(`${server}/getuser`, {
      withCredentials: true,
    });
    dispatch(LoadUserSuccess(data.user));
  } catch (error) {
    dispatch(LoadUserFail(error.response.data.message));
  }
};
