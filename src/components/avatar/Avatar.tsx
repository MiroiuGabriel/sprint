type AvatarProps = {
	className?: string;
	size: number;
	bgColor: string;
	name: string;
};

export const Avatar: React.FC<AvatarProps> = ({ className, size, name }) => {
	const initials = name
		.split(' ')
		.reduce((acc, curr) => acc + curr[0].toUpperCase(), '');

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
			className={className}
		>
			<circle
				fill="red"
				width={size}
				height={size}
				cx={size / 2}
				cy={size / 2}
				r={size / 2}
			/>
			<text
				x="50%"
				y="50%"
				alignment-baseline="middle"
				text-anchor="middle"
				dy=".1em"
				dominant-baseline="middle"
			>
				{initials}
			</text>
		</svg>
	);
};
