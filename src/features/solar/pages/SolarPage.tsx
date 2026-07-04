import { Card } from '@/shared/components/ui/Card'
import { StatCard } from '@/shared/components/ui/StatCard'

const metrics = [
  { title: 'Installed panels', value: '1,248', delta: '+36', trend: 'up' as const },
  { title: 'Power output', value: '426 kW', delta: '+11.4%', trend: 'up' as const },
  { title: 'Efficiency', value: '23.7%', delta: '+0.8%', trend: 'up' as const },
]

export function SolarPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-3">
        {metrics.map((metric) => (
          <StatCard key={metric.title} {...metric} />
        ))}
      </div>
      <Card className="space-y-4">
        <div className="text-xl font-semibold">Solar production overview</div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div className="text-sm text-slate-400">Daily production</div>
            <div className="mt-3 text-4xl font-semibold">18.6 MWh</div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div className="text-sm text-slate-400">Panel health</div>
            <div className="mt-3 text-4xl font-semibold">97.2%</div>
          </div>
        </div>
      </Card>
    </div>
  )
}
