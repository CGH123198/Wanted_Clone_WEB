import RootRoute from './routes';
import "./App.scss";

import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer, {rootSaga} from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
        <RootRoute />
    </Provider>
  );
}

export default App;
