import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Card } from '@/shared/components/ui/Card'

interface StatCardProps {
  title: string
  value: string
  delta: string
  trend: 'up' | 'down'
}

export function StatCard({ title, value, delta, trend }: StatCardProps) {
  return (
    <Card className="space-y-3">
      <div className="text-sm text-slate-400">{title}</div>
      <div className="text-3xl font-semibold text-white">{value}</div>
      <div className={`flex items-center gap-1 text-sm ${trend === 'up' ? 'text-emerald-300' : 'text-amber-300'}`}>
        {trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        {delta}
      </div>
    </Card>
  )
}
