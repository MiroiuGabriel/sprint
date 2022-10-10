import { Button } from './components';
import { EditableInput } from './components/editable-input';
import { Logo } from './components/icon';
import { useState } from 'react';

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
				{/* <Avatar /> */}
			</nav>
			<main className="px-6">
				<div className="flex mt-6 gap-4">
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
			</main>
		</div>
	);
}

export default App;
