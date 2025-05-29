// src/app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatKing',
  description: 'AI-powered CRM & Communication Hub',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen`}>
        <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
          <div className="text-2xl font-bold mb-6">ChatKing</div>
          <nav className="flex flex-col gap-4 text-gray-800">
            <Link href="/">Dashboard</Link>
            <Link href="/messages">Messages</Link>
            <Link href="/contacts">Contacts</Link>
            <Link href="/settings">Settings</Link>
          </nav>
        </aside>
        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">{children}</main>
      </body>
    </html>
  )
}
