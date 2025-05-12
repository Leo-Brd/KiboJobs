import { SiDjango, SiNextdotjs, SiSass } from 'react-icons/si';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.techs}>
        <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer" title="Django">
          <SiDjango className={styles.logo} color="var(--primary)" />
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" title="Next.js">
          <SiNextdotjs className={styles.logo} color="#000000" />
        </a>
        <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer" title="Sass">
          <SiSass className={styles.logo} color="#CC6699" />
        </a>
      </div>
      <div className={styles.credit}>
        <span>
          Réalisé par <a href="https://portfolio-gamma-vert-55.vercel.app/" target="_blank" rel="noopener noreferrer">LeoBrd</a>
        </span>
      </div>
    </footer>
  );
}