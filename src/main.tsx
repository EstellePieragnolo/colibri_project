import React from 'react'
import ReactDOM from 'react-dom/client'
import AppWrapper from './App'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> {/* Delay the rendering of our app’s UI until the persisted data is available in the Redux store */}
        {/* Can add a loading component - spining like - in loading */}
        <AppWrapper />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
