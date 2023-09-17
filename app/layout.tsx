import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navbar from './components/Navbar'

export const Baskerville = localFont({
	src: [
		{
			path: './font/LibreBaskerville-Regular.ttf',
			weight: 'normal',
			style: 'normal',
		},
		{
			path: './font/LibreBaskerville-Italic.ttf',
			weight: 'normal',
			style: 'italic',
		},
		{
			path: './font/LibreBaskerville-Bold.ttf',
			weight: 'bold',
			style: 'normal',
		},
	],
})

export const metadata: Metadata = {
  title: 'Charennes',
  description: 'Charennes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Baskerville.className + " min-h-screen flex flex-col"}>
				<Navbar />
				<div className="flex-grow flex flex-col justify-center items-center">
					{children}
				</div>
			</body>
    </html>
  )
}
