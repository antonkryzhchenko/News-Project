import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";

import { ADD_NEWS_TO_FAVOURITES } from "../../redux/news/actions";

import Header from "../header/Header";

import noImage from '../../images/noimage.jpg';

const url = 'https://newsdata.io/api/1/news?apikey=pub_13702e6091de01a9a37583ce1a10db68d2a3f&language=en';

const NewsItem = () => {
    const [oneNews, setOneNews] = useState();  
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${url}&q=${id}`)
            .then((response) => {
                const oneNews= response.data.results[0];
                setOneNews(oneNews);
            })
    }, [id]);

    return(
        <div>
            <div>
                <Header />
            </div>
            {oneNews && (
                <div>
                    <img 
                        src={oneNews.image_url ? oneNews.image_url : noImage}
                        alt='img not found'
                    />                    
                    <h2>{oneNews.title}</h2>
                    <p>{oneNews.content}</p>
                    <button onClick={() => {dispatch(ADD_NEWS_TO_FAVOURITES(oneNews))}}>Прочитать позже</button>
                </div>
            )}
        </div>
    )
}
export default NewsItem;