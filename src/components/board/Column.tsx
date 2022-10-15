import { useDroppable } from '@dnd-kit/core';
import {
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Button } from '../button';
import { EditableInput } from '../editable-input';
import { Icon } from '../icon';
import { SortableCard } from './SortableCard';

export const Column: React.FC<{ id: string; items: string[] }> = ({
	id,
	items,
}) => {
	const { setNodeRef } = useDroppable({ id });
	return (
		<SortableContext
			id={id}
			items={items}
			strategy={verticalListSortingStrategy}
		>
			<div
				className="flex flex-col max-w-xs min-w-[250px]"
				ref={setNodeRef}
			>
				{/* Header */}
				<div className="flex items-center gap-4">
					<div className="w-5 h-5  bg-green-700 rounded-bt" />
					<EditableInput
						value="asd"
						onChange={() => {}}
						className="grow !text-base font-semibold"
					/>
					<Icon type="more" />
				</div>
				{/* Body */}
				<div className="flex flex-col gap-2 my-2">
					<Button icon="plus" className="w-full">
						Add new card
					</Button>
					{items.map(item => (
						<SortableCard id={item} key={item} />
					))}
				</div>
			</div>
		</SortableContext>
	);
};
