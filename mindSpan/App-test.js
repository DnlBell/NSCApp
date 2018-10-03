import 'react-native';
import React from 'react'
import App from '../App.js'
import renderer from 'react-test-renderer'

test('App snapShot', ()=> {
	const snap = renderer.create(
		<App/>
	).toJSON();

	expect(snap).toMatchSnapshot();
});