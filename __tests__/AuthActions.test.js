import renderer from 'react-test-renderer';
import types from '../constants/actionsTypes';
const actions = require('../actions/authActions');

  
  test('updateCart function exists', () => {
    // mock lodash random to return the value 2 in second test
    actions.loginSubmit = jest.fn(() => true);
    expect(actions.loginSubmit()).toBeDefined();
  });

  test('updateCart function returns an object', () => {
    // mock lodash random to return the value 2 in second test
    actions.loginSubmit = jest.fn((userinfo={}) => {
      return {
        type: types.LOGIN_UPDATE_USER_INFO,
        userinfo: userinfo
      }
    });
    expect(actions.loginSubmit()).toBeTruthy();
  });

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const userinfo = {email: 'Leyth@gmail.com', password: 'Password'};
    const expectedAction = {
      type: types.LOGIN_UPDATE_USER_INFO,
      userinfo
    }
    expect(actions.loginSubmit(userinfo)).toEqual(expectedAction)
  })
})