"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./login.module.scss";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <div className={styles.lendsqr}>
        Lendsqr
      </div>
      <Image
  src="/zoha.jpg"
  alt="Lendsqr logo"
  width={800}
  height={800}
/>

      </div>
      <div className={styles.right}>
      <div className={styles.card}>
        <h1 className={styles.welcome}>Welcome!</h1>
        <h2 className={styles.detail}>Enter details to login</h2>
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <span className={styles.forgot}>FORGOT PASSWORD?</span>
        <button onClick={handleLogin}>LOG IN</button>
      </div>
      </div>
    </div>
  );
}
