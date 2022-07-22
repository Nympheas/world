import { Country } from "../models/country"
export const GET_COUNTRY = "GET_COUNTRY"
export const GET_COUNTRY_SUCCESS = "GET_COUNTRY_SUCCESS"

// sortBy=createdAt&order=asc&limit=10

export interface GetCountryAction {
  type: typeof GET_COUNTRY
}

export interface GetCountrySuccessAction {
  type: typeof GET_COUNTRY_SUCCESS
  payload: Country[]
}

export const getCountry = (): GetCountryAction => ({
  type: GET_COUNTRY
})

export const getCountrySuccess = (
  payload: Country[]
): GetCountrySuccessAction => ({
  type: GET_COUNTRY_SUCCESS,
  payload
})

/**
 * 搜索商品
 */

export const SEARCH_COUNTRY = "SEARCH_COUNTRY"
export const SEARCH_COUNTRY_SUCCESS = "SEARCH_COUNTRY_SUCCESS"

export interface SearchCountryAction {
  type: typeof SEARCH_COUNTRY
  payload: {
    name: string
  }
}

export interface SearchCountrySuccessAction {
  type: typeof SEARCH_COUNTRY_SUCCESS
  countries: Country[]
}

export const searchCountry = (payload: {
  name: string
}): SearchCountryAction => ({
  type: SEARCH_COUNTRY,
  payload
})

export const SearchCountrySuccess = (
  countries: Country[]
): SearchCountrySuccessAction => ({
  type: SEARCH_COUNTRY_SUCCESS,
  countries
})

/**
 * 和筛选相关的action
 */

export const FILTER_COUNTRY = "FILTER_COUNTRY"
export const FILTER_COUNTRY_SUCCESS = "FILTER_COUNTRY_SUCCESS"

export interface FilterPayload {
  name: string
}

export interface FilterCountryAction {
  type: typeof FILTER_COUNTRY
  payload: FilterPayload
}

export interface FilterCountrySuccessAction {
  type: typeof FILTER_COUNTRY_SUCCESS
  payload: {
    size: number
    data: Country[]
  }
}

export const filterCountry = (
  payload: FilterPayload
): FilterCountryAction => ({
  type: FILTER_COUNTRY,
  payload
})
export const filterCountrySuccess = (
  payload: {
    size: number
    data: Country[]
  }
): FilterCountrySuccessAction => ({
  type: FILTER_COUNTRY_SUCCESS,
  payload
})

export type CountryUnionType =
  | GetCountryAction
  | GetCountrySuccessAction
  | SearchCountryAction
  | SearchCountrySuccessAction
  | FilterCountryAction
  | FilterCountrySuccessAction