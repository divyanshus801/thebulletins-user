import React, { useEffect } from "react";
import "./newsContent.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewsByNewsId } from "../../action";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const NewsContent = ({newsId}) => {
  
  const { newsContent } = useSelector((state) => state.news);

  

  const API = process.env.REACT_APP_BACKEND;

  return (
      
    <div className="news-content">
      <div className="news-content-title">{newsContent.title}</div>
      <div className="news-content-category-share-container">
            
        <div className="news-content-category">{}</div>
        
        <div className="news-content-share-container">
        <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.thebulletins.in/fullNews/${newsContent._id}&text=${newsContent.title}`}
          >
            <FacebookOutlinedIcon
              style={{ fontSize: "29px" }}
              className="news-list-share-icon facebook"
            />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.thebulletins.in/fullNews/${newsContent._id}&text=${newsContent.title}`}
          >
            <TwitterIcon
              style={{ fontSize: "29px" }}
              className="news-list-share-icon twitter"
            />
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=https%3A%2F%2Fwww.thebulletins.in/fullNews/${newsContent._id}%2F%0A${newsContent.title}`}
          >
            <WhatsAppIcon
              style={{ fontSize: "29px" }}
              className="news-list-share-icon whatsapp"
            />
          </a>
        </div>
      </div>
      <div className="news-content-img-container">
        <div className="news-content-img-wrapper">
          <img
            src={
              newsId
                ? `${API}/product/photo/${newsId}`
                : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
            }
            alt={newsContent.title}
            className="news-content-img"
          />
        </div>
      </div>
      <div className="news-content-description-container">
        <p className="news-content-description">{newsContent.description}</p>
      </div>
    </div>
  );
};

export default NewsContent;
