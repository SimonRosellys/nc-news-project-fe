import "./App.css";
import Header from "../src/components/Header";
import Navbar from "../src/components/Navbar";
import { Routes, Route } from "react-router-dom";
import Article from "./components/Article-List";
import ArticleSingle from "./components/Article-Single";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Article />} />
        <Route path="/topics/:topic_slug" element={<Article />} />
        <Route path="/article/:article_id" element={<ArticleSingle />} />
      </Routes>
    </div>
  );
}

export default App;
