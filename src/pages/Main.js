import {Link} from "react-router-dom";

function Main() {

    return (
        <div>
            <Link to="/newslist"><h1>아카이브 보기</h1></Link>
            <Link to="/popularNews"><h1>인기 기사 보기</h1></Link>
        </div>
    );
}

export default Main;