import React from 'react';
import NewsItems from './NewsItems';
// import './NewsItems.css'
// import './News.css'

const NewsGrid = ({items}) => {
	
  return (
	<div className='news-grid'>
	 {items.map((item,index) => (
		<NewsItems key={index} item={item}/>
	 ))}
	</div> 
  );
};

export default NewsGrid;