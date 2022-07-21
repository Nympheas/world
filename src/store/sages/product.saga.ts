import { put, take, takeEvery } from "redux-saga/effects"
import {
  GET_COUNTRY,
  GetCountryAction,
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
function* handleGetCountry({ sortBy, order, limit }: GetCountryAction) {
  let response = yield axios.get<Country[]>(`${API}/products`, {
    params: { sortBy, order, limit }
  })
  yield put(getCountrySuccess(response.data, sortBy))
}

function* handleSearchCountry({
  payload: { search, category }
}: SearchCountryAction) {
  let response = yield axios.get(`${API}/products/search`, {
    params: { search, category }
  })
  yield put(SearchCountrySuccess(response.data))
}

function* handleFilterCountry(action: FilterCountryAction) {
  let response = yield axios.post(`${API}/products/filter`, action.payload)
  yield put(filterCountrySuccess(response.data, action.payload.skip))
}

export default function* productSaga() {
  yield takeEvery(GET_COUNTRY, handleGetCountry)
  yield takeEvery(SEARCH_COUNTRY, handleSearchCountry)
  yield takeEvery(FILTER_COUNTRY, handleFilterCountry)
}
