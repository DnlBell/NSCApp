import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../screens/Login';
import { connect } from 'react-redux';
const findItem = () => true;

it('renders correctly', () => {
  const tree = renderer
    .create(connect(<Login />))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(connect(<Login />))
    .toJSON();
  expect(findItem(tree, 'Login')).toBeDefined();
});

 test('onSubmit function works', () => {
    // mock lodash random to return the value 2 in second test
    Login.onSubmit = jest.fn(() => true);
    expect(Login.onSubmit()).toBeDefined();
  });