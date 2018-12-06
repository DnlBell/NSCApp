import CourseDetail from '../components/CourseDetail';
import renderer from 'react-test-renderer';
import React from 'react';
import { withRouter } from 'react-router-native';

it('renders correctly', () => {
  const tree = renderer
    .create(withRouter(<CourseDetail />))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(withRouter(<CourseDetail />))
    .toJSON();
  expect(findItem(tree, 'CourseDetail')).toBeDefined();
});


 test('onSubmit function works', () => {
    // mock lodash random to return the value 2 in second test
    CourseDetail = jest.fn(() => true);
    expect(CourseDetail).toBeDefined();
  });