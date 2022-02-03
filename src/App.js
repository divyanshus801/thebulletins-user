import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import NewsPage from "./pages/NewsPage/newsPage";
import MetaImage from "./common/thebulletins-meta.png";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Helmet>
          {/* <!-- HTML Meta Tags --> */}
          <title>
            Latest News Headlines: read all news quickly | thebulletins
          </title>
          <meta
            name="description"
            content="Read Latest News Headlines in easy and simple words | thebulletins"
          />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://thebulletins.in" />
          <meta
            property="og:title"
            content="Latest News Headlines: read all news quickly | thebulletins"
          />
          <meta
            property="og:description"
            content="Read Latest News Headlines in easy and simple words | thebulletins"
          />
          <meta
            property="og:image"
            content={MetaImage}
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
