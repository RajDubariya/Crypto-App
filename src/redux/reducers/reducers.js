import {
  FETCH_COIN_DATA_REQUEST,
  FETCH_COIN_DATA_SUCCESS,
  FETCH_COIN_DATA_FAILURE,
} from "../actions";

const initialState = {
  coinData: [],
  isLoading: false,
  error: null,
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COIN_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_COIN_DATA_SUCCESS:
      return {
        ...state,
        coinData: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_COIN_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default coinReducer;
