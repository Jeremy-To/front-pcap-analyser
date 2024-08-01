import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Analysispcap from './pages/Analysispcap';
import Protocols from './pages/Protocols';
import Navbar from './components/Navbar';
import Tft from './pages/Tft';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Analysispcap />} />
				<Route path="/tft" element={<Tft />} />
				<Route path="/protocol" element={<Protocols />} />
				<Route path="*" element={<Analysispcap />} />
			</Routes>
		</Router>
	);
}

export default App;
