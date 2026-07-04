import { Card } from '@/shared/components/ui/Card'
import { StatCard } from '@/shared/components/ui/StatCard'
import { dashboardMetrics, recentAlerts, activityFeed } from '@/shared/data/mockData'
import { BatteryCharging, Radar, TrendingUp, Zap } from 'lucide-react'

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <StatCard key={metric.title} {...metric} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-400">Energy Flow</div>
              <div className="text-xl font-semibold">Optimization pulse</div>
            </div>
            <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-300">Live</div>
          </div>
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/20 to-slate-900 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">Battery throughput</div>
                <div className="text-4xl font-semibold">71.8 MW</div>
              </div>
              <div className="rounded-2xl bg-slate-950/80 p-3">
                <Zap className="h-6 w-6 text-cyan-400" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-400">AI Recommendation</div>
              <div className="text-xl font-semibold">Next best action</div>
            </div>
            <Radar className="h-5 w-5 text-cyan-400" />
          </div>
          <div className="rounded-3xl bg-slate-950/70 p-4 text-sm text-slate-300">
            Shift 12% of charging load to off-peak windows and preserve 6.4 MWh of margin for the evening demand spike.
          </div>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold">Recent alerts</div>
            <div className="text-sm text-slate-400">24h view</div>
          </div>
          {recentAlerts.map((alert) => (
            <div key={alert.id} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <div className="flex items-center justify-between">
                <div className="font-medium text-white">{alert.title}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-slate-400">{alert.severity}</div>
              </div>
              <div className="mt-2 text-sm text-slate-400">{alert.detail}</div>
            </div>
          ))}
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold">Recent activity</div>
            <TrendingUp className="h-5 w-5 text-cyan-400" />
          </div>
          {activityFeed.map((item) => (
            <div key={item.id} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <div className="rounded-2xl bg-cyan-500/10 p-3">
                <BatteryCharging className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-white">{item.title}</div>
                <div className="text-sm text-slate-400">{item.time}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  )
}
