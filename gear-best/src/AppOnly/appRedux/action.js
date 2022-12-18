import axios from 'axios';
import {
  GET_APPONLYPRODUCTS_ERROR,
  GET_APPONLYPRODUCTS_LOADING,
  GET_APPONLYPRODUCTS_SUCCESS,
} from './actionTypes';

export const getAppProductData = async (dispatch) => {
  dispatch({
    type: GET_APPONLYPRODUCTS_LOADING,
  });
  try {
    const res = await axios.get('https://database-json-server.vercel.app/appOnly');
    dispatch({
      type: GET_APPONLYPRODUCTS_SUCCESS,
      payload: res.data,
    });
    return res.data;
  } 
  catch (e) {
    dispatch({
      type: GET_APPONLYPRODUCTS_ERROR,
    });
  }
};
