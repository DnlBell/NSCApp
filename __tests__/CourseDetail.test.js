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