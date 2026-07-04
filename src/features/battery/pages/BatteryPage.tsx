import { Card } from '@/shared/components/ui/Card'
import { batteries } from '@/shared/data/mockData'
import { Badge } from '@/shared/components/ui/Badge'

export function BatteryPage() {
  return (
    <div className="space-y-6">
      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-400">Battery fleet</div>
            <div className="text-xl font-semibold">Live asset view</div>
          </div>
          <Badge label="AI monitored" tone="success" />
        </div>
        <div className="space-y-4">
          {batteries.map((battery) => (
            <div key={battery.id} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold text-white">{battery.name}</div>
                  <div className="text-sm text-slate-400">SOC {battery.soc}% • SOH {battery.soh}%</div>
                </div>
                <Badge label="Healthy" tone="success" />
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-4">
                <div><div className="text-sm text-slate-400">Voltage</div><div className="font-medium">{battery.voltage} V</div></div>
                <div><div className="text-sm text-slate-400">Current</div><div className="font-medium">{battery.current} A</div></div>
                <div><div className="text-sm text-slate-400">Temperature</div><div className="font-medium">{battery.temperature} °C</div></div>
                <div><div className="text-sm text-slate-400">Cycles</div><div className="font-medium">{battery.cycles}</div></div>
              </div>
              <div className="mt-4 rounded-2xl bg-cyan-500/10 p-4 text-sm text-slate-300">{battery.recommendation}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
