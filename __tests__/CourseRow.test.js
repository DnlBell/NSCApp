import CourseRow from '../components/Course/CourseRow';
import React from 'react';
import { Text } from 'react-native';

import renderer from 'react-test-renderer';
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import Enzyme, { shallow,mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';


const findItem = () => true;

it('renders correctly', () => {
  const tree = renderer
    .create(withRouter(<CourseRow />))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(withRouter(<CourseRow />))
    .toJSON();
  expect(findItem(tree, 'CourseRow')).toBeDefined();
});

