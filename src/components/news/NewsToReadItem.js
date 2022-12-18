import { useSelector } from "react-redux";

import classNames from "classnames";

import styles from "../styles/newsToReadItem.module.css";

import noImage from "../../images/noimage.jpg";

const NewsToReadItem = ({ image_url, title, creator, pubDate, onClick }) => {
  const theme = useSelector((state) => state.theme.theme);

  const classNewsToReadItemCard = classNames(styles.newsToReadItemCard, {
    [styles.newsToReadItemCardDark]: theme === "dark",
  });

  const classNewsToReadItemTitle = classNames(styles.newsToReadItemTitle, {
    [styles.newsToReadItemTitleDark]: theme === "dark",
  });

  const classNewsToReadItemAuthor = classNames(styles.newsToReadItemAuthor, {
    [styles.newsToReadItemAuthorDark]: theme === "dark",
  });

  const classNewsToReadItemPubDate = classNames(styles.newsToReadItemPubDate, {
    [styles.newsToReadItemPubDateDark]: theme === "dark",
  });

  return (
    <div className={classNewsToReadItemCard}>
      <img src={image_url ? image_url : noImage} alt="News-img" />
      <p className={classNewsToReadItemTitle}>{title}</p>
      <p className={classNewsToReadItemAuthor}>
        Author: {creator ? creator : "No name"}
      </p>
      <p className={classNewsToReadItemPubDate}>
        PubDate: {pubDate ? pubDate : "No date"}
      </p>
      <button className={styles.button} onClick={() => onClick(title)}>
        Remove from important
      </button>
    </div>
  );
};
export default NewsToReadItem;
