import styles from "/styles/common.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <Link href="/">
            <h1 className={styles.header}>我是 OUSII Home Page</h1>
        </Link>
    );
}