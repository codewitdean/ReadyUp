export type EventCategory = "school" | "work" | "interview" | "personal";

export type EventPriority = "low" | "medium" | "high";

export type EventStatus = "upcoming" | "completed" | "cancelled";

export type EventFormat = "online" | "in_person" | "hybrid";

export type ReadyUpEvent = {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  eventFormat: EventFormat;
  location: string;
  meetingLink: string;
  category: EventCategory;
  priority: EventPriority;
  status: EventStatus;
  createdAt: string;
};