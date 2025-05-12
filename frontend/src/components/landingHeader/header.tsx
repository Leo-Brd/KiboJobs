import styles from './header.module.scss';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>KiboJobs</h1>
      </Link>

      <nav className={styles.nav}>
        <a href="#features">Fonctionnalités</a>
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>
      </nav>

      <Link href="/login">
        <button className={styles['login-button']}>Se connecter</button>
      </Link>
    </header>
  );
}