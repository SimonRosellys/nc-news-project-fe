import "./App.css";
import Header from "../src/components/Header";
import Navbar from "../src/components/Navbar";
import Articles from "./components/Article";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Article from "./components/Article";

function App() {
  // set a current topic in state????
  // const [topic, setTopic] = useState("All");
  // console.log(topic);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/topics/:topic_slug" element={<Article />} />
        <Route path="/article/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
