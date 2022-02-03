import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import NewsPage from "./pages/NewsPage/newsPage";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Helmet>
          <meta property="og:title" content="All latest news" />
          <meta name="keyword" content="All latest news, thebulletins, thebulletin , bulletin , latest news , article, bulletins , the, thebu" />
          <meta property="og:type" content="latest news" />
          <meta property="og:image" content="https://www.thebulletins.in/images/thebulletins.png" />
          <meta property="og:url" content="https://www.thebulletins.in/fullNews/618fc8ce3342ee312bc136ed" />
          <meta name="twitter:card" content="summary_large_image" />

          <meta
            name="description"
            content="Latest News Headlines: read all news quickly | thebulletins."
          />
        </Helmet>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/fullNews/:newsId" exact element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
