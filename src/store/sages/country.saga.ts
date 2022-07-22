import { put, takeEvery } from "redux-saga/effects"
import {
  GET_COUNTRY,
  getCountrySuccess
} from "../actions/country.actions"
import axios from "axios"
import { Country } from "../models/country"
import {
  FilterCountryAction,
  filterCountrySuccess
} from "../actions/country.actions"
import {
  SearchCountrySuccess,
  FILTER_COUNTRY
} from "../actions/country.actions"
import {
  SEARCH_COUNTRY,
  SearchCountryAction
} from "../actions/country.actions"

const API = "https://restcountries.com/v3.1";

// /products?sortBy=createdAt&order=asc&limit=10
function* handleGetCountry() {
  let response = yield axios.get<Country[]>(`${API}/all`)
  yield put(getCountrySuccess(response.data))
}

function* handleSearchCountry({
  payload: { name }
}: SearchCountryAction) {
  let response = yield axios.get(`${API}/name`, {
    params: { name }
  })
  yield put(SearchCountrySuccess(response.data))
}

function* handleFilterCountry({
  payload: { name }
}: FilterCountryAction) {
  let response = yield axios.post(`${API}/region`, {
    params: { name }
  })
  yield put(filterCountrySuccess(response.data))
}

export default function* countrySaga() {
  yield takeEvery(GET_COUNTRY, handleGetCountry)
  yield takeEvery(SEARCH_COUNTRY, handleSearchCountry)
  yield takeEvery(FILTER_COUNTRY, handleFilterCountry)
}
