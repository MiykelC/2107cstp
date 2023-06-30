import NewsCard from "./Newscard";
import  { useContext } from "react";
import  NewsContext  from "../context/newsContext";


export default function NewsListCard (props){
    const news = useContext(NewsContext);
    // console.log(`Movie, ${JSON.stringify(movies)}`)

    const recentNews = news.slice(0, 4);

    const NewsList = () => { 
        return props.all ? news.map((movie, index) => (
            <NewsCard key={index} newsrep={movie} id={index} />
        )) : recentNews.map((movie, index) => (
            <NewsCard key={index} newsrep={movie} id={index} />
        ))
    }


    return (
        <>
            {NewsList()}
        </>
    )
}

