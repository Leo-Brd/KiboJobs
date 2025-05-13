"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/landingHeader/header';
import Footer from '@/components/landingFooter/footer';
import styles from './landingPage.module.scss';

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token) {
        router.replace('/dashboard');
      }
    }
  }, [router]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenue sur KiboJobs !</h1>
        <p className={styles.description}>
          Simplifiez votre recherche d'emploi grâce à une expérience gamifiée et un tableau de bord intuitif.
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Tableau de bord</h3>
            <p>Organisez vos candidatures avec un tableau Kanban intuitif.</p>
          </div>
          <div className={styles.feature}>
            <h3>Calendrier intégré</h3>
            <p>Planifiez vos relances et entretiens directement dans l'application.</p>
          </div>
          <div className={styles.feature}>
            <h3>Alertes personnalisées</h3>
            <p>Recevez des rappels pour ne jamais manquer une opportunité.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
