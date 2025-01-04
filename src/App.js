import React,{useState,useEffect} from 'react';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';
// import './components/News.css'
// 6f1dc3d58418487a8d9ea0a45ae963be
const App = () => {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState('general');
 useEffect(() => { 
  fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6f1dc3d58418487a8d9ea0a45ae963be`).then(res => res.json()).then(data => {
    setItems(data.articles)
  })
 },[category])
  return (
    <>
    <div  className='app'>
      <h1 style={{textAlign:'center',marginBottom:'30px'}} > See The Latest News</h1>
      <Menu active={active}setActive={setActive}setCategory={setCategory}/>
       <NewsGrid items={items}/>
    </div> </>
  );
};

export default App;