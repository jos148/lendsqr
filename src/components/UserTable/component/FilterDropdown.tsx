"use client";

import styles from "./filter-dropdown.module.scss";


interface Props {
  activeField: string | null;
  onClose: () => void;
}

export default function FilterDropdown({ activeField, onClose }: Props) {
  return (
    <form className={styles.filterPanel}>
      <div className={styles.field}>
        <label>Organization</label>
        <select disabled={activeField !== "organization"}>
          <option>Select</option>
        </select>
      </div>

      <div className={styles.field}>
        <label>Username</label>
        <input
          placeholder="User"
          disabled={activeField !== "username"}
        />
      </div>

      <div className={styles.field}>
        <label>Email</label>
        <input
          placeholder="Email"
          disabled={activeField !== "email"}
        />
      </div>
      <div className={styles.field}>
        <label>Date</label>
        <input
          placeholder="Date"
          disabled={activeField !== "Date"}
        />
      </div>
      <div className={styles.field}>
        <label>Phone Number</label>
        <input
          placeholder="Phone Number"
          disabled={activeField !== "phone number"}
        />
      </div>

      <div className={styles.field}>
        <label>Status</label>
        <select disabled={activeField !== "status"}>
          <option>Select</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Pending</option>
          <option>Blacklisted</option>
        </select>
      </div>

      <div className={styles.actions}>
        <button type="button" onClick={onClose} className={styles.reset}>
          Reset
        </button>
        <button type="submit" onClick={onClose} className={styles.filter}>Filter</button>
      </div>
    </form>
  );
}
 