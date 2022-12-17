import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";

import { ADD_NEWS_TO_FAVOURITES } from "../../redux/news/actions";

import noImage from '../../images/noimage.jpg';

import Loader from "../loader/Loader";

import { contentText } from '../../const/Const';

import styles from '../styles/newsItem.module.css';

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

    if (!oneNews) {
        return (
            <div className="container">
                <Loader />
            </div>
        )
    }

    return(
        <div className="container">
            {oneNews && (
                <div className={styles.newsItemContainer}>
                    <img
                        className={styles.newsItemImg}
                        src={oneNews.image_url ? oneNews.image_url : noImage}
                        alt='img not found'
                    />                    
                    <h1>{oneNews.title}</h1>
                    <p className={styles.newsItemText}>{oneNews.content ? oneNews.content : contentText}</p>
                    <p className={styles.newsItemAuthor}>Author: {oneNews.creator ? oneNews.creator : 'No name'}</p>
                    <button className={styles.button} onClick={() => {dispatch(ADD_NEWS_TO_FAVOURITES(oneNews))}}>Mark as important</button>
                </div>
            )}
        </div>
    )
}
export default NewsItem;