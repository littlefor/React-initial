import registerServiceWorker from './registerServiceWorker'; 

import React from 'react';
import ReactDom from  'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'

import App from './app';
import store from './store/store';

import './styles/app.css';

ReactDom.render(
    <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();