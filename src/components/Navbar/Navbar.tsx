"use client";

import { Bell } from "lucide-react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>lendsqr</div>

      <div className={styles.searchBox}>
        <input className={styles.searchInput} placeholder="Search for anything" />
        <button className={styles.searchButton}>🔍</button>
      </div>

      <div className={styles.right}>
        <span className={styles.docs}>Docs</span>
        <Bell className={styles.bell} />
        <div className={styles.avatar}>A</div>
        
        <span className={styles.username}>Adedeji</span>
        <div className={styles.dropdown}>▼</div>
        
      </div>
    </header>
  );
}
