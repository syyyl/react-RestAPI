import {useEffect, useState} from "react";
import {getNewsArchiveList, getNewsList} from "../api/NewsAPI";
import NewsListItem from "../components/NewsListItem";

function NewsArchiveList() {

    const [newsList, setNewsList] = useState();

    useEffect(() => {
        getNewsArchiveList().then(data => setNewsList(data));
    }, []);

    console.log('newslist : ', newsList);
    return (
        <div>
            { newsList && newsList.map(news => <NewsListItem key={news._id} news={news}/>) }
        </div>
    );
}

export default NewsArchiveList;