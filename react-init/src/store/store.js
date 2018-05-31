
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: "root",
    storage
};


let store = createStore(
    persistReducer(persistConfig, rootReducer),
    compose(applyMiddleware(thunk))
);


let persistor = persistStore(store);

export default {
    store,
    persistor
}