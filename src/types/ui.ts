export type UserRole = "viewer" | "admin";

export interface Filters {
  search: string;

  type: string;

  category: string;
}

export interface UIState {
  role: UserRole;

  theme: "light" | "dark";

  filters: Filters;
}
