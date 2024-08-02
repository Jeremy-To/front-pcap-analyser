const DocumentationPage = () => {
	const functions = [
		{
			name: 'write_output',
			description:
				'This function handles writing content to a file or printing it to the console.',
			parameters: [
				{
					name: 'output',
					type: 'str or None',
					description:
						'Path to the file where the content should be written. If None, the content is printed to the console.',
				},
				{
					name: 'content',
					type: 'str',
					description: 'The content to write or print.',
				},
			],
		},
		{
			name: 'extract_strings',
			description:
				'This function extracts ASCII and Unicode strings from a binary file using the `strings` tool and writes the result to a file or prints it to the console.',
			parameters: [
				{
					name: 'file_path',
					type: 'str',
					description: 'Path to the binary file to analyze.',
				},
				{
					name: 'output',
					type: 'str or None',
					description:
						'Path to the file where the result should be written. If None, the result is printed to the console.',
				},
			],
		},
		{
			name: 'calculate_entropy',
			description:
				'This function calculates the entropy of a file, a measure of the amount of information or disorder, and writes the result to a file or prints it to the console.',
			parameters: [
				{
					name: 'file_path',
					type: 'str',
					description: 'Path to the binary file to analyze.',
				},
				{
					name: 'output',
					type: 'str or None',
					description:
						'Path to the file where the result should be written. If None, the result is printed to the console.',
				},
			],
		},
		{
			name: 'enumerate_headers',
			description:
				'This function enumerates the Portable Executable (PE) headers of a binary file and writes the result to a file or prints it to the console.',
			parameters: [
				{
					name: 'file_path',
					type: 'str',
					description: 'Path to the binary file to analyze.',
				},
				{
					name: 'output',
					type: 'str or None',
					description:
						'Path to the file where the result should be written. If None, the result is printed to the console.',
				},
			],
		},
		{
			name: 'determine_language',
			description:
				'This function attempts to determine the programming language used to create a binary file by checking for known indicators in the imported DLLs and section names. It writes the result to a file or prints it to the console.',
			parameters: [
				{
					name: 'file_path',
					type: 'str',
					description: 'Path to the binary file to analyze.',
				},
				{
					name: 'output',
					type: 'str or None',
					description:
						'Path to the file where the result should be written. If None, the result is printed to the console.',
				},
			],
		},
		{
			name: 'analyze_sections',
			description:
				'This function analyzes the sections of a Portable Executable (PE) file and writes the information to a file or prints it to the console.',
			parameters: [
				{
					name: 'file_path',
					type: 'str',
					description: 'Path to the binary file to analyze.',
				},
				{
					name: 'output',
					type: 'str or None',
					description:
						'Path to the file where the result should be written. If None, the result is printed to the console.',
				},
			],
		},
		{
			name: 'detect_packer',
			description:
				'This function detects if a binary file has been packed or obfuscated using known packers by searching for specific signatures. It writes the result to a file or prints it to the console.',
			parameters: [
				{
					name: 'file_path',
					type: 'str',
					description: 'Path to the binary file to analyze.',
				},
				{
					name: 'output',
					type: 'str or None',
					description:
						'Path to the file where the result should be written. If None, the result is printed to the console.',
				},
			],
		},
		{
			name: 'compile_yara_rules_from_directory',
			description:
				'This function compiles YARA rules from all `.yar` or `.yara` files in a specified directory and returns a list of compiled rules.',
			parameters: [
				{
					name: 'directory_path',
					type: 'str',
					description: 'Path to the directory containing the YARA rule files.',
				},
			],
			returns: [
				{
					name: 'rules',
					type: 'list',
					description: 'List of compiled YARA rules.',
				},
			],
		},
		{
			name: 'search_yara_signatures',
			description:
				'This function scans a binary file using YARA rules compiled from a specified directory and writes the matching results to a file or prints them to the console.',
			parameters: [
				{
					name: 'file_path',
					type: 'str',
					description: 'Path to the binary file to analyze.',
				},
				{
					name: 'rules_directory',
					type: 'str',
					description: 'Path to the directory containing the YARA rule files.',
				},
				{
					name: 'output',
					type: 'str or None',
					description:
						'Path to the file where the result should be written. If None, the result is printed to the console.',
				},
			],
		},
	];

	return (
		<div className="max-w-4xl mx-auto ">
			<h1 className="text-3xl font-bold mb-6 text-gray-800">Documentation</h1>
			{functions.map((func, index) => (
				<div key={index} className="mb-8">
					<h2 className="text-2xl font-semibold mb-2 text-gray-800">{`${func.name}()`}</h2>
					<p className="mb-4 text-gray-600">{func.description}</p>
					<h3 className="text-xl font-semibold mb-2 text-gray-800">
						Parameters:
					</h3>
					<ul className="list-disc pl-5 mb-4 text-gray-600">
						{func.parameters.map((param, paramIndex) => (
							<li key={paramIndex}>
								<code className="bg-gray-100 px-1 rounded">{param.name}</code> (
								{param.type}): {param.description}
							</li>
						))}
					</ul>
					{func.returns && (
						<>
							<h3 className="text-xl font-semibold mb-2 text-gray-800">
								Returns:
							</h3>
							<ul className="list-disc pl-5 mb-4 text-gray-600">
								{func.returns.map((ret, retIndex) => (
									<li key={retIndex}>
										<code className="bg-gray-100 px-1 rounded">{ret.name}</code>{' '}
										({ret.type}): {ret.description}
									</li>
								))}
							</ul>
						</>
					)}
				</div>
			))}
		</div>
	);
};

export default DocumentationPage;
