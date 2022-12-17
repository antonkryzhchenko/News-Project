import styles from '../styles/loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <h2 className={styles.loaderTitle}>Loading...</h2>
            <div className={styles.loaderSpinner}></div>
        </div>
    )
}
export default Loader;