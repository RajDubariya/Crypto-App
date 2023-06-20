import React, { useEffect, useState } from "react";
import millify from "millify";
import Banner from "./Banner";
import { fetchCoinData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CoinChart from "./CoinChart";
import Navbar from './Navbar'

const CoinDetail = () => {
  const dispatch = useDispatch();
  const coinData = useSelector((state) => state.coin.coinData);
  const isLoading = useSelector((state) => state.coin.isLoading);

  const [selectedCoin, setSelectedCoin] = useState(null);

  const formatPrice = (price) => {
    const numericValue = price.replace("K", "");
    return millify(numericValue, { precision: 3 });
  };

  useEffect(() => {
    dispatch(fetchCoinData());
  }, [dispatch]);

  return (
    <>
    <Navbar/>
      {selectedCoin ? (
        <CoinChart coin={selectedCoin} goBack={() => setSelectedCoin(null)} />
      ) : (
        <div>
          <Banner />
          {isLoading ? (
            <div className=" flex justify-center py-3">
              <div
                className="inline-block h-9 w-9 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-center"
                role="status"
              ></div>
            </div>
          ) : (
            <div>
              <div className=" w-[100%] font-medium flex items-center justify-between py-4 capitalize text-lg">
                <p className="text-center w-1/6">index</p>
                <p className="text-center w-1/6">name</p>
                <p className="text-center w-1/6">price</p>
                <p className="text-center w-1/6">marketCap</p>
                <p className="text-center w-1/6">change</p>
              </div>

              <div>
                <ul>
                  {coinData &&
                    coinData.map((coin) => (
                      <li
                        key={coin.uuid}
                        className="border py-6 flex items-center justify-between"
                      >
                        <p className="text-center w-1/6">{coin.rank}</p>

                        <div
                          className="text-center w-1/6 flex items-center justify-center cursor-pointer"
                          onClick={() => setSelectedCoin(coin)}
                        >
                          <img
                            src={coin.iconUrl}
                            alt={coin.iconUrl}
                            className="w-[22px] mr-2"
                          />
                          <p>{coin.name}</p>
                          <p className=" text-xs text-gray-400 ml-3">
                            {coin.symbol}
                          </p>
                        </div>
                        <p className="text-center w-1/6">
                          {formatPrice(coin.price, {
                            lowercase: true,
                          })}
                          $
                        </p>
                        <p className="text-center w-1/6">{coin.marketCap}</p>
                        <p className="text-center w-1/6">{coin.change}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CoinDetail;
