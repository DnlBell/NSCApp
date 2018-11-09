// reducers/index.js
// a collection of all the current reducers to be ingested into combine reducers
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import searchReducer from './searchReducer';
import cartReducer from './cartReducer';


const rootReducer = combineReducers(
    {
        authReducer,
        userReducer,
        searchReducer,
        cartReducer,
    }
);

export default rootReducer;
