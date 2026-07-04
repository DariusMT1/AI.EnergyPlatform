import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/shared/components/layout/Sidebar'
import { useTheme } from '@/shared/context/ThemeContext'
import { Moon, SunMedium } from 'lucide-react'

export function MainLayout() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <header className="mb-8 flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 shadow-[0_20px_60px_-20px_rgba(2,6,23,0.8)] backdrop-blur">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-400">Energy Intelligence</div>
            <div className="text-2xl font-semibold">AI Energy Platform</div>
          </div>
          <button onClick={toggleTheme} className="rounded-2xl border border-white/10 bg-slate-800/80 p-3">
            {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>
        </header>
        <Outlet />
      </main>
    </div>
  )
}
