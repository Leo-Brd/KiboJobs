import React from 'react';
import styles from './ApplicationModal.module.scss';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const SITES = [
  { label: 'Spontanée', value: 'spontanee' },
  { label: 'LinkedIn', value: 'linkedin' },
  { label: 'Indeed', value: 'indeed' },
  { label: 'HelloWork', value: 'hellowork' },
  { label: 'Jobijoba', value: 'jobijoba' },
  { label: 'Welcome to the Jungle', value: 'wttj' },
  { label: 'Other', value: 'other'},
];

const CONTRACTS = [
  'CDI', 'CDD', 'Stage', 'Alternance', 'Freelance', 'Autre'
];

const RHYTHMS = [
  'Présentiel', 'Distanciel', 'Hybride'
];

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        <h2>Ajouter une candidature</h2>
        <form className={styles.form} onSubmit={e => { e.preventDefault(); onSubmit({}); }}>
          <label>
            Nom de l'entreprise
            <input type="text" name="name" required />
          </label>
          <label>
            Site de candidature
            <select name="site" required>
              <option value="">Sélectionner</option>
              {SITES.map(site => <option key={site.value} value={site.value}>{site.label}</option>)}
            </select>
          </label>
          <label>
            Type de contrat
            <select name="contrat" required>
              <option value="">Sélectionner</option>
              {CONTRACTS.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
          <label>
            Lieu de l'entreprise
            <input type="text" name="lieu" />
          </label>
          <label>
            Rythme
            <select name="rythme" required>
              <option value="">Sélectionner</option>
              {RHYTHMS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </label>
          <label>
            Notes complémentaires
            <textarea name="notes" rows={3} />
          </label>
          <button type="submit" className={styles.submitBtn}>Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationModal;
