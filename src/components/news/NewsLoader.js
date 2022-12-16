import styles from '../styles/newsLoader.module.css';

const NewsLoader = () => {
    return (
        <div className={styles.newsLoader}>
            <h2>Loading...</h2>
            <div className={styles.spinner}></div>
        </div>
    )
}
export default NewsLoader;