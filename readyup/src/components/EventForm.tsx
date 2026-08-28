import { useState } from "react";
import type {
  ReadyUpEvent,
  EventCategory,
  EventPriority,
  EventFormat,
} from "../types/Event";

type EventFormProps = {
  onAddEvent: (event: ReadyUpEvent) => void;
};

function EventForm({ onAddEvent }: EventFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [eventFormat, setEventFormat] = useState<EventFormat>("online");
  const [location, setLocation] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [category, setCategory] = useState<EventCategory>("school");
  const [priority, setPriority] = useState<EventPriority>("medium");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Event title is required.");
      return;
    }

    if (!date) {
      setError("Event date is required.");
      return;
    }

    if (!startTime) {
      setError("Start time is required.");
      return;
    }

    if (endTime && endTime <= startTime) {
      setError("End time must be after start time.");
      return;
    }

    if (eventFormat === "online" && !meetingLink.trim()) {
      setError("Meeting link is required for online events.");
      return;
    }

    if (eventFormat === "in_person" && !location.trim()) {
      setError("Location is required for in-person events.");
      return;
    }

    if (
      eventFormat === "hybrid" &&
      (!location.trim() || !meetingLink.trim())
    ) {
      setError("Hybrid events need both a location and a meeting link.");
      return;
    }

    const newEvent: ReadyUpEvent = {
      id: crypto.randomUUID(),
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
      status: "upcoming",
      createdAt: new Date().toISOString(),
    };

    onAddEvent(newEvent);

    setTitle("");
    setDescription("");
    setDate("");
    setStartTime("");
    setEndTime("");
    setEventFormat("online");
    setLocation("");
    setMeetingLink("");
    setCategory("school");
    setPriority("medium");
    setError("");
  }

  const shouldShowLocation =
    eventFormat === "in_person" || eventFormat === "hybrid";

  const shouldShowMeetingLink =
    eventFormat === "online" || eventFormat === "hybrid";

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Add New Event</h2>

      {error && <p className="error-message">{error}</p>}

      <div className="form-group">
        <label>Event Title</label>
        <input
          type="text"
          placeholder="Example: Amazon SDE Interview Prep"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          placeholder="Add notes about this event"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Event Format</label>
        <select
          value={eventFormat}
          onChange={(e) => {
            const selectedFormat = e.target.value as EventFormat;
            setEventFormat(selectedFormat);
            setError("");

            if (selectedFormat === "online") {
              setLocation("");
            }

            if (selectedFormat === "in_person") {
              setMeetingLink("");
            }
          }}
        >
          <option value="online">Online</option>
          <option value="in_person">In-person</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      {shouldShowLocation && (
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            placeholder="Example: Campus, Office, Room 201"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      )}

      {shouldShowMeetingLink && (
        <div className="form-group">
          <label>Meeting Link</label>
          <input
            type="url"
            placeholder="Example: https://zoom.us/example"
            value={meetingLink}
            onChange={(e) => setMeetingLink(e.target.value)}
          />
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as EventCategory)}
          >
            <option value="school">School</option>
            <option value="work">Work</option>
            <option value="interview">Interview</option>
            <option value="personal">Personal</option>
          </select>
        </div>

        <div className="form-group">
          <label>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as EventPriority)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <button className="primary-button" type="submit">
        Save Event
      </button>
    </form>
  );
}

export default EventForm;