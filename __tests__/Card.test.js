import Card from '../components/Card';
import renderer from 'react-test-renderer';
import React from 'react';

it('renders correctly', () => {
  const tree = renderer
    .create(<Card />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});