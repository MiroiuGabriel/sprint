import { type IconType } from '../icon/Icon';

type IconButtonProps = {
	children: React.ReactElement<IconType>;
	className?: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const IconButton: React.FC<IconButtonProps> = ({
	children,
	className,
	onClick,
}) => {
	return (
		<button
			className={`${className} p-1.5 rounded-full hover:bg-button-secondary-hover transition-colors duration-300 ease-in-out`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
