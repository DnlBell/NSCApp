import searchApi from '../api/searchApi'
import actionsTypes from '../constants/actionsTypes';
import { updateAuth, loginSubmit } from '../actions/authActions';


function* userLogin(action) {
    const userInfo = action.userInfo;
    yield put(loginSubmit(userInfo));
}



function* yieldAuthSagas() {
    yield all([
        fork(userLogin)
    ]);
}


export default yieldAuthSagas;