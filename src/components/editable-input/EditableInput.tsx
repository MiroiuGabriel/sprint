type EditableInputProps = {
	value: string;
	onChange: (text: string) => void;
	maxWidth?: number;
	placeholder?: string;
	className?: string;
};

export const EditableInput: React.FC<EditableInputProps> = ({
	value,
	onChange,
	placeholder,
	className,
	maxWidth = 300,
}) => {
	return (
		<input
			value={value}
			onChange={ev => onChange(ev.target.value)}
			style={{
				width:
					(value.length === 0 && placeholder
						? placeholder.length
						: value.length) +
					1 +
					'ch',
				maxWidth,
			}}
			placeholder={placeholder}
			className={`${className} text-xl p-1 bg-transparent transition-background duration-300 ease-in-out focus:ring-2 ring-offset-1 outline-none border-0 !ring-button-primary-default rounded-bt`}
		/>
	);
};
