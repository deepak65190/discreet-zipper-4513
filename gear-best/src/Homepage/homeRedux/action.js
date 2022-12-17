import axios from 'axios';
import {
  GET_HOMEPRODUCTS_ERROR,
  GET_HOMEPRODUCTS_LOADING,
  GET_HOMEPRODUCTS_SUCCESS,
} from './actionTypes';

export const getHomeProductData = async (dispatch) => {
  dispatch({
    type: GET_HOMEPRODUCTS_LOADING,
  });
  try {
    const res = await axios.get('https://database-json-server.vercel.app/homepage');
    dispatch({
      type: GET_HOMEPRODUCTS_SUCCESS,
      payload: res.data,
    });
    return res.data;
  } 
  catch (e) {
    dispatch({
      type: GET_HOMEPRODUCTS_ERROR,
    });
  }
};
