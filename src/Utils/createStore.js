import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"

export default ({ rootReducer, rootSaga = null }) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  )

  if (rootSaga) {
    sagaMiddleware.run(rootSaga)
  }
  return store
}
