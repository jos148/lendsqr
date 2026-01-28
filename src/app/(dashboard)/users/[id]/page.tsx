"use client";

import styles from "./user-details.module.scss";
import { getUserFromStorage } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "@/types/user";

export default function UserDetailsPage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("General Details");


  useEffect(() => {
    setMounted(true);
    setUser(getUserFromStorage());
  }, []);

  //  Prevent hydration mismatch
  if (!mounted) return null;

  if (!user) {
    return <p className={styles.empty}>No user selected</p>;
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.headerBack}>
        <button onClick={() => router.back()} className={styles.back}>
          ← Back to Users
        </button>

      </div>

      <div className={styles.divider} />
      <div className={styles.header}>

      <h2 className={styles.sectionTitleUser}>User Details</h2>
      <div className={styles.actionButtons}>
      <button className={styles.blacklist}>Blacklist User</button>
      <button className={styles.activate}>Activate User</button>
      </div>
      </div>

        

      {/* Profile Card */}
      <div className={styles.profileCard }>
        <div className={styles.firstUser}>
          <div className={styles.avatar}>{user.name?.charAt(0) ?? "U"}</div>

          <div className={styles.profileInfo}>
            <h3 className={styles.sectionTitleUser}>{user.name}</h3>
            <p>{user.username}</p>
          </div>

          <div className={styles.tier}>
            <p>User’s Tier</p> ⭐ ⭐ ⭐
          </div>

          <div className={styles.balance}>
            <h4 className={styles.sectionTitleUser}>₦200,000.00</h4>
            <p>9912345678 / Providus Bank</p>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {[
            "General Details",
            "Documents",
            "Bank Details",
            "Loans",
            "Savings",
            "App and System",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${styles.tab} ${
                activeTab === tab ? styles.activeTab : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Personal Info */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Personal Information</h4>

        <div className={styles.grid}>
          <Detail label="Full Name" value={user.name} />
          <Detail label="Phone Number" value={user.phone} />
          <Detail label="Email Address" value={user.email} />
          <Detail label="Gender" value="Female" />
          <Detail label="Marital Status" value="Single" />
          <Detail label="Children" value="None" />
          <Detail label="Type of Residence" value="Parent’s Apartment" />
        </div>
      </div>

      {/* Education */}
      <div className={styles.section}>
        <div className={styles.sectionCard}>
          <h4 className={styles.sectionTitle}>Education and Employment</h4>

          <div className={styles.grid}>
            <Detail label="Level of Education" value="B.Sc" />
            <Detail label="Employment Status" value="Employed" />
            <Detail label="Sector" value="FinTech" />
            <Detail label="Duration" value="2 years" />
            <Detail label="Office Email" value={user.email} />
            <Detail label="Monthly Income" value="₦200,000.00 - ₦400,000.00" />
            <Detail label="Loan Repayment" value="₦40,000.00" />
          </div>
        </div>

        <hr />

        <div className={styles.sectionCard}>
          <h4 className={styles.sectionTitle}>Socials</h4>

          <div className={styles.grid}>
            <Detail label="Twitter" value="@johndoe" />
            <Detail label="Facebook" value="John Doe" />
            <Detail label="Instagram" value="@johndoe" />
          </div>
        </div>

        <hr />

        <div className={styles.sectionCard}>
          <h4 className={styles.sectionTitle}>Guarantor</h4>
          <div className={styles.grid}>
            <Detail label="Full Name" value="Jane Doe" />
            <Detail label="Phone Number" value="08012345678" />
            <Detail label="Email Address" value="janedoe@example.com" />
          </div>
        </div>

        <hr />

        <div className={styles.sectionCard}>
          <div className={styles.grid}>
            <Detail label="Full Name" value={user.name} />
            <Detail label="Phone Number" value={user.phone} />
            <Detail label="Email Address" value={user.email} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable detail row */
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
}
