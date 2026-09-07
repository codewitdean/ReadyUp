import type { Request, Response } from "express";
import { events } from "../data/events";
import type { ReadyUpEvent } from "../types/Event";

export function getEvents(req: Request, res: Response) {
  res.status(200).json({
    success: true,
    count: events.length,
    data: events,
  });
}

export function createEvent(req: Request, res: Response) {
  const {
    title,
    description,
    date,
    startTime,
    endTime,
    eventFormat,
    location,
    meetingLink,
    category,
    priority,
  } = req.body;

  if (!title || !date || !startTime) {
    return res.status(400).json({
      success: false,
      message: "Title, date, and start time are required.",
    });
  }

  if (eventFormat === "online" && !meetingLink) {
    return res.status(400).json({
      success: false,
      message: "Meeting link is required for online events.",
    });
  }

  if (eventFormat === "in_person" && !location) {
    return res.status(400).json({
      success: false,
      message: "Location is required for in-person events.",
    });
  }

  if (eventFormat === "hybrid" && (!location || !meetingLink)) {
    return res.status(400).json({
      success: false,
      message: "Hybrid events require both location and meeting link.",
    });
  }

  const newEvent: ReadyUpEvent = {
    id: crypto.randomUUID(),
    title,
    description: description || "",
    date,
    startTime,
    endTime: endTime || "",
    eventFormat: eventFormat || "online",
    location: location || "",
    meetingLink: meetingLink || "",
    category: category || "school",
    priority: priority || "medium",
    status: "upcoming",
    createdAt: new Date().toISOString(),
  };

  events.push(newEvent);

  res.status(201).json({
    success: true,
    message: "Event created successfully.",
    data: newEvent,
  });
}

export function updateEvent(req: Request, res: Response) {
  const { id } = req.params;

  const eventIndex = events.findIndex((event) => event.id === id);

  if (eventIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Event not found.",
    });
  }

  const existingEvent = events[eventIndex];

  events[eventIndex] = {
    ...existingEvent,
    ...req.body,
  };

  res.status(200).json({
    success: true,
    message: "Event updated successfully.",
    data: events[eventIndex],
  });
}

export function deleteEvent(req: Request, res: Response) {
  const { id } = req.params;

  const eventIndex = events.findIndex((event) => event.id === id);

  if (eventIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Event not found.",
    });
  }

  const deletedEvent = events.splice(eventIndex, 1);

  res.status(200).json({
    success: true,
    message: "Event deleted successfully.",
    data: deletedEvent[0],
  });
}

export function completeEvent(req: Request, res: Response) {
  const { id } = req.params;

  const event = events.find((event) => event.id === id);

  if (!event) {
    return res.status(404).json({
      success: false,
      message: "Event not found.",
    });
  }

  event.status = "completed";

  res.status(200).json({
    success: true,
    message: "Event marked as completed.",
    data: event,
  });
}