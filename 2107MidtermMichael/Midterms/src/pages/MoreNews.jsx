
import NavBar from '../component/navBar'
import MoreNews from '../images/MoreNews.png'
import '../styles/MoreNews.css'
import NewsListCard from "../component/NewsListCard";


const Morenews = () => {
 

  return (
    <>
     
        <NavBar />
        <div className='MoreNewsCon'>
          <div className='MoreNewsLogo'>
            <img src={MoreNews} />
          </div>
          <div className='MoreNewsCards'>
            <NewsListCard all={true} />
            
            {/* <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            */}

          </div>
        </div>
     
    </>

  )
}

export default Morenews