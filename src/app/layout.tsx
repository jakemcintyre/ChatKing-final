import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import {
  LayoutDashboard,
  Mail,
  Users,
  Calendar,
  Settings,
} from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ChatKing',
  description: 'AI-powered CRM & Communication Hub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen`}>
        <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
          <div className="text-2xl font-bold mb-10 text-blue-800">ChatKing</div>
          <nav className="flex flex-col gap-4 text-gray-700">
            <Link href="/" className="flex items-center gap-2 hover:text-blue-600">
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
            <Link href="/messages" className="flex items-center gap-2 hover:text-blue-600">
              <Mail size={18} />
              Messages
            </Link>
            <Link href="/contacts" className="flex items-center gap-2 hover:text-blue-600">
              <Users size={18} />
              Contacts
            </Link>
            <Link href="/appointments" className="flex items-center gap-2 hover:text-blue-600">
              <Calendar size={18} />
              Appointments
            </Link>
            <Link href="/settings" className="flex items-center gap-2 hover:text-blue-600 mt-auto">
              <Settings size={18} />
              Settings
            </Link>
          </nav>
        </aside>
        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
