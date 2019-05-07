import * as React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import FourZeroFour from "./FourZeroFour"

export default function RootComponent() {
  return (
    <BrowserRouter>
        <Switch>
            <Route
                exact
                path="/"
                component={ Dashboard }
            />
            <Route
                exact
                path="/dashboard"
                component={ Dashboard }
            />
            <Route
                exact
                path="*"
                component={ FourZeroFour }
            />
        </Switch>
    </BrowserRouter>
  )
}
