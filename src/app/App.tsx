import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { DashboardPage } from '@/features/dashboard/pages/DashboardPage'
import { EnergyPage } from '@/features/energy/pages/EnergyPage'
import { SolarPage } from '@/features/solar/pages/SolarPage'
import { BatteryPage } from '@/features/battery/pages/BatteryPage'
import { MaintenancePage } from '@/features/maintenance/pages/MaintenancePage'
import { DigitalTwinPage } from '@/features/digital-twin/pages/DigitalTwinPage'
import { AIPage } from '@/features/ai/pages/AIPage'
import { AnalyticsPage } from '@/features/analytics/pages/AnalyticsPage'
import { SettingsPage } from '@/features/settings/pages/SettingsPage'
import { LoginPage } from '@/features/auth/pages/LoginPage'
import { RegisterPage } from '@/features/auth/pages/RegisterPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="energy" element={<EnergyPage />} />
        <Route path="solar" element={<SolarPage />} />
        <Route path="battery" element={<BatteryPage />} />
        <Route path="maintenance" element={<MaintenancePage />} />
        <Route path="digital-twin" element={<DigitalTwinPage />} />
        <Route path="ai" element={<AIPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}

export default App
