// Note: Do not update/change the initial state
import {
    GET_HOMEPRODUCTS_ERROR,
    GET_HOMEPRODUCTS_LOADING,
    GET_HOMEPRODUCTS_SUCCESS,
  } from "./actionTypes"
  
  // Note: Do not update/change the initial state
  const productInitalState = {
    loading: false,
    error: false,
    data: [],
  };
  
  export const homeProductReducer = (
    state = productInitalState,
    { type, payload }
  ) => {
    switch (type) {
      case GET_HOMEPRODUCTS_LOADING: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case GET_HOMEPRODUCTS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
  
      case GET_HOMEPRODUCTS_ERROR: {
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