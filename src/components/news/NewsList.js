import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import { Link } from "react-router-dom";

import { fetchNews } from "../../services/news";

import noImage from '../../images/noimage.jpg';
import NewsSearch from "./NewsSearch";
import Loader from "../loader/Loader";

import styles from '../styles/newsList.module.css';
import { ADD_NEWS } from "../../redux/news/actions";

const NewsList = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);
    const searchNews = useSelector(state => state.search.search);
    const category = useSelector(state => state.news.category);

    useEffect(() => {
        if(category) {
            axios.get(`https://newsdata.io/api/1/news?apikey=pub_13702e6091de01a9a37583ce1a10db68d2a3f&language=en&category=${category}`)
            .then((response) => {
                const news = response.data.results;
            dispatch(ADD_NEWS(news));
            })
        } else {
            dispatch(fetchNews())
        }
        
    },[category]);

    if (!news) {
        return (
            <div>
                <Loader />
            </div>
        )
    }

    return (
        <div className="container">
            <div>
                <NewsSearch news={news}/>
            </div>
        <div className={styles.newsListCards}>
            {news &&
            (searchNews? searchNews: news).map((news, index) => (
                <Link key={index} to={`/news/${news.title}`} className={styles.newsListLink} >
                <div className={styles.newsListCard}>
                    <div className={styles.newsListCardContent}>
                    <img
                    className={styles.newsListCardImg}
                    src={news.image_url ? news.image_url : noImage}
                    alt='News-img'
                    />
                    <p className={styles.newsListCardTitle}>{news.title}</p>
                    </div>
                    <div className={styles.newsListCardDesc}>
                        <p className={styles.newsListCardDescText}>Published: {news.pubDate}</p>
                    </div>
                </div>
                    </Link>
            ))}
        </div>
        </div>
    )
}
export default NewsList;