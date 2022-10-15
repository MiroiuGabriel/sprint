import { useState } from 'react';
import { EditableTextarea } from '../editable-textarea';
import { Icon } from '../icon';
import { CardProps } from './types';

export const Card: React.FC<CardProps> = ({ id, dragOverlay }) => {
	const [text, setText] = useState('');

	return (
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
	);
};
