import { categoryConstants } from "../action/constants";

const initstate = {
    categories: [],
    loading: false,
    error: null
};

export default (state = initstate, action) => {
    switch(action.type){
         case categoryConstants.GET_ALL_CATEGORIES_REQUEST: 
           state = {
               ...state,
               loading: true,
           }
           break;
          case categoryConstants.GET_ALL_CATEGORIES_SUCCESS: 
          state= {
              ...state,
              loading: false,
              categories: action.payload.categories
          } 
          break;
          case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
              state = {
                  ...state,
                  loading: false,
              }
              break;
    }
    return state;
}