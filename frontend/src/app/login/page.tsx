import styles from './login.module.scss';

export default function LoginPage() {
  return (
    <div className={styles['login-container']}>
      <div className={styles['login-box']}>
        <h1>Connexion</h1>
        <form>
          <input type="email" placeholder="Adresse email" required />
          <input type="password" placeholder="Mot de passe" required />
          <button type="submit">Se connecter</button>
        </form>
        <p className={styles['signup-link']}>
          Pas encore de compte ? <a href="/signup">Inscrivez-vous</a>
        </p>
      </div>
    </div>
  );
}