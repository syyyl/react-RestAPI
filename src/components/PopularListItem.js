function PopularListItem({news}) {
    return (
        <div className="card">
            <h3>{news.title}</h3>
            <h4>{news.abstract}</h4>
            <p>기자 : {news.byline}</p>
        </div>
    );
}

export default PopularListItem;