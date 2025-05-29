import Link from "next/link"; import { LayoutDashboard, Mail, Users, CalendarCheck, Settings, } from "lucide-react";

export default function Sidebar() { return ( <aside className="w-64 min-h-screen bg-white shadow-xl p-4 flex flex-col gap-6 border-r border-gray-200 animate-fade-in"> <div className="text-3xl font-extrabold text-blue-800 tracking-tight animate-pulse"> Chat<span className="text-yellow-500">King</span> </div> <nav className="flex flex-col gap-5 text-gray-700 text-base"> <Link
href="/"
className="flex items-center gap-3 hover:text-blue-600 transition-transform transform hover:translate-x-1 animate-float"> <LayoutDashboard className="w-5 h-5" /> Dashboard </Link> <Link
href="/messages"
className="flex items-center gap-3 hover:text-blue-600 transition-transform transform hover:translate-x-1 animate-float-delay-100"> <Mail className="w-5 h-5" /> Messages </Link> <Link
href="/contacts"
className="flex items-center gap-3 hover:text-blue-600 transition-transform transform hover:translate-x-1 animate-float-delay-200"> <Users className="w-5 h-5" /> Contacts </Link> <Link
href="/appointments"
className="flex items-center gap-3 hover:text-blue-600 transition-transform transform hover:translate-x-1 animate-float-delay-300"> <CalendarCheck className="w-5 h-5" /> Appointments </Link> <Link
href="/settings"
className="flex items-center gap-3 hover:text-blue-600 transition-transform transform hover:translate-x-1 animate-float-delay-400"> <Settings className="w-5 h-5" /> Settings </Link> </nav> </aside> ); }


