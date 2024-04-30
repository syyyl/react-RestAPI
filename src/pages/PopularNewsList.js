import {useEffect, useState} from "react";
import {getPopularNewsList} from "../api/NewsAPI";
import NewsListItem from "../components/NewsListItem";
import PopularListItem from "../components/PopularListItem";

function PopularNewsList() {

    const [newsList, setNewsList] = useState();

    useEffect(() => {
        getPopularNewsList().then(data => setNewsList(data));
    }, []);

    console.log('newslist2 : ', newsList);
    return (
        <div>
            { newsList && newsList.map(news => <PopularListItem key={news.id} news={news}/>) }
        </div>
    );
}

export default PopularNewsList;