import MarketingBar from '../components/MarketingBar';
import renderer from 'react-test-renderer';
import React from 'react';

it('renders correctly', () => {
  const tree = renderer
    .create(<MarketingBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});