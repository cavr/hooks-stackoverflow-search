import { useContext } from 'react';

import { ExampleContext } from '../context/ExampleContext';

export const useItems = () => {
	const exampleContext = useContext(ExampleContext);

	return {
		exampleContext
	};
};
