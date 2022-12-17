import {
    GET_NEWPRODUCTS_ERROR,
    GET_NEWPRODUCTS_LOADING,
    GET_NEWPRODUCTS_SUCCESS,
  } from "./action.Types"
  

  const productInitalState = {
    loading: false,
    error: false,
    data: [],
  };
  
  export const newproductReducer = (
    state = productInitalState,
    { type, payload }
  ) => {
    switch (type) {
      case GET_NEWPRODUCTS_LOADING: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case GET_NEWPRODUCTS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
  
      case GET_NEWPRODUCTS_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
          data: payload,
        };
      }
      default: {
        return state;
      }
    }
  };