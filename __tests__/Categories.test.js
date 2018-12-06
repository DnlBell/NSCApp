import  Categories from '../components/Categories';
import renderer from 'react-test-renderer';
import React from 'react';

it('renders correctly', () => {
  const tree = renderer
    .create(<Categories />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});