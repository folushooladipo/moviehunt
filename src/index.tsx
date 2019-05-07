import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store/"
import RootComponent from "./pages"

ReactDOM.render(
    <Provider store={ store }>
        <RootComponent />
    </Provider>,
  document.getElementById("root-app")
)
