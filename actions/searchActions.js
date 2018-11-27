// searchActions.js

import actionTypes from '../constants/actionsTypes';

function updateFilter(filter = {}) {
    return {
        type: actionTypes.SEARCH_UPDATE_FILTER,
        filter,
    };
}

export function receiveUpdateFilter(filter) {
    return {
        type: actionTypes.SEARCH_RECEIVE_UPDATE_FILTER,
        filter,
    };
}

export function resetFilter() {
    return {
        type: actionTypes.SEARCH_RESET_FILTER,
    };
}

export function receiveResetFilter() {
    return {
        type: actionTypes.SEARCH_RESET_FILTER,
    };
}

export function fetchProducts(filter = {}) {
    return {
        type: actionTypes.SEARCH_FETCH_PRODUCTS,
        filter,
    };
}

export function receiveProducts(results) {
    return {
        type: actionTypes.SEARCH_RECEIVE_PRODUCTS,
        results,
    }
}

export function fetchAspirational(filter = {}) {
    return {
        type: actionTypes.SEARCH_FETCH_ASPIRATIONAL,
        filter
    };
}

export function receiveAspirational() {
    return {
        type: actionTypes.SEARCH_RECEIVE_ASPIRATIONAL,
        results,
    }
}


module.exports = updateFilter;