// Note: Do not update/change the initial state
import {
    GET_APPONLYPRODUCTS_ERROR,
    GET_APPONLYPRODUCTS_LOADING,
    GET_APPONLYPRODUCTS_SUCCESS,
  } from "./actionTypes"
  
  // Note: Do not update/change the initial state
  const productInitalState = {
    loading: false,
    error: false,
    data: [],
  };
  
  export const appProductReducer = (
    state = productInitalState,
    { type, payload }
  ) => {
    switch (type) {
      case GET_APPONLYPRODUCTS_LOADING: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case GET_APPONLYPRODUCTS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
  
      case GET_APPONLYPRODUCTS_ERROR: {
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