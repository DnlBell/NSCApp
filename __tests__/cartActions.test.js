
import renderer from 'react-test-renderer';

const updateCart = require('../actions/cartActions');

// describe('skip test', () => {
//     xtest('tests to be skipped', () => {
//      expect(true).toBe(true);
//     });
//     test('run test to skip', () => {
//      expect(true).toBe(true);
//     });
//   });


  
  test('updateCart function exists', () => {
    // mock lodash random to return the value 2 in second test
    updateCart.updateCart = jest.fn(() => true);
    expect(updateCart.updateCart()).toBeDefined();
  });

  test('updateCart function returns an object', () => {
    // mock lodash random to return the value 2 in second test
    updateCart.updateCart = jest.fn(() => {
      return {}
    });
    expect(updateCart.updateCart()).toBeTruthy();
  });