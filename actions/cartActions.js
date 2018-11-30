import actionTypes from '../constants/actionsTypes';

function updateCart(cart = {}) {
    return {
        type: actionTypes.CART_UPDATE_ITEMS,
        cart,
    };
}

module.exports = updateCart;