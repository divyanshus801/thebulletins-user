import React, { useEffect, useState } from "react";
import "./homePage.css";
import Header from "../../components/Header/index";
import NewsList from "../../components/newsList";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../action";
import Footer from "../../components/Footer";
import LottieComp from "../../components/LottieView/LottieView";

const HomePage = () => {
  // const [newsArray, setNewsArray] = useState([]);
  const [loadMore, setLoadMore] = useState(20);

  const dispatch = useDispatch();
  const {newsArray, loading} = useSelector((state) => state.news);
 

  useEffect(() => {
   dispatch(getAllNews())

  }, []);
  useEffect(() => {
    console.log("divy",newsArray);
  }, [newsArray]);
  

  // useEffect(() => {
  //   dispatch(getAllNews())
  //  }, [newsResults, loadMore, category]);
 

  

  return (
    <div>
      
        <Header />
       {loading ? (<LottieComp />) : (newsArray.length && (
        <NewsList
          newsArray={newsArray}
          newsResults={newsArray.length}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      ))
       }
      <Footer />
    </div>
  );
};

export default HomePage;
