// searchReducer.js
// Holds current current cart, filter and search results
import actionTypes from '../constants/actionsTypes';
import extend from 'lodash/extend';
import filter from 'mspnmodel/distribution/filter/filter';
import filterKeywords from 'mspnmodel/distribution/filter/filterKeyword';
import Course from 'mspnmodel/distribution/course/course';


const initialFilter = new filter();
const initialKeywordFilter = new filterKeywords();
initialKeywordFilter.setKeywords([]);
initialFilter.keywords = initialKeywordFilter;

const defaultState = {
    searchFilter: initialFilter,             // current filter object
    searchResultsCourses: [],     // current courses result (sub)set
    searchResultsPartners: [],    // current partners result (sub)set
};

function reduceUpdateFilter(state, action) {
    const newState = extend({}, state, {searchFilter: action.filter});
    return newState;
}

function reduceResetFilter(state, action) {
    const newState = extend({}, state,  {searchFilter: {}});
    return newState;
}

    // store results from search
function reduceSearchResults(state, action) {
    // :TODO: Implement
    if (action.results && action.results.courses) {
        const rawCourseArray = action.results.courses;
        const rawVendorArray = action.results.vendors;
        const courseArray = [];
        //const vendorArray = [];

        for (let ci = 0; ci < rawCourseArray.length; ci++) {
            const c = new Course();
            c.buildFromJSON(rawCourseArray[ci]);
            courseArray.push(c);
        }

        //:TODO: vendors need to be implemented as well.

        const newState = extend({}, state, {searchResultsCourses: courseArray});
        return newState;
    }

    return state;
}

    // store results from aspirational search
function reduceSearchAspirational(state, action) {
    //:TODO: Implement
    return state;
}

function searchReducer (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.SEARCH_RECEIVE_UPDATE_FILTER:
            return reduceUpdateFilter(state, action);
        case actionTypes.SEARCH_RECEIVE_RESET_FILTER:
            return reduceResetFilter(state, action);
        case actionTypes.SEARCH_RECEIVE_PRODUCTS:
            return reduceSearchResults(state, action);
        case actionTypes.SEARCH_RECEIVE_ASPIRATIONAL:
            return reductSearchAspirational(state, action);
    };

    return state;
};

export default searchReducer;
