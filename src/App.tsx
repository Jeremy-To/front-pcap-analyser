import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Analysispcap from './pages/Analysispcap';
import Protocols from './pages/Protocols';
import Navbar from './components/Navbar';
import Ftf from './pages/Ftf';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Analysispcap />} />
				<Route path="/ftf" element={<Ftf />} />
				<Route path="/protocol" element={<Protocols />} />
				<Route path="*" element={<Analysispcap />} />
			</Routes>
		</Router>
	);
}

export default App;
