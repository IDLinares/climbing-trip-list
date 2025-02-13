import { ItemProps } from '../types/item.types';

export default function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
	return (
		<li>
			<input
				type="checkbox"
				placeholder="packed"
				checked={item.packed}
				onChange={() => {
					onToggleItem(item.id);
				}}
			/>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>✖️</button>
		</li>
	);
}
