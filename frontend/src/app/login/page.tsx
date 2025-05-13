"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { setCredentials } from '../../store/authSlice';

interface FormData {
  email: string;
  password: string;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

export default function LoginPage() {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch(`${BACKEND_URL}/api/accounts/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data.access);
        // Récupérer les infos utilisateur (optionnel, ici juste l'email)
        dispatch(setCredentials({ accessToken: data.access, user: { email: formData.email, username: '' } }));
        router.push('/dashboard');
      } else {
        const data = await response.json();
        setError(data.error || 'Identifiants incorrects.');
      }
    } catch (err) {
      setError('Impossible de se connecter au serveur.');
    }
  };

  return (
    <main className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Se connecter</button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        <p className={styles.signupLink}>
          Vous n'avez pas de compte ? <a href="/signup">Inscrivez-vous</a>
        </p>
      </div>
    </main>
  );
}