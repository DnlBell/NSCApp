// searchReducer.js
// Holds current current cart, filter and search results

//:TODO: Fill in functionality as needed (see search reducer for example)

const cartReducer = (state = {cart: {}}, {type, cart}) => {
    if (type === 'UPDATE_CART') {
        // state = unionWith(state, {cart};
    }

    if (type === 'CLEAR_CART') {
        // state= unionWith(state, {cart: null});
    }

    return state;
};

export default cartReducer;