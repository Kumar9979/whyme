import { FAILED, LOADED, LOADING } from "../actions/returnTypes";

export const initialState = {
  loading: true,
  error: false,
  data: [],
};

function jsonApiReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {...state, loading: true, error: false, data: []};
    case LOADED:
      return {...state, loading: false, error: false, data: action.data};
    case FAILED:
      return {...state, loading: false, error: true, data: []};
    default:
      return state;
  }
}

export default jsonApiReducer;
