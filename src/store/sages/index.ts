import { all } from "redux-saga/effects"
import countrySaga from "./country.saga"

export default function* rootSaga() {
  yield all([countrySaga()])
}
