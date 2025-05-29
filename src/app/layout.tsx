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
      <body className={`${inter.className} flex h-screen text-gray-800`}>
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col p-4">
          <div className="text-3xl font-extrabold text-blue-700 mb-10 tracking-tight">👑 ChatKing</div>
          <nav className="flex flex-col gap-4 text-[16px]">
            <Link href="/" className="hover:text-blue-600 transition-colors">🏠 Dashboard</Link>
            <Link href="/messages" className="hover:text-blue-600 transition-colors">💬 Messages</Link>
            <Link href="/contacts" className="hover:text-blue-600 transition-colors">📇 Contacts</Link>
            <Link href="/settings" className="hover:text-blue-600 transition-colors">⚙️ Settings</Link>
          </nav>
          <div className="mt-auto text-sm text-gray-400">Business Owner</div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 overflow-y-auto p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
