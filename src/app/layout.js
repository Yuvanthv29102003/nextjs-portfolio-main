import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/ThemeToggle'
import ParticleBackground from './components/ParticleBackground'
import ThemeToggle from './components/ThemeToggle'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yuvanth Veluru - Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0a192f] dark:bg-[#0a192f] text-white`}>
        <Providers>
          <ThemeProvider>
            <ParticleBackground />
            {children}
            <ThemeToggle />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
