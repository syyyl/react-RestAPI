import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import NewsArchiveList from "./pages/NewsArchiveList";
import PopularNewsList from "./pages/PopularNewsList";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
            <Route path="newslist" element={<NewsArchiveList/>}/>
            <Route path="popularNews" element={<PopularNewsList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
