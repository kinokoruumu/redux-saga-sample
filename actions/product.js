import { ActionTypes } from "./type";

export const requestGetProducts = () => ({
  type: ActionTypes.REQUEST_GET_PRODUCTS
});

export const successGetProducts = payload => ({
  type: ActionTypes.SUCCESS_GET_PRODUCTS,
  payload
});

export const failureGetProducts = errors => ({
  type: ActionTypes.FAILURE_GET_PRODUCTS,
  errors: errors
});
