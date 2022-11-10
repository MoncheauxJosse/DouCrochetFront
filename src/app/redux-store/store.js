import {combineReducers, configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import authenticationReducer from './authenticationSlice';
import {persistReducer, persistStore} from "redux-persist";
import cartReducer from "../redux-store/cartSlice";

/**
 * To configure the store redux.
 *
 * @author Peter Mollet
 */
const rootReducer = combineReducers( {
    auth: authenticationReducer,
    cart: cartReducer
});

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);
