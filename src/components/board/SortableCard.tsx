import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card } from './Card';
import { CardProps, SortableCardProps } from './types';

export const SortableCard: React.FC<CardProps & SortableCardProps> = ({
	id,
	className,
}) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0.5 : 1,
	};

	return (
		<div
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			className={className}
			style={style}
		>
			<Card id={id} />
		</div>
	);
};
