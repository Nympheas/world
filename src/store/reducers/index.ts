import { connectRouter, RouterState } from "connected-react-router"
import { combineReducers } from "redux"
import { History } from "history"
import countryReducer from "./country.reducer"
import { CountryState } from "./country.reducer"
import modeReducer, { ModeState } from "./mode.reducer"

export interface AppState {
  router: RouterState
  country: CountryState
  mode: ModeState
}

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    country: countryReducer,
    mode: modeReducer
  })

export default createRootReducer
