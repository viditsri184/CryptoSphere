import React from 'react'
import { useLocation } from 'react-router-dom'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const {Text, Title} = Typography;
const {Option} = Select;
const demoImage = 'https://via.placeholder.com/150';

const News = ({simplified}) => {
  const { data: newsList, isFetching } = useGetCryptoNewsQuery();
  const location = useLocation();
  
  if (isFetching) return "Loading...";
  if (!newsList || !newsList.data) return "No news available.";
  const isHomepage = location.pathname === '/';
  const displayedNews = isHomepage ? newsList.data.slice(0, 6) : newsList.data;


  return (
    <div>
      <Row gutter={[24, 24]}>
        {displayedNews.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href={news.newsUrl} target='_blank' rel="noreferrer">
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>{news.title.length > 5 ? `${news.title.substring(0, 40)}..` : news.title}</Title>
                  {console.log(news?.images?.thumbnail)}
                  <img src={news?.thumbnail || demoImage} alt="news-image" height={60} width={90}/>
                </div>
                <p>
                  {news.description.length > 100 ? `${news.description.substring(0, 200)}...` : news.description}
                </p>
                <div className='provider-container'>
                  <Text style={{fontWeight:"bold"}}>{moment(news.createdAt).startOf('ss').fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default News