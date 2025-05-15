import React from 'react';
import styles from './ApplicationFilters.module.scss';
import { FaLinkedin, FaRegBuilding } from 'react-icons/fa';
import { SiIndeed, SiWelcometothejungle } from 'react-icons/si';
import { MdWorkOutline } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';

interface ApplicationFiltersProps {
  selected: string;
  onChange: (source: string) => void;
}

const sources = [
  { label: 'Toutes', value: 'all', icon: <TbWorld /> },
  { label: 'Spontanée', value: 'spontanee', icon: <MdWorkOutline /> },
  { label: 'LinkedIn', value: 'linkedin', icon: <FaLinkedin color="#0077b5" /> },
  { label: 'Indeed', value: 'indeed', icon: <SiIndeed color="#2164f3" /> },
  { label: 'HelloWork', value: 'hellowork', icon: <FaRegBuilding color="#ffb300" /> },
  { label: 'Welcome to the Jungle', value: 'wttj', icon: <SiWelcometothejungle color="#ffb300" /> },
];

const ApplicationFilters: React.FC<ApplicationFiltersProps> = ({ selected, onChange }) => {
  return (
    <div className={styles.filters}>
      {sources.map((src) => (
        <button
          key={src.value}
          className={selected === src.value ? styles.active : ''}
          onClick={() => onChange(src.value)}
        >
          <span className={styles.icon}>{src.icon}</span>
          {src.label}
        </button>
      ))}
    </div>
  );
};

export default ApplicationFilters;
