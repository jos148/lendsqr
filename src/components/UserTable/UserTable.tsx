"use client";

import { useState, useEffect } from "react";
import { User } from "@/types/user";
import { saveUserToStorage } from "@/lib/storage";
import { useRouter } from "next/navigation";
import styles from "./UserTable.module.scss";
import ActionDropdown from "./component/ActionDropdown";
import FilterDropdown from "./component/FilterDropdown";
import { ListFilter } from 'lucide-react';


interface Props {
  users: User[];
}

export default function UserTable({ users }: Props) {
  const router = useRouter();

  const [openRow, setOpenRow] = useState<string | null>(null);
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState<
  "organization" | "username" | "email" | "phone" | "date" | "status" | null
  >(null);
  useEffect(() => {
    const close = () => setShowFilter(false);
    window.addEventListener("click", close);
  return () => window.removeEventListener("click", close);
  }, [] )



  useEffect(() => {
  const close = () => setOpenRow(null);
  window.addEventListener("click", close);
  return () => window.removeEventListener("click", close);
}, []);



  const handleClick = (user: User) => {
    saveUserToStorage(user);
    router.push(`/users/${user.id}`);
  };

  const getStatusClass = (status?: string) => {
    return status ? styles[status.toLowerCase()] : "";
  };

  return (
    <div className={styles.wrapper}>
  {showFilter && (
    <FilterDropdown
      activeField={activeFilter}
      onClose={() => setShowFilter(false)}
    />
  )}
      {/* Desktop / Tablet */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Organization
              <button
    onClick={(e) => {
      e.stopPropagation();
      setActiveFilter("organization");
      setShowFilter(true);
    }}
  >
      <ListFilter className={styles.filter} />
    </button>
            </th>
            <th>Username <button
    onClick={(e) => {
      e.stopPropagation();
      setActiveFilter("organization");
      setShowFilter(true);
    }}
  >
      <ListFilter className={styles.filter} />
    </button></th>
            <th>Email <button
    onClick={(e) => {
      e.stopPropagation();
      setActiveFilter("organization");
      setShowFilter(true);
    }}
  >
      <ListFilter className={styles.filter} />
    </button></th>
            <th>Phone <button
    onClick={(e) => {
      e.stopPropagation();
      setActiveFilter("organization");
      setShowFilter(true);
    }}
  >
      <ListFilter className={styles.filter} />
    </button></th>
            <th>Date Joined <button
    onClick={(e) => {
      e.stopPropagation();
      setActiveFilter("organization");
      setShowFilter(true);
    }}
  >
      <ListFilter className={styles.filter} />
    </button></th>
            <th>Status <button
    onClick={(e) => {
      e.stopPropagation();
      setActiveFilter("organization");
      setShowFilter(true);
    }}
  >
      <ListFilter className={styles.filter} />
    </button></th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => handleClick(user)}>
              <td>{user.organisation ?? "—"}</td>
              <td>{user.username ?? "—"}</td>
              <td>{user.email ?? "—"}</td>
              <td>{user.phone ?? "—"}</td>
              <td>{user.dob ?? "—"}</td>
              <td>
                <span
                  className={`${styles.status} ${getStatusClass(user.status)}`}
                >
                  {user.status ?? "Unknown"}
                </span>
              </td>
              <td className={styles.actions}>
                <button onClick={(e) => {e.stopPropagation(); setOpenRow(openRow === user.id ? null : user.id);
                }}
                >⋮
                </button>

                {openRow === user.id && <ActionDropdown user={user} />}
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}
      <div className={styles.mobile}>
        {users.map((user) => (
          <div
            key={user.id}
            className={styles.card}
            onClick={() => handleClick(user)}
          >
            <p>
              <strong>User:</strong> {user.username ?? "—"}
            </p>
            <p>
              <strong>Email:</strong> {user.email ?? "—"}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone ?? "—"}
            </p>
            <p>
              <span
                className={`${styles.status} ${getStatusClass(user.status)}`}
              >
                {user.status ?? "Unknown"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
