import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
} from "../actions";

const initialState = {
  isloading: false,
  smurfsData: [],
  error: "",
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isloading: true,
        error: "",
      };

    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isloading: false,
        smurfData: action.payload,
      };

    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
