import { Country } from "../models/country"
export const GET_COUNTRY = "GET_COUNTRY"
export const GET_COUNTRY_SUCCESS = "GET_COUNTRY_SUCCESS"

// sortBy=createdAt&order=asc&limit=10

export interface GetCountryAction {
  type: typeof GET_COUNTRY
  sortBy: string
  order: string
  limit: number
}

export interface GetCountrySuccessAction {
  type: typeof GET_COUNTRY_SUCCESS
  payload: Country[]
  sortBy: string
}

export const getCountry = (
  sortBy: string,
  order: string = "desc",
  limit: number = 10
): GetCountryAction => ({
  type: GET_COUNTRY,
  sortBy,
  order,
  limit
})

export const getCountrySuccess = (
  payload: Country[],
  sortBy: string
): GetCountrySuccessAction => ({
  type: GET_COUNTRY_SUCCESS,
  payload,
  sortBy
})

/**
 * 搜索商品
 */

export const SEARCH_COUNTRY = "SEARCH_COUNTRY"
export const SEARCH_COUNTRY_SUCCESS = "SEARCH_COUNTRY_SUCCESS"

export interface SearchCountryAction {
  type: typeof SEARCH_COUNTRY
  payload: {
    category: string
    search: string
  }
}

export interface SearchCountrySuccessAction {
  type: typeof SEARCH_COUNTRY_SUCCESS
  products: Country[]
}

export const searchProduct = (payload: {
  category: string
  search: string
}): SearchCountryAction => ({
  type: SEARCH_COUNTRY,
  payload
})

export const SearchCountrySuccess = (
  products: Country[]
): SearchCountrySuccessAction => ({
  type: SEARCH_COUNTRY_SUCCESS,
  products
})

/**
 * 和筛选相关的action
 */

export const FILTER_COUNTRY = "FILTER_COUNTRY"
export const FILTER_COUNTRY_SUCCESS = "FILTER_COUNTRY_SUCCESS"

export interface FilterPayload {
  order?: string
  sortBy?: string
  limit?: number
  skip: number
  filters?: {
    category: string[]
    price: number[]
  }
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
  skip: number
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
  },
  skip: number
): FilterCountrySuccessAction => ({
  type: FILTER_COUNTRY_SUCCESS,
  payload,
  skip
})

export type CountryUnionType =
  | GetCountryAction
  | GetCountrySuccessAction
  | SearchCountryAction
  | SearchCountrySuccessAction
  | FilterCountryAction
  | FilterCountrySuccessAction