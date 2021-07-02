import { createStore, compose, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'

// ======================================================
// Middleware Configuration
// ======================================================
const middleware = [
  thunkMiddleware,
]

// ======================================================
// Store Enhancers
// ======================================================
const enhancers = []

let composeEnhancers = compose

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-undef, no-underscore-dangle
  const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension
  }
}

// eslint-disable-next-line no-undef, no-underscore-dangle
// const devtools = typeof window !== 'undefined' && window.
//   REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const makeStore = (initialState) => createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers,
  ),
)

const storeWrapper = createWrapper(makeStore)

export default storeWrapper
