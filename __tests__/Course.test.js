import React from 'react';
import renderer from 'react-test-renderer';
import Course from '../screens/Course';
import { connect } from 'react-redux';
const findItem = () => true;

it('renders correctly', () => {
  const tree = renderer
    .create(connect(<Course />))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(connect(<Course />))
    .toJSON();
  expect(findItem(tree, 'Course')).toBeDefined();
});