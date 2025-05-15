"use client";
import Link from 'next/link';
import styles from './DashboardMenu.module.scss';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '../../store/hooks';
import { logout } from '../../store/authSlice';

export default function DashboardMenu() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    dispatch(logout());
    router.push('/');
  };

  return (
    <nav className={styles.menu}>
      <Link href="/dashboard">
        <h1>KiboJobs</h1>
      </Link>

      <ul>
        <li>
          <Link href="/dashboard">Vue globale</Link>
        </li>
        <li>
          <Link href="/dashboard/applications">Mes candidatures</Link>
        </li>
        <li>
          <Link href="/dashboard/kanban">Kanban</Link>
        </li>
        <li>
          <Link href="/dashboard/calendar">Calendrier</Link>
        </li>
      </ul>
      <button className={styles.logoutBtn} onClick={handleLogout}>
        Se déconnecter
      </button>
    </nav>
  );
}
