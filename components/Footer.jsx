import styles from "./Footer.module.css";
export default function Footer({ completedTasksCount }) {
  return (
    <div className={styles.footer}>
      <span>Completed Tasks: {completedTasksCount}</span>
    </div>
  );
}
