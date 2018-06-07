import { ActionTypes } from "./actions/type"

const initialState = {
  isFetching: false,
  products: []
};

export default function product(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_GET_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ActionTypes.SUCCESS_GET_PRODUCTS:
      return Object.assign({}, state, {
        products: action.payload,
        isFetching: false
      });
    case ActionTypes.FAILURE_GET_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state
  }
}
