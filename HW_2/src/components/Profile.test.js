import React from 'react';
import { shallow } from 'enzyme';

import Profile from './Profile.js';

describe("Profile tets", ()=>{
	it("snapshot test for Profile", ()=>{
	const wraper = shallow(<Profile />);
	expect(wraper.debug()).toMatchSnapshot();
});

	it("shoud call form handler", ()=>{
		const mock = jest.fn();
		const props = {header: mock};
		const wraper = shallow(<Profile {...props}/>);

		const form = wraper.find('.form-inline');

		form.simulate('submit', {
			preventDefault: ()=>{},
			target: {
				elements:{
					userId:{
						value:0
					}
				}
			}
		});
		expect(mock).toHaveBeenCalledTimes(1);
	});
});