import "./App.css";
import {  CoinDetail, News, About } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<CoinDetail />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
