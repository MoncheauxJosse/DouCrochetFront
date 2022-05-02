import { configureStore } from '@reduxjs/toolkit';

import authenticationReducer from './authenticationSlice';

/**
 * To configure the store redux.
 *
 * @author Peter Mollet
 */
export const store = configureStore({
    reducer: {
        auth: authenticationReducer,
    },
});
