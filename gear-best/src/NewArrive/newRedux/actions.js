import axios from 'axios';
import {GET_NEWPRODUCTS_ERROR,GET_NEWPRODUCTS_LOADING,GET_NEWPRODUCTS_SUCCESS,
} from './action.Types';

export const getNewProductData = async (dispatch) => {
  dispatch({
    type: GET_NEWPRODUCTS_LOADING,
  });
  try {
    const res = await axios.get('https://database-json-server.vercel.app/newArrival');
    dispatch({
      type: GET_NEWPRODUCTS_SUCCESS,
      payload: res.data,
    });
   console.log("get",res.data)
    return res.data;
  } catch (e) {
    dispatch({
      type: GET_NEWPRODUCTS_ERROR,
    });
  }
};
