
function NewsListItem({news}) {
    return (
        <div className="card">
            <h3>{news.headline.main}</h3>
            <h4>분야 : {news.section_name}</h4>
            <p>주소 : {news.web_url}</p>
        </div>
    );
}

export default NewsListItem;