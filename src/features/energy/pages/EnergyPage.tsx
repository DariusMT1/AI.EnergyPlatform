import { Card } from '@/shared/components/ui/Card'
import { StatCard } from '@/shared/components/ui/StatCard'

const metrics = [
  { title: 'Grid balancing', value: '91.2%', delta: '+4.8%', trend: 'up' as const },
  { title: 'Storage reserve', value: '6.8 MWh', delta: '+2.1%', trend: 'up' as const },
  { title: 'Demand forecast', value: '18.4 kW', delta: '-1.8%', trend: 'down' as const },
]

export function EnergyPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-3">
        {metrics.map((metric) => (
          <StatCard key={metric.title} {...metric} />
        ))}
      </div>
      <Card className="space-y-4">
        <div className="text-xl font-semibold">Energy orchestration</div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-400">
          The energy operations layer will coordinate solar generation, battery dispatch, pricing signals, and IoT telemetry through a modular service bus.
        </div>
      </Card>
    </div>
  )
}
