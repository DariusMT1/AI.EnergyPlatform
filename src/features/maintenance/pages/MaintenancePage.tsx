import { Card } from '@/shared/components/ui/Card'
import { Badge } from '@/shared/components/ui/Badge'

export function MaintenancePage() {
  return (
    <div className="space-y-6">
      <Card className="space-y-4">
        <div className="text-xl font-semibold">Predictive maintenance</div>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div className="text-sm text-slate-400">Risk score</div>
            <div className="mt-2 text-3xl font-semibold">7.4/10</div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div className="text-sm text-slate-400">Health score</div>
            <div className="mt-2 text-3xl font-semibold">91%</div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div className="text-sm text-slate-400">Predicted failure</div>
            <div className="mt-2 text-3xl font-semibold">14 days</div>
          </div>
        </div>
      </Card>
      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">Component status</div>
          <Badge label="Optimized" tone="success" />
        </div>
        <div className="space-y-3">
          {['Cooling loop', 'Battery interconnects', 'Inverter bridge'].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <div>{item}</div>
              <Badge label="Nominal" tone="success" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
