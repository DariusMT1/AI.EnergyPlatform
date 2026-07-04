import { cn } from '@/shared/utils/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn('rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_-20px_rgba(15,23,42,0.8)] backdrop-blur', className)}
      {...props}
    >
      {children}
    </div>
  )
}
