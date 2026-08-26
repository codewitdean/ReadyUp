import type { ReadyUpEvent } from "../types/Event";

type EventCardProps = {
  event: ReadyUpEvent;
  onCompleteEvent: (eventId: string) => void;
  onDeleteEvent: (eventId: string) => void;
};

function EventCard({ event, onCompleteEvent, onDeleteEvent }: EventCardProps) {
  return (
    <article className={`event-card ${event.status === "completed" ? "completed" : ""}`}>
      <div className="event-card-header">
        <div>
          <h3>{event.title}</h3>
          <p>{event.description || "No description added."}</p>
        </div>

        <span className={`priority-badge ${event.priority}`}>
          {event.priority}
        </span>
      </div>

      <div className="event-details">
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Time:</strong> {event.startTime}
          {event.endTime && ` - ${event.endTime}`}
        </p>
        <p>
          <strong>Location:</strong> {event.location || "Not added"}
        </p>
        <p>
          <strong>Category:</strong> {event.category}
        </p>

        {event.meetingLink && (
          <p>
            <strong>Meeting Link:</strong>{" "}
            <a href={event.meetingLink} target="_blank" rel="noreferrer">
              Open link
            </a>
          </p>
        )}
      </div>

      <div className="event-actions">
        {event.status !== "completed" && (
          <button
            className="secondary-button"
            onClick={() => onCompleteEvent(event.id)}
          >
            Mark Complete
          </button>
        )}

        <button
          className="danger-button"
          onClick={() => onDeleteEvent(event.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default EventCard;