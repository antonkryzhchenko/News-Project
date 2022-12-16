const initialState = {
    news: [],
    favourite: false,
    favouriteNews: [],
}

const newsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_NEWS':
            return {...state, news: action.payload};

            case 'ADD_NEWS_TO_FAVOURITES':
                const favourites = state.favouriteNews.filter(item => item.title !== action.payload.title);
                return {favourite: true, favouriteNews: [...favourites, action.payload], news: state.news}; 
            
            case 'REMOVE_NEWS_FROM_FAVOURITES':
            const filteredFavouritesNews = state.favouriteNews.filter(item => action.payload !== item.title);
            return {favourite: false, favouriteNews: [...filteredFavouritesNews], news: state.news};

            default:
                return state;
            }
        }
        export default newsReducer;