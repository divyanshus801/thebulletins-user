import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import NewsPage from "./pages/NewsPage/newsPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/fullNews/:newsId" exact element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
