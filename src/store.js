import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import createRootReducer from './reducers'

export const history = createBrowserHistory()

export default function configureStore(initialState) {
  const SagaMiddleware = createSagaMiddleware()
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    initialState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        SagaMiddleware,
      ),
    ),
  )

  return { ...store, runSaga: SagaMiddleware.run }
}

// import { createStore, applyMiddleware } from "redux"
// import { composeWithDevTools } from "redux-devtools-extension"
// // import { routerMiddleware } from "react-router-redux"
// import { connectRouter } from 'connected-react-router'

// import createSagaMiddleware from "redux-saga"

// import createHistory from "history/createBrowserHistory"

// import RootReducer from "./reducers"

// export const history = createHistory({ basename: `/` })

// export default function configureStore(initialState) {
//   const RouterMiddleware = connectRouter(history)
//   const SagaMiddleware = createSagaMiddleware()

//   return {
//     ...createStore(
//       RootReducer,
//       initialState,
//       composeWithDevTools(
//         applyMiddleware(RouterMiddleware, SagaMiddleware)
//       )
//     ),
//     runSaga: SagaMiddleware.run
//   }
// }
