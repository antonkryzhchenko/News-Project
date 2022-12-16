import { useDispatch } from 'react-redux';

import { searchNews } from '../../redux/search/actions';

import styles from '../styles/search.module.css';

const NewsSearch = ({ news }) => {
    const dispatch = useDispatch();

    const searchingNews = (e) => {
        let inputValue = e.target.value;
        if (news) {
            let copyNews = [...news];
            if (inputValue) {
                let filterNews = copyNews.filter((news) => {
                    return news.title.toLowerCase().includes(inputValue.toLowerCase().split(' ').join(''));
                });

                dispatch(searchNews(filterNews));
            } else {
                dispatch(searchNews(null));
            }
        }
    };

    return (
        <div className={styles.inputContainer}>
            <input
                type='text'
                placeholder='Search...'
                name="search"
                autoComplete='off'
                onChange={searchingNews}
            />
            <div className={styles.inputSearch}></div>
        </div>
    );
};

export default NewsSearch;