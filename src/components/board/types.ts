export type Card = string;

export type Cards = Record<string, Card[]>;

export type SortableCardProps = {
	className?: string;
};

export type CardProps = {
	id: string;
	dragOverlay?: boolean;
};
