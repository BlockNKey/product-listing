'use client';
import Link from "next/link";
import { useTheme } from "next-themes";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

export default function Header() {
	const { theme, setTheme } = useTheme();

	return (
		<header className="bg-white dark:bg-dark-primary shadow-md transition-colors duration-200">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex">
						<Link
							href="/"
							className="flex items-center hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
						>
							<span className="text-xl font-bold">VitaliiStore</span>
						</Link>
					</div>

					<div className="flex items-center space-x-4">
						<button
							type="button"
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							className="p-2 rounded-lg bg-gray-100 dark:bg-dark-secondary hover:bg-gray-200 dark:hover:bg-dark-accent transition-colors duration-200"
						>
							{theme === "dark" ? <AiOutlineSun /> : <AiOutlineMoon />}
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
}
