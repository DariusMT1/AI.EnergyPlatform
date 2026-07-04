import { cn } from '@/shared/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const variants = {
    primary: 'bg-cyan-500 text-white hover:bg-cyan-400',
    secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700',
  }

  return <button className={cn('rounded-2xl px-4 py-2 font-medium transition', variants[variant], className)} {...props} />
}
