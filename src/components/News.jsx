import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("coindesk");

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://crypto-news16.p.rapidapi.com/news/${source}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "2302923322msh9cb6198e8560fb9p12d275jsn2162b27f44f6",
            "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
          },
        }
      );
      const news = response.data;
      setNews(news);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  const getValue = (e) => {
    const value = e.target.value;
    setSource(value);
  };

  return (
    <>
    <Navbar/>
      <div className=" w-full flex flex-col items-center justify-center py-2 text-white ">
        <div>
          <button
            value={"cointelegraph"}
            onClick={getValue}
            className="capitalize rounded-md px-3 py-2 mx-2 bg-sky-600"
          >
            cointelegraph
          </button>
          <button
            value={"coinjournal"}
            onClick={getValue}
            className="capitalize rounded-md px-3 py-2 mx-2 bg-sky-600"
          >
            coinjournal
          </button>
          <button
            value={"yahoo"}
            onClick={getValue}
            className="capitalize rounded-md px-3 py-2 mx-2 bg-sky-600"
          >
            yahoo
          </button>
        </div>
        <div className=" text-black capitalize pt-2">
          <p>by default news are being fetched from coindesk !!</p>
        </div>
      </div>

      {loading ? (
        <div className=" flex justify-center py-3">
          <div
            className="inline-block h-9 w-9 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-center"
            role="status"
          ></div>
        </div>
      ) : (
        <div className=" grid grid-cols-4 gap-3 px-4 py-1">
          {news.map((news) => (
            <div
              key={news.url}
              className="px-4 py-2 border rounded-xl shadow-md "
            >
              <p>{news.title}</p>
              <p className="py-4">{news.description}</p>
              <button className="bg-sky-500 px-3 py-2 rounded-md capitalize text-white hover:bg-sky-600">
                <a href={news.url}>read more</a>
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default News;
