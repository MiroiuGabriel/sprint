import { useState, useRef, useEffect } from 'react';

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
			className={`${className} text-xl outline-button-primary-default p-1`}
		/>
	);
};
