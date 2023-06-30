import NavBar from "../component/navBar"
import Test from "../images/Test.jpg"
import "../styles/NewsView.css"
import {useParams} from "react-router-dom"
import {useState ,useContext, useEffect} from "react"
import NewsContext from "../context/newsContext"

const Newsview = () => {
    const [news, setNews] = useState({});
    const {id} = useParams()
 
    const allNews = useContext(NewsContext);

    useEffect(() => {
        const x = allNews.find((uniqueNews, index) => {
            
            if(index == id){
                console.log(`Index ${index}, ID ${id}`)
                // console.log(uniqueNews)
                setNews(uniqueNews);
            }
        })
        if(x) {
            setNews(x);
        }
    }, [id])

return(
    <div>
        <NavBar />
        <div className="NewsViewCon">
            <img src={news.urlToImage} alt="Test" />
            <h1>{news.description}</h1>
        </div>
    </div>


)


}

export default Newsview