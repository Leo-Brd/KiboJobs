import styles from './header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>KiboJobs</h1>
            <nav className={styles.nav}>
                <a href="#features">Fonctionnalités</a>
                <a href="#about">À propos</a>
                <a href="#contact">Contact</a>
            </nav>
            <button className={styles['login-button']}>Se connecter</button>
        </header>
    );
}