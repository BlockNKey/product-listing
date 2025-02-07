import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

const baseUrl=process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={baseUrl} />
      </head>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div className="min-h-screen bg-gray-50 dark:bg-dark-primary text-gray-900 dark:text-gray-100">
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
