import styles from './signup.module.scss';

export default function SignupPage() {
  return (
    <main className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <h1>Créer un compte</h1>
        <form>
          <input type="text" name="username" placeholder="Nom complet" required />
          <input type="email" name="email" placeholder="Adresse email" required />
          <input type="password" name="password" placeholder="Mot de passe" required />
          <button type="submit">S'inscrire</button>
        </form>
        <p className={styles.loginLink}>
          Vous avez déjà un compte ? <a href="/login">Connectez-vous</a>
        </p>
      </div>
    </main>
  );
}