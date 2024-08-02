import React from 'react';
import DocumentationPage from '../components/DocumentationHelper';

const AboutPage: React.FC = () => {
	return (
		<div className="max-w-4xl mx-auto px-4 py-8 pt-24">
			<h1 className="text-3xl font-bold mb-6 text-gray-800">
				About Our Malware Analysis Tools
			</h1>
			<p className="mb-6 text-gray-600">
				This repository contains a set of tools for analyzing binary files,
				extracting useful information, and detecting certain characteristics.
				These tools leverage various libraries and utilities to provide
				functionalities such as string extraction, entropy calculation, PE
				header enumeration, programming language detection, section analysis,
				packer detection, and YARA rule scanning.
			</p>
			<h2 className="text-2xl font-semibold mb-4 text-gray-800">Features</h2>
			<ul className="list-disc pl-5 mb-6 text-gray-600">
				<li>Extract Strings</li>
				<li>Calculate Entropy</li>
				<li>Enumerate Headers</li>
				<li>Determine Language</li>
				<li>Analyze Sections</li>
				<li>Detect Packer</li>
				<li>Search YARA Signatures</li>
			</ul>
			<h2 className="text-2xl font-semibold mb-4 text-gray-800">
				Installation
			</h2>
			<p className="mb-4 text-gray-600">
				To use these tools, you need to have Python installed along with the
				required dependencies. You can install the dependencies using the
				following command:
			</p>
			<pre className="bg-gray-100 p-3 rounded-md mb-4 overflow-x-auto">
				<code className="text-sm">pip install -r requirements.txt</code>
			</pre>
			<p className="mb-4 text-gray-600">
				Make sure you have the following tools installed and accessible in your
				system's PATH:
			</p>
			<ul className="list-disc pl-5 mb-6 text-gray-600">
				<li>
					<code className="bg-gray-100 px-1 rounded">strings</code> (from the
					binutils package)
				</li>
				<li>
					<code className="bg-gray-100 px-1 rounded">yara</code> (YARA tool for
					malware research)
				</li>
			</ul>
			<h2 className="text-2xl font-semibold mb-4 text-gray-800">Usage</h2>
			<p className="mb-4 text-gray-600">
				Each tool can be run using the{' '}
				<code className="bg-gray-100 px-1 rounded">main.py</code> script. Here
				are some examples:
			</p>
			<h3 className="text-xl font-semibold mb-2 text-gray-800">
				Extract Strings
			</h3>
			<pre className="bg-gray-100 p-3 rounded-md mb-4 overflow-x-auto">
				<code className="text-sm">
					python main.py extract_strings &lt;file_path&gt; [output]
				</code>
			</pre>
			<h3 className="text-xl font-semibold mb-2 text-gray-800">
				Calculate Entropy
			</h3>
			<pre className="bg-gray-100 p-3 rounded-md mb-4 overflow-x-auto">
				<code className="text-sm">
					python main.py calculate_entropy &lt;file_path&gt; [output]
				</code>
			</pre>
			<h3 className="text-xl font-semibold mb-2 text-gray-800">
				Search YARA Signatures
			</h3>
			<pre className="bg-gray-100 p-3 rounded-md mb-6 overflow-x-auto">
				<code className="text-sm">
					python main.py search_yara_signatures &lt;file_path&gt;
					&lt;rules_directory&gt; [output]
				</code>
			</pre>
			<p className="mb-4 text-gray-600">
				For more detailed usage instructions, please refer to the README file in
				the repository.
			</p>
			<DocumentationPage />

			<h2 className="text-2xl font-semibold mb-4 text-gray-800">
				Contributing
			</h2>
			<p className="text-gray-600">
				Contributions are welcome! Please open an issue or submit a pull request
				for any improvements or bug fixes.
			</p>
		</div>
	);
};

export default AboutPage;
