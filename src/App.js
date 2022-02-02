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
          <meta property="og:title" content="European Travel Destinations" />
          <meta property="og:type" content="latest news" />
          <meta property="og:image" content="https://www.thebulletins.in/images/thebulletins.png" />
          <meta property="og:url" content="https://www.thebulletins.in/" />
          <meta name="twitter:card" content="summary_large_image" />

          <meta
            property="og:description"
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
