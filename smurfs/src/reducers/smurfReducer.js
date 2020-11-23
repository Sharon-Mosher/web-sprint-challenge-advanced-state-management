import { FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS } from "../actions";

//setup initial state HERE

const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

// Start Fetch

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };

    //Successfully get Data

    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    default:
      return state;
  }
};
