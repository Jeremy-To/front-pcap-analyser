import { useState } from 'react';
import axios from 'axios';

interface AnalysisResponse {
	extracted_files: {
		[protocol: string]: [string, number, string][];
	};
	vt_results: {
		filename: string;
		status: string;
		score?: string;
		vt_link?: string;
		is_malicious?: boolean;
	}[];
}

function Analysispcap() {
	const [file, setFile] = useState<File | null>(null);
	const [response, setResponse] = useState<AnalysisResponse | null>(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setFile(event.target.files[0]);
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
			const result = await axios.post<AnalysisResponse>(
				'https://pcapanalyserbackend.onrender.com/analyze',
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
				<h1 className="text-3xl font-bold mb-6 text-black">PCAP Analyzer</h1>
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
						<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
							<h2 className="text-2xl font-bold mb-4 text-black">
								Analysis Results
							</h2>
							<h3 className="text-xl font-semibold mb-2 text-black">
								Extracted Files
							</h3>
							{Object.entries(response.extracted_files).map(
								([protocol, files]: [string, [string, number, string][]]) => (
									<div key={protocol} className="mb-4">
										<h4 className="text-lg font-medium text-gray-700">
											{protocol === 'unknown' ? 'Unknown Protocol' : protocol}
										</h4>
										<ul className="list-disc pl-5">
											{files.map(
												(file: [string, number, string], index: number) => (
													<li key={index} className="text-sm text-gray-600">
														{file[0]} - Size: {file[1].toFixed(2)} MB - Hash:{' '}
														{file[2]}
													</li>
												)
											)}
										</ul>
									</div>
								)
							)}

							<h3 className="text-xl font-semibold mb-2 mt-6 text-black">
								VirusTotal Results
							</h3>
							<ul className="divide-y divide-gray-200">
								{response.vt_results.map((result, index) => (
									<li key={index} className="py-2">
										<p className="text-sm font-medium text-gray-900">
											{result.filename}
										</p>
										{result.status === 'unknown' ? (
											<p className="text-sm text-gray-500">
												Not found in VirusTotal database
											</p>
										) : (
											<div>
												<p className="text-sm text-gray-500">
													Score: {result.score}
												</p>
												<a
													href={result.vt_link}
													target="_blank"
													rel="noopener noreferrer"
													className="text-sm text-blue-500 hover:underline"
												>
													VirusTotal Link
												</a>
												<p
													className={`text-sm ${
														result.is_malicious
															? 'text-red-500'
															: 'text-green-500'
													}`}
												>
													{result.is_malicious ? 'Malicious' : 'Not Malicious'}
												</p>
											</div>
										)}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Analysispcap;
