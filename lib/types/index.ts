export type { Database } from "./database";

export type ActionResult<T = void> =
  | { success: true; data: T }
  | { success: false; error: string };
