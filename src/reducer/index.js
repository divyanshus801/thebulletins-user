import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import newsReducer from "./news.reducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  news: newsReducer
});

export default rootReducer;
