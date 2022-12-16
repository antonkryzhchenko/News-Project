export const ADD_NEWS = (news) => ({type: 'ADD_NEWS', payload: news});
export const ADD_NEWS_TO_FAVOURITES = (oneNews) => ({type: 'ADD_NEWS_TO_FAVOURITES', payload: oneNews});
export const REMOVE_NEWS_FROM_FAVOURITES = (title) => ({type: 'REMOVE_NEWS_FROM_FAVOURITES', payload: title});