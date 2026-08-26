import type { ReadyUpEvent } from "../types/Event";
import EventCard from "./EventCard";

type EventListProps = {
  title: string;
  events: ReadyUpEvent[];
  emptyMessage: string;
  onCompleteEvent: (eventId: string) => void;
  onDeleteEvent: (eventId: string) => void;
};

function EventList({
  title,
  events,
  emptyMessage,
  onCompleteEvent,
  onDeleteEvent,
}: EventListProps) {
  return (
    <section className="event-group">
      <h3>{title}</h3>

      {events.length === 0 ? (
        <p className="empty-message">{emptyMessage}</p>
      ) : (
        <div className="event-list">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onCompleteEvent={onCompleteEvent}
              onDeleteEvent={onDeleteEvent}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default EventList;