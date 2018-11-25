import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

let findElement =  function(tree, element) {
  console.warn(tree);
  return true;
}
it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  //expect(tree).toMatchSnapshot();
  expect(findElement(tree, 'search')).toBeDefined();
});