import { useState } from 'react';
import './App.css';
import Logo from './Logo';
import Form from './Form';
import Stats from './Stats';
import PackingList from './PackingList';
import { ItemElements } from '../types/item.types';
function App() {
	const [items, setItems] = useState<ItemElements[]>([]); // Lifted up state since form and list need this

	// Function passed as prop since form handles the update to state
	function handleAddItems(item: ItemElements) {
		// New state depends on current state so callback function
		// Spread operator for immutable state.
		setItems((prevItems) => [...prevItems, item]);
	}

	function handleDeleteItem(id: number) {
		setItems((prevItems) => prevItems.filter((item) => item.id !== id));
	}

	function handleToggleItem(id: number) {
		// Updating variables in react to keep state immutable
		setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
	}

	function handleClearItems() {
		const confirmed = window.confirm('Are you sure you want to delete all items?');

		if (confirmed) {
			setItems([]);
		}
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
			<Stats items={items} />
		</div>
	);
}

export default App;
