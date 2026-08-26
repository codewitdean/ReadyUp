import type { ReadyUpEvent } from "../types/Event";

export function sortEventsByDateTime(events: ReadyUpEvent[]): ReadyUpEvent[] {
  return [...events].sort((a, b) => {
    const dateTimeA = new Date(`${a.date}T${a.startTime}`);
    const dateTimeB = new Date(`${b.date}T${b.startTime}`);

    return dateTimeA.getTime() - dateTimeB.getTime();
  });
}