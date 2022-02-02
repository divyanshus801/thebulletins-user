import React from "react";
import "./newsCard.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


const NewsCard = ({ news }) => {
  const API = process.env.REACT_APP_BACKEND;


  return (
    <div className="news-list cur-po">
      <div className="news-list-left">
        <div className="news-list-img-container">
          <a href={`/fullNews/${news._id}`}>
            <img
              className="news-list-img "
              alt={news.title}
              src={
                news
                  ? `${API}/product/photo/${news._id}`
                  : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
              }
            />
          </a>
        </div>
        <div className="news-list-share-icon-container absolute-center">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.thebulletins.in/fullNews/${news._id}&text=${news.title}`}
          >
            <FacebookOutlinedIcon
              style={{ fontSize: "29px" }}
              className="news-list-share-icon facebook"
            />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.thebulletins.in/fullNews/${news._id}&text=${news.title}`}
          >
            <TwitterIcon
              style={{ fontSize: "29px" }}
              className="news-list-share-icon twitter"
            />
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=https%3A%2F%2Fwww.thebulletins.in/fullNews/${news._id}%2F%0A${news.title}`}
          >
            <WhatsAppIcon
              style={{ fontSize: "29px" }}
              className="news-list-share-icon whatsapp"
            />
          </a>
          {/* <i className="fi fi-rr-share news-list-share-icon"></i> */}
        </div>
      </div>
      <div className="news-list-right">
        <div className="news-list-title-container">
          <a className="news-list-title" href={`/fullNews/${news._id}`}>
            {news.title}
          </a>
        </div>
        <div className="news-list-category-container">
          <span className="news-list-category">{news.category.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
