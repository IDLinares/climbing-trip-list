import { ItemElements } from '../types/item.types';

export default function Stats({ items }: { items: ItemElements[] }) {
	if (!items.length)
		return (
			<p className="stats">
				<em>Let's start planning the next trip! ✈️</em>
			</p>
		);

	const numItems = items.length;
	const numPacked = items.filter((item: ItemElements) => item.packed).length;
	const percentage = Math.round((numPacked / numItems) * 100);

	return (
		<footer className="stats">
			<em>
				{percentage === 100
					? `🪜 You're ready to climb!!!`
					: `🧳 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
			</em>
		</footer>
	);
}
