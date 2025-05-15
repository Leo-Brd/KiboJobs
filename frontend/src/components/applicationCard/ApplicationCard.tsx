import React from 'react';
import styles from './ApplicationCard.module.scss';

interface ApplicationCardProps {
  name: string;
  source: string;
  status: string;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ name, source, status }) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3>{name}</h3>
        <span className={styles.source}>{source}</span>
        <span className={styles.status}>{status}</span>
      </div>
    </div>
  );
};

export default ApplicationCard;
