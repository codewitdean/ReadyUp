import type { ReadyUpEvent } from "../types/Event";

const STORAGE_KEY = "readyup_events";

export function saveEventsToStorage(events: ReadyUpEvent[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

export function loadEventsFromStorage(): ReadyUpEvent[] {
  const storedEvents = localStorage.getItem(STORAGE_KEY);

  if (!storedEvents) {
    return [];
  }

  try {
    return JSON.parse(storedEvents) as ReadyUpEvent[];
  } catch (error) {
    console.error("Failed to load events from storage:", error);
    return [];
  }
}