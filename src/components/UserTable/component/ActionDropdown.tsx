"use client";

import styles from "./action-dropdown.module.scss";
import { useRouter } from "next/navigation";
import { saveUserToStorage } from "@/lib/storage";

export default function ActionDropdown({ user }: { user: any }) {
  const router = useRouter();

  const viewDetails = () => {
    saveUserToStorage(user);
    router.push(`/users/${user.id}`);
  };

  return (
    <div className={styles.menu}>
      <button onClick={viewDetails}>👁 View Details</button>
      <button>🚫 Blacklist User</button>
      <button>✅ Activate User</button>
    </div>
  );
}
