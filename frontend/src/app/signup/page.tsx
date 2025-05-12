"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './signup.module.scss';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

export default function SignupPage() {
  const [formData, setFormData] = useState<FormData>({ username: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch(`${BACKEND_URL}/api/accounts/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push('/login');
      } else {
        const data = await response.json();
        setError(data.error || 'Une erreur est survenue.');
      }
    } catch (err) {
      setError('Impossible de se connecter au serveur.');
    }
  };

  return (
    <main className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <h1>Créer un compte</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Nom complet"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Adresse email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">S'inscrire</button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        <p className={styles.loginLink}>
          Vous avez déjà un compte ? <a href="/login">Connectez-vous</a>
        </p>
      </div>
    </main>
  );
}