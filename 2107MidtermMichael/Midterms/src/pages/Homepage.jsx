import NavBar from "../component/navBar"
import '../styles/Homepage.css'
import front from '../images/Front.png'
import { useRef} from 'react';
import { useNavigate } from "react-router-dom";
import NewsListCard from "../component/NewsListCard";
import NewsCard from "../component/Newscard";
import Footer from "../component/Footer";


const HomePage = () => {

  

  let navigate = useNavigate();

  const routeChange = () => {
   window.scrollTo(0, 0);
   return navigate("/Morenews");
  }
  

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      
        <NavBar />
        {/* <div className="MainCon">
              <div className="MainText">
                <h1>Get updated on recent </h1><h1>important Canada news</h1>
                <div className="ButtonCon">
                  <button className="MainButton" onClick={handleClick}>Recent News</button>
                  <button className="MainButton" onClick={routeChange}>More News</button> 
                  id="button2"
                </div>

  
                <div className="RecentCon" >
                  <h3 ref={ref}>Recent News</h3>


                  <div className="NewsCardHome" >
                    <NewsListCard all={false}/>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                   
                  </div>

                </div>
              </div>
              <div className="MainImg">
                <img src={front} alt="logo" className="frontLogo" />
              </div>

            </div> */}

        <div className="MainCon">
          <div className="MainText">
            <h1>Get updated on recent </h1><h1>important Canada news</h1>
            <div className="ButtonCon">
            <button className="MainButton" onClick={handleClick}>Recent News</button>
            <button className="MainButton" onClick={routeChange}>More News</button>
            </div>
            </div>
            <div className="MainImg">
                <img src={front} alt="logo" className="frontLogo" />
              </div>

                  <div className="NewsCardHome" >
                    <div className="RecentCon">
                  <h3 ref={ref}>Recent News</h3>
                  </div>
                    <NewsListCard all={false}/>
                      {/* <NewsCard /> 
                    <NewsCard />
                    <NewsCard />
                     <NewsCard />  */}
                  </div>
                 
                
                
          </div> 
           <Footer />
     
    </>
  )
}

export default HomePage