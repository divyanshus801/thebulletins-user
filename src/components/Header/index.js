import React, { useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../sidebar";
import "./header.css";

const Header = ({ setCategory }) => {
  const [searchResults, setSearchResults] = useState([]);
  const { newsArray } = useSelector((state) => state.news);

  const handleSearch = (searchQuery) => {
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }
    setSearchResults(
      newsArray.filter((query) => query.title.includes(searchQuery))
    );
    console.log("search", searchResults);
  };

  const renderSearchResults = () => {
    if (searchResults.length) {
      return (
        <div className="search-result-container ">
          {searchResults.map((news) => {
            return (
              <a
                className="search-result-anchor"
                href={`/fullNews/${news._id}`}
                key={news._id}
              >
                {news.title}
              </a>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="header-border-container">
      <div className="header max-width">
      <a href={'/'}>
        <img
          src="./../../images/thebulletins.png"
          alt="thebulletins"
          className="header-logo cur-po"
        /></a>
        <div className="header-right">
          <div className="header-search-container">
            <div className="header-searchBar">
              <i className="fi fi-rr-search absolute-center search-icon"></i>
              <div className="search-input-result-container">
                <input
                  placeholder="Search for any news, topic or your intrest..."
                  className="search-input"
                  onChange={(e) => {
                    handleSearch(e.target.value);
                  }}
                />
                {renderSearchResults()}
              </div>
            </div>
          </div>
          <div className="menu-wrapper cur-po">
            <Sidebar setCategory={setCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
