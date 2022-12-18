import { useDispatch, useSelector } from "react-redux";

import NewsToReadItem from "../components/news/NewsToReadItem";

import { REMOVE_NEWS_FROM_FAVOURITES } from "../redux/news/actions";

import classNames from "classnames";

import styles from "../components/styles/toReadPage.module.css";

const Favourites = () => {
  const dispatch = useDispatch();
  const favouriteNews = useSelector((state) => state.news.favouriteNews);
  const theme = useSelector((state) => state.theme.theme);

  const handleClick = (title) => {
    dispatch(REMOVE_NEWS_FROM_FAVOURITES(title));
  };

  const classToReadPage = classNames(styles.toReadPage, {
    [styles.toReadPageDark]: theme === "dark",
  });

  const oneFavNews = favouriteNews.map((item) => {
    return <NewsToReadItem key={item.title} {...item} onClick={handleClick} />;
  });

  return (
    <div className={classToReadPage}>
      <div className="container">
        <div className={styles.newsToReadList}>{oneFavNews}</div>
      </div>
    </div>
  );
};

export default Favourites;
