import { useState } from 'react';
import { ItemElements } from './ItemElements';

export default function Form({ onAddItems }: { onAddItems: (item: ItemElements) => void }) {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault(); // Prevent HTML reload on submit

		if (!description) return;

		const newItem = { description, quantity, packed: false, id: Date.now() };
		console.log(newItem);

		onAddItems(newItem);

		setDescription('');
		setQuantity(1);
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your 💪🏾 trip? </h3>
			<select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} aria-label="Number of items">
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
			<button>Add</button>
		</form>
	);
}
