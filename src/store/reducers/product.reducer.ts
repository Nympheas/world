import {
    CountryUnionType,
    GET_COUNTRY,
    GET_COUNTRY_SUCCESS
  } from "../actions/country.actions"
  import { Country } from "../models/country"
  import {
    FILTER_COUNTRY_SUCCESS
  } from "../actions/country.actions"
  import {
    SEARCH_COUNTRY_SUCCESS,
    FILTER_COUNTRY
  } from "../actions/country.actions"
  
  export interface CountryState {
    createdAt: {
      loaded: boolean
      success: boolean
      countrys: Country[]
    }
    sold: {
      loaded: boolean
      success: boolean
      products: Country[]
    }
    search: Country[]
    filter: {
      loaded: boolean
      success: boolean
      result: {
        size: number
        data: Country[]
      }
    }
    country: {
      loaded: boolean
      success: boolean
      result: Country
    }
  }
  
  const initialState: CountryState = {
    createdAt: {
      loaded: false,
      success: false,
      countrys: []
    },
    sold: {
      loaded: false,
      success: false,
      products: []
    },
    search: [],
    filter: {
      success: false,
      loaded: false,
      result: {
        size: 0,
        data: []
      }
    },
    country: {
      loaded: false,
      success: false,
      result: {
        _id: "",
        name: "",
        price: 0,
        description: "",
        quantity: 0,
        sold: 0,
        photo: new FormData(),
        shipping: false,
        createdAt: ""
      }
    }
  }
  
  export default function countryReducer(
    state = initialState,
    action: CountryUnionType
  ) {
    switch (action.type) {
      case GET_COUNTRY:
        return {
          ...state,
          [action.sortBy]: {
            ...state[action.sortBy === "createdAt" ? "createdAt" : "sold"],
            loaded: false,
            success: false
          }
        }
      case GET_COUNTRY_SUCCESS:
        return {
          ...state,
          [action.sortBy]: {
            loaded: true,
            success: true,
            products: action.payload
          }
        }
      case SEARCH_COUNTRY_SUCCESS:
        return {
          ...state,
          search: action.products
        }
      case FILTER_COUNTRY:
        return {
          ...state,
          filter: {
            loaded: false,
            success: false,
            result: {
              size: 0,
              data: state.filter.result.data
            }
          }
        }
      case FILTER_COUNTRY_SUCCESS:
        let data =
          action.skip === 0
            ? action.payload.data
            : [...state.filter.result.data, ...action.payload.data]
  
        return {
          ...state,
          filter: {
            loaded: true,
            success: true,
            result: {
              size: action.payload.size,
              data
            }
          }
        }
      default:
        return state
    }
  }
  