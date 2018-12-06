import LabeledInput from '../components/LabeledInput';
import renderer from 'react-test-renderer';
import React from 'react';

it('renders correctly', () => {
  const tree = renderer
    .create(<LabeledInput />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});