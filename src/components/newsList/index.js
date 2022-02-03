import React, { useEffect } from "react";
import NewsCard from "./newsCard";
import "./newsList.css";

const NewsList = ({ newsArray, loadMore, setLoadMore, newsResults }) => {
  useEffect(() => {
    console.log("newsArray", newsArray);
  });

  return (
    <>
    
      {newsArray.map((news) => {
        return <NewsCard news={news} key={news._id} />;
      })}

      {loadMore <= newsResults && (
        <>
          <hr />
          <button
            className="loadMore"
            onClick={() => setLoadMore(loadMore + 20)}
          >
            Load More
          </button>
        </>
      )}
    </>
  );
};

export default NewsList;
