import type { ReadyUpEvent } from "../types/Event";
import EventCard from "./EventCard";

type EventListProps = {
  events: ReadyUpEvent[];
  onCompleteEvent: (eventId: string) => void;
  onDeleteEvent: (eventId: string) => void;
};

function EventList({ events, onCompleteEvent, onDeleteEvent }: EventListProps) {
  if (events.length === 0) {
    return (
      <p className="empty-message">
        No events yet. Add your first meeting, class, interview, or appointment.
      </p>
    );
  }

  return (
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
  );
}

export default EventList;