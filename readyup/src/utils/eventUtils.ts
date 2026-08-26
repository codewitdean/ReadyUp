import type { ReadyUpEvent } from "../types/Event";

export function sortEventsByDateTime(events: ReadyUpEvent[]): ReadyUpEvent[] {
  return [...events].sort((a, b) => {
    const dateTimeA = new Date(`${a.date}T${a.startTime}`);
    const dateTimeB = new Date(`${b.date}T${b.startTime}`);

    return dateTimeA.getTime() - dateTimeB.getTime();
  });
}

export type GroupedEvents = {
  today: ReadyUpEvent[];
  upcoming: ReadyUpEvent[];
  past: ReadyUpEvent[];
  completed: ReadyUpEvent[];
};

export function groupEventsByDateStatus(events: ReadyUpEvent[]): GroupedEvents {
  const today: ReadyUpEvent[] = [];
  const upcoming: ReadyUpEvent[] = [];
  const past: ReadyUpEvent[] = [];
  const completed: ReadyUpEvent[] = [];

  const now = new Date();
  const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  events.forEach((event) => {
    if (event.status === "completed") {
      completed.push(event);
      return;
    }

    const eventDate = new Date(`${event.date}T${event.startTime}`);
    const eventDay = new Date(
      eventDate.getFullYear(),
      eventDate.getMonth(),
      eventDate.getDate()
    );

    if (eventDay.getTime() === todayDate.getTime()) {
      today.push(event);
    } else if (eventDay.getTime() > todayDate.getTime()) {
      upcoming.push(event);
    } else {
      past.push(event);
    }
  });

  return {
    today: sortEventsByDateTime(today),
    upcoming: sortEventsByDateTime(upcoming),
    past: sortEventsByDateTime(past),
    completed: sortEventsByDateTime(completed),
  };
}