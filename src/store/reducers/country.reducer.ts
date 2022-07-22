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
        nativeName: "",
        population: "",
        regin: "",
        subRegin: "",
        capital: "",
        topLevelDomain: "",
        currencies: "",
        languages: {
          name: ""
        },
        flag: "",
        borderCountries: []
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
          ...state
        }
      case GET_COUNTRY_SUCCESS:
        return {
          ...state,
          payload: {
            loaded: true,
            success: true,
            countries: action.payload
          }
        }
      case SEARCH_COUNTRY_SUCCESS:
        return {
          ...state,
          search: action.countries
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
        let data = [...state.filter.result.data, ...action.payload.data]
  
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
  