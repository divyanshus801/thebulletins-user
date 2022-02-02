import axios from "axios"
import { categoryConstants } from "./constants";
const Url = process.env.REACT_APP_BACKEND;

export const getAllCategories = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST});
            const res = await axios.get(`${Url}/categories`);
            console.log("cate",res);
            if (res.status === 200) {
                dispatch({
                    type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                    payload: { categories: res.data }
                });
            }else {
                const { error } = res.data;
                dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_FAILURE, payload: { error } });
            }
        } catch (error) {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                // payload: { error }
            })
        }
    }
}