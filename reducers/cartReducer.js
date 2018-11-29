import actionTypes from '../constants/actionsTypes';
import extend from 'lodash/extend';
import cart from 'mspnmodel/distribution/cart/cart';
// Holds current current cart, filter and search results

//:TODO: Fill in functionality as needed (see search reducer for example)
const initialCart = new cart();

const defaultState = {
    cart: initialCart,             // current filter object
};

function reduceUpdateCartItems(state, action) {
    const newCart = new cart();
    newCart.copy(state.cart);
    newCart.addItem(action.lineItem);
    const newState = extend({}, state, {cart: newCart});
    return newState;
}

const cartReducer = (state = defaultState, action) => {
    switch (action.type){
        case (actionTypes.CART_REDUCE_UPDATE_ITEMS):
            return reduceUpdateCartItems(state, action);
        case (actionTypes.CLEAR_CART):
            // state= unionWith(state, {cart: null});
    }
    

    return state;
};

export default cartReducer;