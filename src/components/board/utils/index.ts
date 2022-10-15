import { arrayMove as dndKitArrayMove } from '@dnd-kit/sortable';
import { Card, Cards } from '../types';

export const removeAtIndex = (array: Card[], index: number) => {
	return [...array.slice(0, index), ...array.slice(index + 1)];
};

export const insertAtIndex = (array: Card[], index: number, item: string) => {
	return [...array.slice(0, index), item, ...array.slice(index)];
};

export const arrayMove = (
	array: Card[],
	oldIndex: number,
	newIndex: number
) => {
	return dndKitArrayMove(array, oldIndex, newIndex);
};

export const moveBetweenContainers = (
	items: Cards,
	activeContainer: string,
	overContainer: string,
	activeIndex: number,
	overIndex: number,
	item: string
) => {
	return {
		...items,
		[activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
		[overContainer]: insertAtIndex(items[overContainer], overIndex, item),
	};
};
