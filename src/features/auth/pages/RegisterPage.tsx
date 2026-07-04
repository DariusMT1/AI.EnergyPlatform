import { Link } from 'react-router-dom'
import { Card } from '@/shared/components/ui/Card'
import { Button } from '@/shared/components/ui/Button'

export function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <Card className="w-full max-w-md space-y-4">
        <div className="text-2xl font-semibold">Create your workspace</div>
        <div className="text-sm text-slate-400">Set up your first energy operations environment.</div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
          <label className="mb-2 block text-sm text-slate-400">Company</label>
          <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3" placeholder="Northwind Energy" />
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
          <label className="mb-2 block text-sm text-slate-400">Email</label>
          <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3" placeholder="ops@northwind.energy" />
        </div>
        <Button className="w-full">Create account</Button>
        <div className="text-center text-sm text-slate-400">
          Already registered? <Link className="text-cyan-400" to="/login">Sign in</Link>
        </div>
      </Card>
    </div>
  )
}
