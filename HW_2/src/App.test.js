import React from 'react';
import { shallow, mount } from 'enzyme';

import Profile from './components/Profile.js';
import App from './App.js';



describe("App tests", ()=>{
	it("snapshot test for App", ()=>{
		const wraper = shallow(<App />);
		expect(wraper.debug()).toMatchSnapshot();
	});

	it("test default component (Profile)", ()=>{
		const wraper = shallow(<App />);

		const profile = wraper.find('Profile');
		profile.simulate('submit');
		expect(wraper.state('isTable')).toEqual(false);
	});
});
