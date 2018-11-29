import actionTypes from '../constants/actionsTypes';

export function addCourseToCart(course = {}) {
    return {
        type: actionTypes.CART_UPDATE_ITEMS,
        course,
    };
}

export function reduceUpdateCart(cart = {}) {
    return{
        type: actionTypes.CART_REDUCE_UPDATE_ITEMS,
        cart
    }
}