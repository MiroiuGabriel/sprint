import { ReactNode } from 'react';
import { Icon, IconType } from '../icon';

type ButtonProps = {
	children?: ReactNode | string;
	variant?: 'default' | 'primary' | 'secondary';
	icon?: IconType;
	disabled?: boolean;
	isLoading?: boolean;
	className?: string;
};

const shared =
	'h-9 px-4 py-2 rounded-bt font-medium text-base focus:ring-2 ring-offset-1 ring-button-primary-default transition-background duration-300 ease-in-out shadow-button border border-transparent relative disabled:bg-button-disabled disabled:border-transparent flex items-center justify-center outline-none';

const variants = {
	primary: `${shared} bg-button-primary-default text-white hover:bg-button-primary-hover active:bg-button-primary-pressed`,
	secondary: `${shared} bg-button-secondary-default text-button-primary-default hover:bg-button-secondary-hover active:bg-button-secondary-pressed`,
	default: `${shared} border-button-secondary-pressed hover:bg-button-secondary-default active:border-button-primary-default  text-button-primary-default`,
};

export const Button: React.FC<ButtonProps> = ({
	children,
	isLoading,
	icon,
	variant = 'default',
	disabled,
	className,
}) => {
	return (
		<button
			className={`${variants[variant]} ${className}`}
			disabled={isLoading || disabled}
		>
			<div className="flex gap-2 items-center">
				{isLoading && (
					<div className="p-1 w-6 h-6 rounded-full bg-transparent border-bt border-t-button-primary-default animate-spin" />
				)}
				{icon && !isLoading && <Icon type={icon} className="w-6 h-6" />}
				{children}
			</div>
		</button>
	);
};
