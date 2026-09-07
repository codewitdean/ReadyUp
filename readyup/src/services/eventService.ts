import type { ReadyUpEvent } from "../types/Event";

const API_URL = "http://localhost:5001/api/events";

type ApiResponse<T> = {
  success: boolean;
  message?: string;
  count?: number;
  data: T;
};

export async function fetchEvents(): Promise<ReadyUpEvent[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch events.");
  }

  const result: ApiResponse<ReadyUpEvent[]> = await response.json();

  return result.data;
}

export async function createEvent(
  event: Omit<ReadyUpEvent, "id" | "status" | "createdAt">
): Promise<ReadyUpEvent> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create event.");
  }

  const result: ApiResponse<ReadyUpEvent> = await response.json();

  return result.data;
}

export async function completeEvent(eventId: string): Promise<ReadyUpEvent> {
  const response = await fetch(`${API_URL}/${eventId}/complete`, {
    method: "PATCH",
  });

  if (!response.ok) {
    throw new Error("Failed to complete event.");
  }

  const result: ApiResponse<ReadyUpEvent> = await response.json();

  return result.data;
}

export async function deleteEvent(eventId: string): Promise<ReadyUpEvent> {
  const response = await fetch(`${API_URL}/${eventId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete event.");
  }

  const result: ApiResponse<ReadyUpEvent> = await response.json();

  return result.data;
}