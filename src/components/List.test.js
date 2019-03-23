import React from 'react';
import { mount } from 'enzyme';

import { List } from './List';
import { Provider } from '../context/ExampleContext';

test('List renders OK', () => {
	const wrapper = mount(
		<Provider value={{ items: [{ title: 'hello', link: 'hello' }] }}>
			<List />
		</Provider>
	);
	const div = wrapper.find('div');
	expect(div.length).toBe(1);
});
