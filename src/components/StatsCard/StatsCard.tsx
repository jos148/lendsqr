// StatsCard.tsx
import { ReactNode } from "react";
import styles from "./StatsCard.module.scss";

interface StatsCardProps {
  title: string;
  value: number;
  icon?: ReactNode;
}

export default function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
}
