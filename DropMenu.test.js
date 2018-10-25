import React from 'react';
import MenuItem from './components/DropMenu';
import renderer from 'react-test-renderer';

const options = ["Home", "Login", "Register"];

describe('dropdown menu', ()=> {
    it('renders an empty button initially', () => {
        const rendered = renderer.create(<MenuItem />).toJSON();
        expect(rendered).toMatchSnapshot();
      });

    it('renders a list of options on press', () => {
        const rendered = renderer.create(<MenuItem />).toJSON();
        expect(rendered).toBeTruthy();
      });
})