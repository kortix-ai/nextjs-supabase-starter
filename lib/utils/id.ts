import { nanoid } from "nanoid";

export function generateId(size = 21): string {
  return nanoid(size);
}

export function generateShortId(): string {
  return nanoid(10);
}

export function generateNumericId(): string {
  return nanoid(8).replace(/[^0-9]/g, "");
}
