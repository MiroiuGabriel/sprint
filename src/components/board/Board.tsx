import { useState } from 'react';
import {
	useSensors,
	PointerSensor,
	KeyboardSensor,
	useSensor,
	Active,
	DragOverEvent,
	DragEndEvent,
	DndContext,
	DragOverlay,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Card } from './Card';
import { Column } from './Column';
import { moveBetweenContainers } from './utils';
import { Cards } from './types';

export const Board = () => {
	const [cards, setCards] = useState<Cards>({
		col1: ['A', 'B', 'C'],
		col2: ['D', 'E', 'F'],
	});
	const [activeId, setActiveId] = useState<string | null>(null);

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	const handleDragStart = ({ active }: { active: Active }) => {
		setActiveId(active.id as string);
	};

	const handleDragCancel = () => setActiveId(null);

	const handleDragOver = (event: DragOverEvent) => {
		const { over, active } = event;
		const overId = over?.id;

		if (!overId) return;

		const activeContainer: string =
			active.data.current?.sortable.containerId;
		const overContainer: string =
			active.data.current?.sortable.containerId || overId;

		if (activeContainer !== overContainer) {
			setCards(cols => {
				const activeIndex = active.data.current?.sortable.index;
				const overIndex =
					overId in cols
						? cols[overContainer].length + 1
						: over.data.current?.sortable.index;
				return moveBetweenContainers(
					cols,
					activeContainer,
					overContainer,
					activeIndex,
					overIndex,
					active.id as string
				);
			});
		}
	};

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;
		if (!over) {
			setActiveId(null);
			return;
		}

		const activeId = active.id as string;
		const overId = over.id;

		if (activeId !== overId) {
			const activeContainer = active.data.current?.sortable.containerId;
			const overContainer =
				over.data.current?.sortable.containerId || overId;

			const activeIndex = active.data.current?.sortable.index;
			const overIndex =
				overId in cards
					? cards[overContainer].length + 1
					: over.data.current?.sortable.index;

			setCards(cols => {
				let newItems: Cards;
				if (activeContainer === overContainer) {
					newItems = {
						...cols,
						[overContainer]: arrayMove(
							cols[overContainer],
							activeIndex,
							overIndex
						),
					};
				} else {
					newItems = moveBetweenContainers(
						cols,
						activeContainer,
						overContainer,
						activeIndex,
						overIndex,
						activeId
					);
				}

				return newItems;
			});
		}
	};

	return (
		<DndContext
			sensors={sensors}
			onDragEnd={handleDragEnd}
			onDragOver={handleDragOver}
			onDragStart={handleDragStart}
			onDragCancel={handleDragCancel}
		>
			<div className="mt-10 flex gap-9">
				{Object.keys(cards).map(item => (
					<Column key={item} items={cards[item]} id={item} />
				))}
			</div>
			<DragOverlay>
				{activeId ? <Card id={activeId} dragOverlay /> : null}
			</DragOverlay>
		</DndContext>
	);
};
