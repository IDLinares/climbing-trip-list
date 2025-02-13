export interface ItemElements {
	id: number;
	description: string;
	quantity: number;
	packed: boolean;
}

export interface ItemProps {
	item: ItemElements;
	onDeleteItem: (id: number) => void;
	onToggleItem: (id: number) => void;
}

export interface PackingListProps {
	items: ItemElements[];
	onDeleteItem: (id: number) => void;
	onToggleItem: (id: number) => void;
	onClearItems: () => void;
}
