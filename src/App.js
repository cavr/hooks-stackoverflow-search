import React from 'react';
import { Provider } from './context/ExampleContext';
import { exampleContextHook } from './context/ExampleContextHook';
import './App.css';
import { List } from './components/List';

const App = () => {
	const listItems = exampleContextHook();

	return (
		<Provider value={listItems.data || {}}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '2rem'
				}}>
				<input
					type="text"
					value={listItems.text}
					onChange={listItems.handleChange}
				/>
				<button style={{ marginLeft: '1rem' }} onClick={listItems.handleClick}>
					Buscar
				</button>
			</div>
			<List />
		</Provider>
	);
};

export default App;
