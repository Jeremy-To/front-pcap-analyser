import { useState } from 'react';
import axios from 'axios';

function App() {
	const [file, setFile] = useState(null);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleFileChange = (event: any) => {
		setFile(event.target.files[0]);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!file) {
			setError(true);
			return;
		}

		setLoading(true);
		setError(false);
		setResponse(null);

		const formData = new FormData();
		formData.append('pcap', file);

		try {
			const result = await axios.post(
				'http://localhost:5000/analyze',
				formData,
				{
					headers: { 'Content-Type': 'multipart/form-data' },
				}
			);
			setResponse(result.data);
		} catch (err) {
			setError(true);
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen w-full flex justify-center items-center bg-gray-100">
			<div className="w-full max-w-2xl p-8 flex justify-center items-center flex-col rounded-lg bg-orange-50 shadow-lg">
				<h1 className="text-3xl font-bold mb-6">PCAP Analyzer</h1>
				<div className="w-full flex justify-center items-center">
					<form onSubmit={handleSubmit} className="w-full mb-6">
						<input
							type="file"
							onChange={handleFileChange}
							accept=".pcap"
							className="mb-4 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
						/>
						<button
							type="submit"
							className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
						>
							Analyze
						</button>
					</form>
				</div>
				<div className="w-full">
					{error && (
						<p className="text-red-500 mb-4 text-center">An error occurred</p>
					)}
					{loading && (
						<p className="text-blue-500 mb-4 text-center">Loading...</p>
					)}
					{response && (
						<div className="bg-white p-6 rounded-lg shadow">
							<h2 className="text-xl font-semibold mb-2">Analysis Result:</h2>
							<p>Total Packets: {response.total_packets}</p>
							<h3 className="text-lg font-semibold mt-4 mb-2">Protocols:</h3>
							{Object.entries(response.protocols).map(([protocol, stats]) => (
								<div key={protocol} className="mb-4 p-4 bg-gray-50 rounded">
									<h4 className="font-semibold text-blue-600">{protocol}</h4>
									<p>Packet Count: {stats.packet_count}</p>
									<p>
										Packet Percentage: {stats.packet_percentage.toFixed(2)}%
									</p>
									<p>Total MB: {stats.total_mb.toFixed(2)}</p>
									<p>
										Client to Server MB: {stats.client_to_server_mb.toFixed(2)}
									</p>
									<p>
										Server to Client MB: {stats.server_to_client_mb.toFixed(2)}
									</p>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
