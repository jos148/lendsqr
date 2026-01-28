"use client";

import styles from "./Sidebar.module.scss";
import Link from "next/link";
import { BadgePercent, Blend, BookHeadphones, BriefcaseBusiness, ChartColumnIncreasing, CircleDollarSign, ClipboardList, DecimalsArrowRight, FileSliders, HandCoins, Handshake, House, Landmark, LogOut, PersonStanding, Scroll, Toolbox, UserCheck, UserCog, Users, UserX } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <Link className={styles.link} href="/">
          <BriefcaseBusiness className={styles.icon} /> Switch Organization
        </Link>
        <Link className={styles.link} href="/dashboard">
          <House className={styles.icon} /> Dashboard
        </Link>
      </nav>
      <nav>
        <span>CUSTOMERS</span>
        <Link className={styles.link} href="/users">
          <Users className={styles.icon} /> Users
        </Link>
        <Link className={styles.link} href="#">
          <PersonStanding className={styles.icon} /> Guarantors
        </Link>
        <Link className={styles.link} href="#">
          <CircleDollarSign className={styles.icon} /> Loans
        </Link>
        <Link className={styles.link} href="#">
          <Handshake className={styles.icon} /> Decision Models
        </Link>
        <Link className={styles.link} href="#">
          <Landmark className={styles.icon} /> Savings
        </Link>
        <Link className={styles.link} href="#">
          <HandCoins className={styles.icon} />
          Loan Requests
        </Link>
        <Link className={styles.link} href="#">
          <UserCheck className={styles.icon} />
          Whitelist
        </Link>
        <Link className={styles.link} href="#">
          <UserX className={styles.icon} />
          Karma
        </Link>
      </nav>
      <nav>
        <span>BUSINESSES</span>
        <Link className={styles.link} href="#">
          <BriefcaseBusiness className={styles.icon} />
          Organization
        </Link>
        <Link className={styles.link} href="#">
          <HandCoins className={styles.icon} />
          Loan Products
        </Link>
        <Link className={styles.link} href="#">
          <Landmark className={styles.icon} /> Savings Products
        </Link>
        <Link className={styles.link} href="#">
          <Blend className={styles.icon} />
          Fees and Charges
        </Link>
        <Link className={styles.link} href="#">
          <BookHeadphones className={styles.icon} />
          Transactions
        </Link>
        <Link className={styles.link} href="#">
          <Toolbox className={styles.icon} />
          Services
        </Link>
        <Link className={styles.link} href="#">
          <UserCog className={styles.icon} />
          Service Account
        </Link>
        <Link className={styles.link} href="#">
          <Scroll className={styles.icon} />
          Settlements
        </Link>
        <Link className={styles.link} href="#">
          <ChartColumnIncreasing className={styles.icon} />
          Reports
        </Link>
      </nav>
      <nav className={styles.settings}>
        <span>SETTINGS</span>
        <Link className={styles.link} href="#">
          <DecimalsArrowRight className={styles.icon} />
          Preferences
        </Link>
        <Link className={styles.link} href="#">
          <BadgePercent className={styles.icon} />
          Fees and Pricing
        </Link>
        <Link className={styles.link} href="#">
          <ClipboardList className={styles.icon} />
          Audit Logs
        </Link>
        <Link className={styles.link} href="#">
          <FileSliders className={styles.icon} />
          Systems Messages
        </Link>
      </nav>
      <hr className={styles.divider} />
      <div className={styles.logout}>
        <Link className={styles.link} href="#">
          <LogOut className={styles.icon} />
          Logout
        </Link>
        <p>v1.2.0</p>
      </div>
    </aside>
  );
}
