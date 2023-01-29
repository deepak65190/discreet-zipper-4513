import axios from 'axios';
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from './action.Types';

export const getProductData = async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_LOADING,
  });
  try {
    const res = await axios.get("https://reqres.in/api/users?page=2");
    
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: res.data.data,
    });
    return res.data.data;
  } catch (e) {
    dispatch({
      type: GET_PRODUCTS_ERROR,
    });
  }
};
