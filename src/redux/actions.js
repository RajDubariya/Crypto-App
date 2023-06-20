import axios from "axios";

// Action Types
export const FETCH_COIN_DATA_REQUEST = "FETCH_COIN_DATA_REQUEST";
export const FETCH_COIN_DATA_SUCCESS = "FETCH_COIN_DATA_SUCCESS";
export const FETCH_COIN_DATA_FAILURE = "FETCH_COIN_DATA_FAILURE";

// Action Creators
export const fetchCoinDataRequest = () => ({
  type: FETCH_COIN_DATA_REQUEST,
});

export const fetchCoinDataSuccess = (coinData) => ({
  type: FETCH_COIN_DATA_SUCCESS,
  payload: coinData,
});

export const fetchCoinDataFailure = (error) => ({
  type: FETCH_COIN_DATA_FAILURE,
  payload: error,
});

// Thunk function to fetch coin data
export const fetchCoinData = () => {
  return async (dispatch) => {
    dispatch(fetchCoinDataRequest());

    try {
      const response = await axios.get("https://api.coinranking.com/v2/coins", {
        headers: {
          "Content-Type": "application/json",
          "x-access-token":
            "coinranking00438944b2c9fcb3c823e4d7fab89726cfa54a008c5008d1",
        },
      });

      const data = response.data.data.coins;
      // console.log(data)
      dispatch(fetchCoinDataSuccess(data));
    } catch (error) {
      dispatch(fetchCoinDataFailure(error));
    }
  };
};
