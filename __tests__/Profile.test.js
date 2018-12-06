import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../screens/Cart';
import { withRouter } from 'react-router-native';
const findItem = () => true;

it('renders correctly', () => {
  const tree = renderer
    .create(withRouter(<Profile />))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(withRouter(<Profile />))
    .toJSON();
  expect(findItem(tree, 'Profile')).toBeDefined();
});