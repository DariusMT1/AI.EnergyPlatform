import { Link } from 'react-router-dom'
import { Card } from '@/shared/components/ui/Card'
import { Button } from '@/shared/components/ui/Button'

export function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <Card className="w-full max-w-md space-y-4">
        <div className="text-2xl font-semibold">Welcome back</div>
        <div className="text-sm text-slate-400">Secure access for energy operators.</div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
          <label className="mb-2 block text-sm text-slate-400">Email</label>
          <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3" placeholder="ops@energy.ai" />
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
          <label className="mb-2 block text-sm text-slate-400">Password</label>
          <input type="password" className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3" placeholder="••••••••" />
        </div>
        <Button className="w-full">Sign in</Button>
        <div className="text-center text-sm text-slate-400">
          New here? <Link className="text-cyan-400" to="/register">Create account</Link>
        </div>
      </Card>
    </div>
  )
}
