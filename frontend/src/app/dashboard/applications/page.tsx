'use client';
import React, { useState } from 'react';
import EntrepriseCard from '@/components/applicationCard/ApplicationCard';
import EntrepriseFilters from '@/components/applicationFilters/ApplicationFilters';
import styles from './applications.module.scss';

const FAKE_APPLICATIONS = [
  {
    name: 'OpenAI',
    source: 'linkedin',
    status: 'En attente',
    logoUrl: 'https://logo.clearbit.com/openai.com',
  },
  {
    name: 'Capgemini',
    source: 'indeed',
    status: 'Entretien prévu',
    logoUrl: 'https://logo.clearbit.com/capgemini.com',
  },
  {
    name: 'StartupX',
    source: 'spontanee',
    status: 'Candidature envoyée',
  },
  {
    name: 'HelloWork',
    source: 'hellowork',
    status: 'Refusée',
    logoUrl: 'https://logo.clearbit.com/hellowork.com',
  },
  {
    name: 'Google',
    source: 'linkedin',
    status: 'En attente',
    logoUrl: 'https://logo.clearbit.com/google.com',
  },
];

export default function MesCandidaturesPage() {
  const [filter, setFilter] = useState('all');

  const filtered =
    filter === 'all'
      ? FAKE_APPLICATIONS
      : FAKE_APPLICATIONS.filter((e) => e.source === filter);

  return (
    <div className={styles.carnetContainer}>
      <div className={styles.headerRow}>
        <h1>Mes candidatures</h1>
        <button className={styles.addBtn} disabled>
          + Ajouter une candidature
        </button>
      </div>
      <EntrepriseFilters selected={filter} onChange={setFilter} />
      <div className={styles.cardsGrid}>
        {filtered.length === 0 ? (
          <div className={styles.emptyMsg}>Aucune candidature trouvée pour ce filtre.</div>
        ) : (
          filtered.map((e, idx) => (
            <EntrepriseCard key={e.name + idx} {...e} />
          ))
        )}
      </div>
    </div>
  );
}