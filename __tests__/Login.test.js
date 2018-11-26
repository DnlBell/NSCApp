import React from 'react';
import Login from '../screens/Login.js'
import renderer from 'react-test-renderer';
import { shallow } from "../node_modules/enzyme";

function findElement(tree, el) {
    console.warn(tree)
    let result = undefined;
    for (node in tree.children) {
       if (tree.children[node].props.testId == el) {
           result = true;
       }
    }
    return result;
}
it('renders correctly', () => {
  const tree = renderer
    .create(<Login />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(findElement(tree, 'loginButton')).toBeUndefined();
});

it('test cases', ()=> {
    const Login = renderer.create(<Login />);
})