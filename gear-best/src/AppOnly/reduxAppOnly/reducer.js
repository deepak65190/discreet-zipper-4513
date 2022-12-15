import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR } from "./actionType";
const inital ={
    product :[] ,
    isloading:false , 
    isError:false
}
export const  reducer = (state=inital ,action)=>{
    switch(action.type){
        case GET_DATA_REQUEST :{
            return {
                ...state ,isloading:true
            }
        }
        case GET_DATA_SUCCESS :{
            return {
                ...state , isloading:false , product:action.payload
            }
        }
        case GET_DATA_ERROR :{
            return {
               ...state , isError:true
            }
        }
        default :{
            return state
        }
    }
}