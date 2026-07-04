import { cn } from '@/shared/utils/cn'

interface BadgeProps {
  label: string
  tone?: 'default' | 'success' | 'warning' | 'danger'
}

export function Badge({ label, tone = 'default' }: BadgeProps) {
  const tones = {
    default: 'bg-slate-800 text-slate-200',
    success: 'bg-emerald-500/15 text-emerald-300',
    warning: 'bg-amber-500/15 text-amber-300',
    danger: 'bg-rose-500/15 text-rose-300',
  }

  return <span className={cn('rounded-full px-3 py-1 text-sm font-medium', tones[tone])}>{label}</span>
}
