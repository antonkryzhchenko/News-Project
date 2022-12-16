import axios from "axios";
import { ADD_NEWS } from "../redux/news/actions";

export const fetchNews = () => {
    return function (dispatch) {
        axios.get('https://newsdata.io/api/1/news?apikey=pub_13702e6091de01a9a37583ce1a10db68d2a3f&language=en')
        .then((response) => {
            const news = response.data.results;
            dispatch(ADD_NEWS(news));
        })
    }
}