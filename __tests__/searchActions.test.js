
import renderer from 'react-test-renderer';
import actionTypes from '../constants/actionsTypes';
//const searchActions = require('../actions/searchActions');
import * as searchActions from '../actions/searchActions'

// describe('skip test', () => {
//     xtest('tests to be skipped', () => {
//      expect(true).toBe(true);
//     });
//     test('run test to skip', () => {
//      expect(true).toBe(true);
//     });
//   });


  
  test('searchActions function exists', () => {
    // mock lodash random to return the value 2 in second test
    searchActions.updateFilter = jest.fn(() => true);
    expect(searchActions.updateFilter()).toBeDefined();
  });

  test(' function returns an object', () => {
    // mock lodash random to return the value 2 in second test
    searchActions.updateFilter = jest.fn((filter={}) => {
      return {
        type:  actionTypes.SEARCH_UPDATE_FILTER,
        filter: filter
      }
    });
    expect(searchActions.updateFilter()).toBeTruthy();
  });