import { Link, useLocation } from 'react-router-dom';

function Navbar() {
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	return (
		<nav className="bg-blue-900 shadow-lg fixed w-full">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link to="/" className="flex-shrink-0">
							<h3 className="text-white">2600Analyzer</h3>
						</Link>
					</div>
					<div className="flex">
						<Link
							to="/Ftf"
							className={`px-3 py-2 rounded-md text-sm font-medium ${
								isActive('/Ftf')
									? 'bg-indigo-700 text-white'
									: 'text-indigo-100 hover:bg-indigo-600 hover:text-white'
							} transition duration-300 ease-in-out`}
						>
							Ftf
						</Link>
						<Link
							to="/analysis"
							className={`ml-4 px-3 py-2 rounded-md text-sm font-medium ${
								isActive('/analysis')
									? 'bg-indigo-700 text-white'
									: 'text-indigo-100 hover:bg-indigo-600 hover:text-white'
							} transition duration-300 ease-in-out`}
						>
							Analysis
						</Link>
						<Link
							to="/protocol"
							className={`ml-4 px-3 py-2 rounded-md text-sm font-medium ${
								isActive('/protocol')
									? 'bg-indigo-700 text-white'
									: 'text-indigo-100 hover:bg-indigo-600 hover:text-white'
							} transition duration-300 ease-in-out`}
						>
							Protocol
						</Link>
						<Link
							to="/about"
							className={`ml-4 px-3 py-2 rounded-md text-sm font-medium ${
								isActive('/about')
									? 'bg-indigo-700 text-white'
									: 'text-indigo-100 hover:bg-indigo-600 hover:text-white'
							} transition duration-300 ease-in-out`}
						>
							About
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
