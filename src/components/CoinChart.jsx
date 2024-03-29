import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { MdArrowBack } from "react-icons/md";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import millify from "millify";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const CoinChart = ({ coin, goBack }) => {
  const [coinSparkline, setCoinSparkline] = useState([]);

  const formatPrice = (price) => {
    const numericValue = price.replace("K", "");
    return millify(numericValue, { precision: 3 });
  };

  useEffect(() => {
    setCoinSparkline(coin.sparkline);
  }, [coin.sparkline]);

  return (
    <>
      <div className=" w-screen flex items-center justify-center flex-col">
        <div className="py-1 md:text-xl sm:text-lg text-xs  w-full  flex items-center justify-around capitalize mb-8 border-b-2 border-sky-600 text-center">
          <button onClick={goBack}>
            <MdArrowBack size={20} className=" mr-2" />
          </button>

          <div className="md:p-5 sm:p-2 p-1 flex items-center justify-center ">
            <img
              src={coin.iconUrl}
              alt={coin.iconUrl}
              className="md:w-[30px] w-[20px] mr-1"
            />
            <p>{coin.name}</p>
            <p className="text-xs ml-1 text-gray-400 "> {coin.symbol}</p>
          </div>

          <div className="md:p-5 sm:p-2 p-1">
            current price : {formatPrice(coin.price)} $
          </div>

          <div className="md:p-5 sm:p-2 p-1 ">
            <p>listed at : {coin.listedAt} </p>
          </div>

          <div className="md:p-5 sm:p-2 p-1 ">change : {coin.change}</div>
        </div>

        <Line
          height={35}
          width={100}
          data={{
            labels: Array.from(
              { length: coinSparkline.length },
              (_, i) => i + 1
            ),
            datasets: [
              {
                label: "Price $",
                data: coinSparkline,
                borderColor: "rgb(168, 85 ,247)",
                backgroundColor: "rgb(168 ,85 ,247,0.7)",
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "Bitcoin Price Chart",
              position: "top",
            },
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: "Price ( in $ )", // Customize the y-axis title
                },
              },
            },
            elements: {
              point: {
                radius: 4,
                hoverRadius: 6, // Set the point radius to 0 to hide the data points
              },
            },
            layout: {
              padding: {
                left: 10,
                right: 10,
                top: 20,
                bottom: 10,
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default CoinChart;
