import { User } from "@/types/user";

export const saveUserToStorage = (user: User) => {
  if (typeof window === "undefined") return;

  localStorage.setItem("selectedUser", JSON.stringify(user));
};

export const getUserFromStorage = (): User | null => {
  if (typeof window === "undefined") return null;

  const data = localStorage.getItem("selectedUser");
  return data ? JSON.parse(data) : null;
};
