export interface NavItem {
  label: string
  href: string
  icon: string
}

export interface MetricCardData {
  title: string
  value: string
  delta: string
  trend: 'up' | 'down'
}

export interface BatteryAsset {
  id: string
  name: string
  soc: number
  soh: number
  voltage: number
  current: number
  temperature: number
  cycles: number
  capacity: number
  chargingSpeed: number
  dischargingSpeed: number
  recommendation: string
}
