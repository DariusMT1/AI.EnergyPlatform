import { Card } from '@/shared/components/ui/Card'

export function AnalyticsPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <Card>
        <div className="text-xl font-semibold">Battery degradation</div>
        <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-400">Historical trend view for capacity decline and health forecasting.</div>
      </Card>
      <Card>
        <div className="text-xl font-semibold">Solar production</div>
        <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-400">Site-level generation and irradiance performance forecasting.</div>
      </Card>
      <Card>
        <div className="text-xl font-semibold">Revenue & savings</div>
        <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-400">Scenario analysis and ROI projections.</div>
      </Card>
      <Card>
        <div className="text-xl font-semibold">Predictions</div>
        <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-400">Forecast engine and anomaly confidence scoring.</div>
      </Card>
    </div>
  )
}
