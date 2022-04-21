import "./App.css";
import Header from "../src/components/Header";
import Navbar from "../src/components/Navbar";
import { Routes, Route } from "react-router-dom";
import Article from "./components/Article";
import FullArticle from "./components/FullArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Article />} />
        <Route path="/topics/:topic_slug" element={<Article />} />
        <Route path="/article/:article_id" element={<FullArticle />} />
      </Routes>
    </div>
  );
}

export default App;
