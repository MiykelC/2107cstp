
import './App.css'
import { useRoutes } from 'react-router-dom'
import HomePage from './pages/Homepage'
import About from './pages/About'
import ContactPage from './pages/Contact'
import Newsview from './pages/NewsView'
import MoreNews from './pages/Morenews'
import { useEffect, useState } from 'react'
import axios from 'axios'
import NewsContext from './context/newsContext'

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    dataFetched();
  }, []);

  const dataFetched = async () => {
    try {
      const res = await axios.get(`https://newsapi.org/v2/everything?q=canada&from=2023-06-21&to=2023-06-30&sortBy=popularity&apiKey=63a843a4420644b789854781a17ab68e`);
      // console.log(data.data.items)
      setNews(res.data.articles)


    } catch (error) {
      console.log(error)
    }
  }
  
  
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/About',
      element: <About />
    },
    {
      path: '/Contact',
      element: <ContactPage />
    },
    {
      path: '/NewsView',
      element: <Newsview />
    },
    {
      path: '/MoreNews',
      element: <MoreNews />
    },
    {
      path: '/NewsView/:id',
      element: <Newsview />
    }
  ])
  return (
    <NewsContext.Provider value={news}>
      {element}
    </NewsContext.Provider>
  );
}

export default App
