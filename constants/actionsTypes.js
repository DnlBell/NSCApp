// actionTypes.js

import keyMirror from 'keymirror';

// Generally I pair UPDATE/FETCH (sagas) with RECEIVE (reducers)

export default keyMirror({
        //Search Actions
    SEARCH_UPDATE_FILTER: null,
    SEARCH_RECEIVE_UPDATE_FILTER: null,

    SEARCH_RESET_FILTER: null,
    SEARCH_RECEIVE_RESET_FILTER: null,

    SEARCH_FETCH_PRODUCTS: null,
    SEARCH_RECEIVE_PRODUCTS: null,

    SEARCH_FETCH_ASPIRATIONAL: null,
    SEARCH_RECEIVE_ASPIRATIONAL: null,
    
    AUTH_FETCH_LOGIN: null, 
    LOGIN_RECIEVE_USER_INFO: null,
    AUTH_RECEIVE_UPDATE_LOGIN: null,
    AUTH_RECEIVE_LOGIN: null,
});
