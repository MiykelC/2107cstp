/* eslint-disable react/prop-types */
import React from 'react'
import Test from '../Images/Test.jpg'
import '../styles/Cardstyle.css'
import { useNavigate } from 'react-router-dom'

const NewsCard = (props) => {
    const navigate = useNavigate();
//   console.log(props, "props")
//    const NewsCard = () => {
    const newsClicked = (id) => {
        navigate(`/NewsView/${id}`)
    }
    return (
        <div>
            <div className="mvCardCon" onClick={() => newsClicked(props.id)}>
                <div className="mvCardImg">
                    {/* <img src={Test} alt = "TestCard" /> */}
                    <img src={props.newsrep.urlToImage} alt="TestCard" />
                </div>
                <div className="mvCardInfo">
                    {/* <h4>Title of the news goes here</h4> */}
                    <h4>{props.newsrep.title}</h4>
                    {/* <h4>{props.newsrep.year}</h4> */}
                </div>

            </div>
        </div>
    )
}

export default NewsCard

