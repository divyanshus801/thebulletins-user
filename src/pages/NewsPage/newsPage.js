import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getAllNews, getNewsByNewsId } from '../../action';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewsContent from '../../components/newsContent';
import NewsList from '../../components/newsList';
import './newsPage.css';

const NewsPage = () => {
  // const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const dispatch = useDispatch();
  const { newsId } = useParams();
  const {newsArray} = useSelector((state) => state.news);
 
  

  useEffect(() => {
   dispatch(getAllNews())
   dispatch(getNewsByNewsId(newsId));
  }, []);

  useEffect(() => {
    console.log("divy",newsArray);
  }, [newsArray]);
  

  return <div>
      <Header />
      <NewsContent newsId={newsId} />
      {newsArray.length && (
        <NewsList
          newsArray={newsArray}
          newsResults={newsArray.length}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
      <Footer />
  </div>;
};

export default NewsPage;
