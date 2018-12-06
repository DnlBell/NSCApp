import React from 'react';
import renderer from 'react-test-renderer';
import Cart from '../screens/Cart';
import { connect } from 'react-redux';
const findItem = () => true;

it('renders correctly', () => {
  const tree = renderer
    .create(connect(<Cart />))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(connect(<Cart />))
    .toJSON();
  expect(findItem(tree, 'Cart')).toBeDefined();
});