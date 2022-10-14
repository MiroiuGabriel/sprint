import { Button, EditableTextarea, Icon } from './components';
import { EditableInput } from './components';
import { Logo } from './components';
import React, { useState } from 'react';
import {
	DndContext,
	useDroppable,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	useSortable,
	rectSortingStrategy,
	SortableContext,
	sortableKeyboardCoordinates,
	arrayMove as dndKitArrayMove,
} from '@dnd-kit/sortable';
import { DragEndEvent, DragOverEvent } from '@dnd-kit/core/dist/types';
import { CSS } from '@dnd-kit/utilities';
// const Reactions = () => {

// 	return (
// 		<div className="flex gap-2">
// 			{liked ? (
// 				<Icon
// 					type="thumbsUpFilled"
// 					onClick={like}
// 					className="cursor-pointer"
// 				/>
// 			) : (
// 				<Icon
// 					type="thumbsUp"
// 					onClick={like}
// 					className="cursor-pointer"
// 				/>
// 			)}
// 			{disliked ? (
// 				<Icon
// 					type="thumbsDownFilled"
// 					onClick={dislike}
// 					className="cursor-pointer"
// 				/>
// 			) : (
// 				<Icon
// 					type="thumbsDown"
// 					onClick={dislike}
// 					className="cursor-pointer"
// 				/>
// 			)}
// 		</div>
// 	);
// };

const SortableItem: React.FC<{
	id: string;
	className?: string;
	children: React.ReactNode;
}> = ({ id, className, children }) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id });

	const style = {
		transform: CSS.Transform.toString(transform),
	};

	return (
		<div
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			className={className}
			style={style}
		>
			{children}
		</div>
	);
};

const Card: React.FC<{ id: string }> = ({ id }) => {
	const [text, setText] = useState('');

	return (
		<SortableItem id={id}>
			<div className="flex flex-col bg-red-500 p-2 rounded-bt">
				<div className="flex items-center gap-2">
					<EditableTextarea
						value={text}
						onChange={t => setText(t)}
						className="grow"
					/>
					<Icon type="close" />
				</div>
				<div className="flex justify-end">
					{/* <Avatar /> */}
					{/* <Reactions /> */}
				</div>
			</div>
		</SortableItem>
	);
};

const Column: React.FC<{ id: string; items: string[] }> = ({ id, items }) => {
	const { setNodeRef } = useDroppable({ id });
	return (
		<SortableContext id={id} items={items} strategy={rectSortingStrategy}>
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
						<Card key={item} id={item} />
					))}
				</div>
			</div>
		</SortableContext>
	);
};

export const removeAtIndex = (array: string[], index: number) => {
	return [...array.slice(0, index), ...array.slice(index + 1)];
};

export const insertAtIndex = (array: string[], index: number, item: string) => {
	return [...array.slice(0, index), item, ...array.slice(index)];
};

export const arrayMove = (
	array: string[],
	oldIndex: number,
	newIndex: number
) => {
	return dndKitArrayMove(array, oldIndex, newIndex);
};

type Items = Record<string, string[]>;

const Board = () => {
	const [items, setItems] = useState<Items>({
		col1: ['A', 'B', 'C'],
		col2: ['D', 'E', 'F'],
	});

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	const handleDragOver = (event: DragOverEvent) => {};

	const handleDragEnd = (event: DragEndEvent) => {};

	return (
		<DndContext
			sensors={sensors}
			onDragEnd={handleDragEnd}
			onDragOver={handleDragOver}
		>
			<div className="mt-10 flex gap-9">
				{Object.keys(items).map(item => (
					<Column key={item} items={items[item]} id={item} />
				))}
			</div>
		</DndContext>
	);
};
function App() {
	const [text, setText] = useState('New Retro Board');

	return (
		<div>
			<nav className="flex px-6 py-2 items-center shadow-navbar">
				<Logo className="mr-12" />
				<EditableInput
					value={text}
					onChange={text => setText(text)}
					placeholder="New Retro Board"
				/>
				<div className="grow" />
				<Button>Sign in</Button>
				{/* <Avatar
					name="Miroiu Gabriel"
					size={32}
					className="text-xs ml-4"
				/> */}
			</nav>
			<main className="px-6">
				{/* Controls */}
				<div className="flex justify-between mt-6">
					<div className="flex gap-4">
						<Button variant="secondary" icon="download">
							Download
						</Button>
						<Button variant="secondary" icon="survey">
							New survey
						</Button>
						<Button variant="secondary" icon="plus">
							New column
						</Button>
						<Button variant="primary" icon="timer">
							Start timer
						</Button>
					</div>
					<div>
						{/* AvatarStack */}
						<Button variant="secondary" icon="share">
							Share
						</Button>
					</div>
				</div>
				{/*Board */}
				<Board />
			</main>
		</div>
	);
}

export default App;
