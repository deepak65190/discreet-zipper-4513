import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
} from "./actionType";
import axios from "axios";
const getRequest = () => {
  return {
    type: GET_DATA_REQUEST,
  };
};
const getSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};
const getError = () => {
  return {
    type: GET_DATA_ERROR,
  };
};
export const getProduct = (dispatch) => {
  dispatch(getRequest());
  return axios
    .get("https://database-json-server.vercel.app/appOnly")
    .then((res) => {
      dispatch(getSuccess(res.data));
    })
    .catch((e) => {
      dispatch(getError(e));
    });
};
