import { useSelector } from 'react-redux';

import NewsList from '../components/news/NewsList';

const MainPage = () => {
    const category = useSelector(state => state.news.category);

    if (!category) {
        return (
            <div>
                <NewsList />
            </div>
        )
    }

    return (
        <>
            <NewsList />
        </>
    )
}
export default MainPage;