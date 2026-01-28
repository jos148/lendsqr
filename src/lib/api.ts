// src/lib/api.ts
import { User } from "@/types/user";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch("/mock/users.json");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}


export async function fetchUserById(id: string) {
  const users = await fetchUsers();
  return users.find((user) => user.id === id);
}
