import { useDispatch, useSelector } from "react-redux";

import NewsToReadItem from "../components/news/NewsToReadItem";

import {REMOVE_NEWS_FROM_FAVOURITES} from '../redux/news/actions';

import styles from '../components/styles/toReadPage.module.css';

const Favourites = () => {
    const dispatch = useDispatch();
    const favouriteNews = useSelector((state) => state.news.favouriteNews);

    const handleClick = (title) => {
        dispatch(REMOVE_NEWS_FROM_FAVOURITES(title));
    }

    const oneFavNews = favouriteNews.map(item => {
        return <NewsToReadItem key={item.title} {...item} onClick={handleClick} />
    })

        return(
            <div className="container">
                <div className={styles.newsToReadList}>
                    {oneFavNews}
                </div>
            </div>
        )
}

export default Favourites;