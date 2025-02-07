import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

const baseUrl=process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
    <html lang="en">
      <head>
        <link rel="canonical" href={baseUrl} />
      </head>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div className="min-h-screen bg-gray-50 dark:bg-dark-primary text-gray-900 dark:text-gray-100">
						{children}
          </div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
				</ThemeProvider>
			</body>
		</html>
	);
}
