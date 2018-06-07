import { call, put, takeLatest, fork, all } from "redux-saga/effects"

import { ActionTypes as ProductTypes } from "./actions/type"
import * as ProductActions from "./actions/product"
import * as APIClient from "./api"

// ここから
function* getProducts(action) {
  try {
    const products = yield call(APIClient.getProducts);
    yield put(ProductActions.successGetProducts(products));
  } catch (e) {
    yield put(ProductActions.failureGetProducts(e))
  }
}

export function* watchGetProducts() {
  yield takeLatest(ProductTypes.REQUEST_GET_PRODUCTS, getProducts)
}
// ここまでファイル分割


// sagas.jsでexportする
export default function* sagas() {
  yield all([
    fork(watchGetProducts)
  ])
}
