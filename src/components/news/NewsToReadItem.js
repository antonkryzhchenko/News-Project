import styles from '../styles/newsToReadItem.module.css';

import noImage from '../../images/noimage.jpg';

const NewsToReadItem = ({image_url, title, creator, pubDate, onClick}) => {
    return (
        <div className={styles.newsToReadItemCard}>
            <img
            src={image_url ? image_url : noImage}
            alt='News-img'
            />
            <p className={styles.newsToReadItemTitle}>{title}</p>
            <p className={styles.newsToReadItemAuthor}>Author: {creator ? creator : 'No name'}</p>
            <p className={styles.newsToReadItemPubDate}>PubDate: {pubDate ? pubDate : 'No date'}</p>
            <button className={styles.button} onClick={() => onClick(title)}>Remove from favourites</button>
        </div>
    )
}
export default NewsToReadItem;