import Link from 'next/link';
import Common from './common/common';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Common>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome!</h1>
        <h2 className={styles.subtitle}>Members↓</h2>
        <ul className={styles.memberList}>
          <li className={styles.memberItem}>
            <Link href="/member/iida-profile">
              <span className={styles.memberLink}>Koki Iida</span>
            </Link>
          </li>
          <li className={styles.memberItem}>
            <Link href="/member/iwata-profile">
              <span className={styles.memberLink}>Masaki Iwata</span>
            </Link>
          </li>
          <li className={styles.memberItem}>
            <Link href="/member/oida-profile">
              <span className={styles.memberLink}>Asahi Oida</span>
            </Link>
          </li>
          <li className={styles.memberItem}>
            <Link href="/member/ujita-profile">
              <span className={styles.memberLink}>Takuma Ujita</span>
            </Link>
          </li>
          <li className={styles.memberItem}>
            <Link href="/member/saito-profile">
              <span className={styles.memberLink}>Takami Saito</span>
            </Link>
          </li>
        </ul>
      </div>
    </Common>
  );
}
