import { useState } from 'react';
import Item from './Item';
import { PackingListProps } from '../types/item.types';
export default function PackingList({ items, onDeleteItem, onToggleItem, onClearItems }: PackingListProps) {
	const [sortBy, setSortBy] = useState('input');

	let sortedItems;

	switch (sortBy) {
		case 'description':
			sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
			break;
		case 'number':
			sortedItems = items.slice().sort((a, b) => Number(b.quantity) - Number(a.quantity));
			break;
		case 'packed':
			sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
			break;
		default:
			sortedItems = items;
			break;
	}

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />
				))}
			</ul>

			<div className="actions">
				<select title="sorting selector" onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
					<option value="number">Sort by number of items needed</option>
				</select>

				<button onClick={onClearItems}>Clear List</button>
			</div>
		</div>
	);
}
