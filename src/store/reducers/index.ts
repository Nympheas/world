import { connectRouter, RouterState } from "connected-react-router"
import { combineReducers } from "redux"
import { History } from "history"
import productReducer from "./product.reducer"
import { ProductState } from "./product.reducer"

export interface AppState {
  router: RouterState
  product: ProductState
}

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    product: productReducer
  })

export default createRootReducer
