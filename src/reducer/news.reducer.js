import { newsConstants } from "../action/constants";

const initstate = {
  newsArray: [],
  newsContent: {},
  loading: false,
  error: null,
};

export default (state = initstate, action) => {
  switch (action.type) {
    case newsConstants.GET_ALL_NEWS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case newsConstants.GET_ALL_NEWS_SUCCESS:
      state = {
        ...state,
        loading: false,
        newsArray: action.payload.news,
      };
      break;
    case newsConstants.GET_ALL_NEWS_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case newsConstants.GET_SINGLE_NEWS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case newsConstants.GET_SINGLE_NEWS_SUCCESS:
      state = {
        ...state,
        loading: false,
        newsContent: action.payload.newsContent,
      };
      break;
    case newsConstants.GET_SINGLE_NEWS_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};
