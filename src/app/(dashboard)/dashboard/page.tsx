"use client";

import styles from "./dashboard.module.scss";
import { useEffect, useState, useMemo } from "react";
import { fetchUsers } from "@/lib/api";
import StatsCard from "@/components/StatsCard/StatsCard";
import UserTable from "@/components/UserTable/UserTable";
import { User } from "@/types/user";
import { Users, UserCheck, DollarSign, CreditCard } from 'lucide-react';

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState("All");
  const [org, setOrg] = useState("All");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [statusFilter, setStatusFilter] = useState<
    "All" | "Active" | "Inactive" | "Pending" | "Blacklisted"
  >("All");


  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data.filter(Boolean));
    });
  }, []);

  // 🔎 FILTERING
  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        (status === "All" || user.status === status) &&
        (org === "All" || user.organization === org),
    );
  }, [users, status, org]);

  // 📄 PAGINATION
  const start = (page - 1) * pageSize;
  const paginatedUsers = filteredUsers.slice(start, start + pageSize);
  const totalPages = Math.ceil(filteredUsers.length / pageSize);

  return (
    <div className={styles.container}>
      <h2>Dashboard</h2>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "1rem",
        }}
      >
        <StatsCard title="Users" icon={<Users />} value={users.length} />
        <StatsCard
          title="Active Users"
          icon={<UserCheck />}
          value={users.filter((u) => u.status === "Active").length}
        />
        <StatsCard
          title="Users with Loans"
          icon={<DollarSign />}
          value={12453}
        />
        <StatsCard
          title="Users with Savings"
          icon={<CreditCard />}
          value={102453}
        />
      </div>

      {/* Table */}
      <div style={{ marginTop: "2rem" }}>
        <UserTable users={paginatedUsers} />
      </div>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <div>
          <label>Rows per page: </label>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <span style={{ margin: "0 1rem" }}>
            {page} / {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
