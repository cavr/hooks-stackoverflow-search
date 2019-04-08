import { useState } from 'react';

export const exampleContextHook = () => {
	const [text, setText] = useState('');

	const [data, setData] = useState([]);

	const getList = async () => {
		try {
			const response = await fetch(
				`https://api.stackexchange.com/2.2/search?page=1&pagesize=99&order=desc&sort=activity&intitle=${text}&site=stackoverflow`
			);
			const json = await response.json();
			setData(json);
		} catch (e) {
			console.error(e);
		}
	};

	const handleClick = async () => {
		getList();
	};

	const handleChange = e => {
		e.preventDefault();
		setText(e.target.value);
	};

	return {
		data,
		text,
		handleChange,
		handleClick
	};
};
