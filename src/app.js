// Main App component
import MindMap from './components/MindMap.js';
import ContentPanel from './components/ContentPanel.js';
import AudioPlayer from './components/AudioPlayer.js';

export default function App() {
	const app = document.createElement('div');
	app.className = 'space-y-6';

	const header = document.createElement('h2');
	header.className = 'text-2xl font-bold';
	header.textContent = 'KnowledgeCompass';
	app.appendChild(header);

	// MindMap placeholder
	app.appendChild(MindMap());
	// ContentPanel placeholder
	app.appendChild(ContentPanel());
	// AudioPlayer placeholder
	app.appendChild(AudioPlayer());

	return app;
}
