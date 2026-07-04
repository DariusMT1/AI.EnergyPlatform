import { NavLink } from 'react-router-dom'
import { navigation } from '@/shared/constants/navigation'
import { cn } from '@/shared/utils/cn'
import { BatteryCharging, ChevronRight } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20">
          <BatteryCharging className="h-6 w-6 text-cyan-400" />
        </div>
        <div>
          <div className="text-xl font-semibold">AI Energy</div>
          <div className="text-sm text-slate-400">Platform</div>
        </div>
      </div>
      <nav className="space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition',
                isActive ? 'bg-cyan-500/15 text-cyan-300' : 'text-slate-300 hover:bg-slate-800/80',
              )
            }
          >
            <span className="flex items-center gap-3">
              <item.icon size={18} />
              {item.label}
            </span>
            <ChevronRight size={16} className="opacity-60" />
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-sm text-slate-300">
        <div className="font-medium text-cyan-200">Enterprise edge</div>
        <div className="mt-2 text-slate-400">Built for scalable storage intelligence and autonomous grid orchestration.</div>
      </div>
    </aside>
  )
}
