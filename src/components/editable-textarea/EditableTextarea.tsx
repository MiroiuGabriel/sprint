import { useRef, useEffect } from 'react';
import autosize from 'autosize';

type EditableTextareaProps = {
	value: string;
	onChange: (text: string) => void;
	placeholder?: string;
	className?: string;
	rows?: number;
};

export const EditableTextarea: React.FC<EditableTextareaProps> = ({
	onChange,
	value,
	placeholder,
	className,
	rows = 1,
}) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		if (textareaRef.current) {
			autosize.update(textareaRef.current);
		}
	}, [value]);

	useEffect(() => {
		const elem = textareaRef.current;

		if (elem) {
			autosize(elem);

			return () => {
				autosize.destroy(elem);
			};
		}
	});

	return (
		<textarea
			rows={rows}
			className={`${className} resize-none p-1 py-0 text-base bg-transparent focus:ring-2 ring-offset-1 outline-none !ring-button-primary-default border-0 rounded-bt transition-background duration-300 ease-in-out`}
			value={value}
			onChange={ev => onChange(ev.target.value)}
			placeholder={placeholder}
			ref={textareaRef}
		></textarea>
	);
};
