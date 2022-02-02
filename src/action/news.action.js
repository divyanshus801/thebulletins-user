import axios from "axios";
import { newsConstants } from "./constants";
const Url = process.env.REACT_APP_BACKEND;


export const getAllNews = () => {
  return async (dispatch) => {
      try {
        dispatch({ type: newsConstants.GET_ALL_NEWS_REQUEST});
        const res = await axios.get(`${Url}/newses/general`);
        console.log("ghghf",res);
        if (res.status === 201) {
            const newsList = res.data;
            dispatch({
                type: newsConstants.GET_ALL_NEWS_SUCCESS,
                payload: { news: newsList }
            });
        }else {
            const { error } = res.data;
            dispatch({ type: newsConstants.GET_ALL_NEWS_FAILURE, payload: { error } });
        }
      } catch (error) {
        // const { error } = res.data;
        dispatch({
            type: newsConstants.GET_ALL_NEWS_FAILURE,
            // payload: { error }
        })
      }
  };
};

export const getAllNewsByCategoryId = (categoryId) => {
  return async (dispatch) => {
      try {
        dispatch({ type: newsConstants.GET_ALL_NEWS_REQUEST});
        const res = await axios.get(`${Url}/news/${categoryId}`);
        console.log("ghghf",res);
        if (res.status === 201) {
            const newsList = res.data;
            dispatch({
                type: newsConstants.GET_ALL_NEWS_SUCCESS,
                payload: { news: newsList }
            });
        }else {
            const { error } = res.data;
            dispatch({ type: newsConstants.GET_ALL_NEWS_FAILURE, payload: { error } });
        }
      } catch (error) {
        // const { error } = res.data;
        dispatch({
            type: newsConstants.GET_ALL_NEWS_FAILURE,
            // payload: { error }
        })
      }
  };
};

export const getNewsByNewsId = (newsId) => {
return async dispatch=>{
  try {
    dispatch({ type: newsConstants.GET_SINGLE_NEWS_REQUEST});
    const res = await axios.get(`${Url}/newsContent/${newsId}`)
    if (res.status === 201) {
      dispatch({
          type: newsConstants.GET_SINGLE_NEWS_SUCCESS,
          payload: { newsContent: res.data }
      });
  }else {
      const { error } = res.data;
      dispatch({ type: newsConstants.GET_SINGLE_NEWS_FAILURE, payload: { error } });
  }
  } catch (error) {
    dispatch({ type: newsConstants.GET_SINGLE_NEWS_FAILURE, payload:  error  });
  }
}
}

// const newsApi = async () => {
//   if (category === "general") {
//     try {
//       const Url = process.env.REACT_APP_BACKEND;

//       const news = await axios.get(`${Url}/newses/general`);
//       console.log(news.data);
//       setNewsArray(news.data);
//       setNewsResults(news.data.length);
//       console.log(news);
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     try {
//       const Url = process.env.REACT_APP_BACKEND;

//       const news = await axios.get(`${Url}/news/${category}`);
//       setNewsArray(news.data);
//       setNewsResults(news.data.length);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };
