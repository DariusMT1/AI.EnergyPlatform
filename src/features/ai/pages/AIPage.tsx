import { Card } from '@/shared/components/ui/Card'
import { Badge } from '@/shared/components/ui/Badge'

export function AIPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
      <Card className="space-y-4">
        <div className="text-xl font-semibold">Future AI assistant</div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-400">
          The conversational copilot will combine operational data, forecasting, anomaly detection, and optimization prompts into one experience.
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge label="Recommendations" tone="success" />
          <Badge label="Optimization" tone="default" />
          <Badge label="Predictions" tone="warning" />
        </div>
      </Card>
      <Card className="space-y-4">
        <div className="text-xl font-semibold">Model roadmap</div>
        <div className="space-y-3">
          {['Battery lifetime prediction', 'Anomaly detection', 'Future LLM integration'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
