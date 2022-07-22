import { ConnectedRouter } from "connected-react-router"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import RootRoutes from "./Routes"
import store from "./store/index"
import { history } from "./store"

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RootRoutes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)
