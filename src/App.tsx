import { Board, Button } from './components';
import { EditableInput } from './components';
import { Logo } from './components';
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
				{/* <Avatar
					name="Miroiu Gabriel"
					size={32}
					className="text-xs ml-4"
				/> */}
			</nav>
			<main className="px-6">
				{/* Controls */}
				<div className="flex justify-between mt-6">
					<div className="flex gap-4">
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
					<div>
						{/* AvatarStack */}
						<Button variant="secondary" icon="share">
							Share
						</Button>
					</div>
				</div>
				{/*Board */}
				<Board />
			</main>
		</div>
	);
}

export default App;
