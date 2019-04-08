import React from 'react';

import { useItems } from '../context/useItems';

export const List = () => {
	const exampleList = useItems();

	const listDiv = (exampleList.exampleContext.items &&
		exampleList.exampleContext.items.map((item, index) => (
			<div key={index} style={{ padding: '16px' }}>
				<h3>{item.title}</h3>
				<p>{item.link}</p>
				<p>{JSON.stringify(item.tags, null, 2)}</p>
			</div>
		))) || <div />;
	return listDiv;
};
