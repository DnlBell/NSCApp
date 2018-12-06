import CourseList from '../components/CourseList';
import renderer from 'react-test-renderer';
import React from 'react';
import Enzyme, { shallow,mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";


Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer
    .create(<CourseList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

 
const a = 'list';
const callback = jest.fn(() => true)
describe('App Component', () => {
  it('renders the Counter wrapper', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(a)).toBeDefined();
  });
});