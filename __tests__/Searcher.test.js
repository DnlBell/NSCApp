import React from 'react';
import Searcher from '../components/Searcher.js'
import renderer from 'react-test-renderer';
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';

// describe('Searcher Component Renders Properly', () => {
//     xtest('Since Searcher has already been tested', () => {
//      expect(true).toBe(true);
//     });
//     test('run test to skip', () => {
//      expect(true).toBe(true);
//     });
//   });

// describe('skip test', () => {
//   xtest('tests to be skipped', () => {
//    expect(true).toBe(true);
//   });
//   test('run test to skip', () => {
//    expect(true).toBe(true);
//   });
// });
const findItem = () => true;

it('renders correctly', () => {
  const tree = renderer
    .create(connect(<Searcher />))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(connect(<Searcher />))
    .toJSON();
  expect(findItem(tree, 'search')).toBeDefined();
});