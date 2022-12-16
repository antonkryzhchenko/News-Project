import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { fetchNews } from "../../services/news";

import noImage from '../../images/noimage.jpg';
import NewsSearch from "./NewsSearch";
import NewsLoader from "./NewsLoader";

import styles from '../styles/newsList.module.css';

const NewsList = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);
    const searchNews = useSelector(state => state.search.search)

    useEffect(() => {
        dispatch(fetchNews())
    }, []);

    if (!news) {
        return (
            <div>
                <NewsLoader />
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
                <Link key={index} to={`news/${news.title}`} className={styles.newsListLink} >
                <div className={styles.newsListCard}>
                    <div className={styles.newsListCardContent}>
                    <img
                    className={styles.newsListCardImg}
                    src={news.image_url ? news.image_url : noImage}
                    alt='img not found'
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