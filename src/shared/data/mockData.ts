export const dashboardMetrics = [
  { title: 'Battery Status', value: '94.2%', delta: '+3.1%', trend: 'up' as const },
  { title: 'Solar Production', value: '18.6 MWh', delta: '+8.4%', trend: 'up' as const },
  { title: 'Grid Usage', value: '42.1 kWh', delta: '-5.2%', trend: 'down' as const },
  { title: 'Battery Temperature', value: '31.4°C', delta: '+0.8%', trend: 'up' as const },
]

export const recentAlerts = [
  { id: 1, title: 'Thermal anomaly', detail: 'Battery rack B-02 above threshold', severity: 'high' },
  { id: 2, title: 'Inverter drift', detail: 'Solar inverter 04 efficiency dropped 1.3%', severity: 'medium' },
  { id: 3, title: 'Prescheduled maintenance', detail: 'Panel cleaning at site 03 tomorrow at 08:00', severity: 'low' },
]

export const activityFeed = [
  { id: 1, title: 'AI optimizer updated dispatch policy', time: '12 minutes ago' },
  { id: 2, title: 'Battery health model recalibrated', time: '38 minutes ago' },
  { id: 3, title: 'New telemetry from site 07 connected', time: '1 hour ago' },
]

export const batteries = [
  {
    id: 'b1',
    name: 'Residential Stack A',
    soc: 91,
    soh: 96,
    voltage: 54.2,
    current: 16.8,
    temperature: 29.8,
    cycles: 1420,
    capacity: 82.5,
    chargingSpeed: 4.3,
    dischargingSpeed: 3.8,
    recommendation: 'Maintain current cycling to preserve longevity',
  },
  {
    id: 'b2',
    name: 'Industrial Rack B',
    soc: 74,
    soh: 88,
    voltage: 53.6,
    current: 22.4,
    temperature: 34.1,
    cycles: 2180,
    capacity: 90.2,
    chargingSpeed: 5.6,
    dischargingSpeed: 4.9,
    recommendation: 'Reduce high-current discharge during peak pricing',
  },
]
