import { Providers } from '../../store/Providers';
import DashboardMenu from '../../components/dashboardMenu/DashboardMenu';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <DashboardMenu />
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </Providers>
  );
}
