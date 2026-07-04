import { Card } from '@/shared/components/ui/Card'
import { Button } from '@/shared/components/ui/Button'

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <Card className="space-y-4">
        <div className="text-xl font-semibold">Platform settings</div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-400">Theme • Language • Units • Notifications</div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-400">API Keys placeholder • MQTT bridge • Cloud deployment targets</div>
        </div>
        <Button variant="secondary">Save preferences</Button>
      </Card>
    </div>
  )
}
