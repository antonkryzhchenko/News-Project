import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import newsReducer from './news/reducer';
import searchReducer from './search/reducer';
import themeReducer from './theme/reducer';

const saveToLocalStorage = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
};

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
);

const reducers = combineReducers({
    news: newsReducer,
    search: searchReducer,
    theme: themeReducer,  
});

const store = createStore(reducers, loadFromLocalStorage(), composedEnhancer);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;