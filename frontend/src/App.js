import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/Error/NotFound';
import MainPage from './Pages/MainPage/MainPage';
import data from './JSON/data.json'
import NewsBlogPage from './Pages/NewsBlogPage/NewsBlogPage';
import BusinessBlogPage from './Pages/BusinessBlogPage/BusinessBlogPage';
import SociologyBlogPage from './Pages/SociologyBlogPage/SociologyBlogPage';
import TechBlogPage from './Pages/TechBlogPage/TechBlogPage';
import EconomicBlogPage from './Pages/EconomicBlogPage/EconomicBlogPage';
import OtherBlogPage from './Pages/OtherBlogPage/OtherBlogPage';
import SingleBlog from './Pages/SingleBlog/SingleBlog';

function App() {
  return (
   <>
    <div className="container">
      <Routes>
        <Route exact path="/" element={<MainPage data={data.mainPage}/>} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/news" element={<NewsBlogPage />} />
        <Route exact path="/business" element={<BusinessBlogPage />} />
        <Route exact path="/sociology" element={<SociologyBlogPage />} />
        <Route exact path="/tech" element={<TechBlogPage />} />
        <Route exact path="/economic" element={<EconomicBlogPage />} />
        <Route exact path="/blog/:id" element={<SingleBlog />} />
        <Route exact path="/other" element={<OtherBlogPage />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </div>
   </>
  );
}

export default App;
