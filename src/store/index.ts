import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

import reducers from "../reducers"
import apiCaller from "../middleware/apiCaller"

const middleware = applyMiddleware(apiCaller, thunk)
const store = createStore(reducers, middleware)

export default store
