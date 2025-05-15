import styles from './kanban.module.scss';

export default function KanbanPage() {
  return (
    <main className={styles.kanbanMain}>
      <h1 className={styles.title}>Kanban</h1>
      <div className={styles.kanbanBoard}>
        <div className={styles.column}>
          <h2>Candidature envoyée</h2>
          <div className={styles.cardsPlaceholder}>Aucune tâche</div>
        </div>
        <div className={styles.column}>
          <h2>Refusé</h2>
          <div className={styles.cardsPlaceholder}>Aucune tâche</div>
        </div>
        <div className={styles.column}>
          <h2>Démarches en cours</h2>
          <div className={styles.cardsPlaceholder}>Aucune tâche</div>
        </div>
      </div>
    </main>
  );
}
