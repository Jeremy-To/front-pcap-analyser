import { useState, ChangeEvent, FormEvent } from 'react';

function Tft() {
  const [file, setFile] = useState<File | null>(null);
  const [analysisType, setAnalysisType] = useState<string>('malware');
  const [operation, setOperation] = useState<string>('strings');
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    formData.append('analysis_type', analysisType);
    formData.append('operation', operation);

    try {
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.output);
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred while processing the request.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-bold mb-5 text-center">FTF Tool</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="file" className="block text-sm font-medium text-gray-700">File: </label>
              <input type="file" id="file" onChange={handleFileChange} required 
                     className="mt-1 block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-blue-50 file:text-blue-700
                                hover:file:bg-blue-100" />
            </div>
            <div>
              <label htmlFor="analysisType" className="block text-sm font-medium text-gray-700">Analysis Type: </label>
              <select
                id="analysisType"
                value={analysisType}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setAnalysisType(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="malware">Malware</option>
                <option value="forensic">Forensic</option>
              </select>
            </div>
            <div>
              <label htmlFor="operation" className="block text-sm font-medium text-gray-700">Operation: </label>
              <select
                id="operation"
                value={operation}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setOperation(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="strings">Extract Strings</option>
                <option value="entropy">Calculate Entropy</option>
                <option value="metadata">Extract Metadata</option>
                {analysisType === 'malware' && (
                  <>
                    <option value="headers">Enumerate Headers</option>
                    <option value="language">Determine Language</option>
                    <option value="sections">Analyze Sections</option>
                    <option value="packer">Detect Packer</option>
                    <option value="imports">List Imports</option>
                    <option value="exports">List Exports</option>
                  </>
                )}
              </select>
            </div>
            <button 
              type="submit" 
              disabled={!file || isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isLoading ? 'Analyzing...' : 'Analyze'}
            </button>
          </form>
          {result && (
            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">Result:</h2>
              <pre className="mt-2 text-sm text-gray-500 bg-gray-50 rounded-md p-3 overflow-auto">{result}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tft;