import { useEffect, useState } from "react";
import Header from "./components/Header";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import type { ReadyUpEvent } from "./types/Event";
import { groupEventsByDateStatus } from "./utils/eventUtils";
import {
  completeEvent,
  createEvent,
  deleteEvent,
  fetchEvents,
} from "./services/eventService";
import "./App.css";
import {
  calculateUrgencyScore,
  getMostUrgentEvent,
  getUrgencyLabel,
} from "./utils/priorityUtils";


function App() {
  const [showForm, setShowForm] = useState(false);
const [events, setEvents] = useState<ReadyUpEvent[]>([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState("");

 useEffect(() => {
  async function loadEvents() {
    try {
      const eventsFromApi = await fetchEvents();
      setEvents(eventsFromApi);
    } catch (error) {
      setError("Failed to load events from the backend.");
    } finally {
      setIsLoading(false);
    }
  }

  loadEvents();
}, []);

  const groupedEvents = groupEventsByDateStatus(events);

  const totalCount = events.length;
  const todayCount = groupedEvents.today.length;
  const upcomingCount = groupedEvents.upcoming.length;
  const completedCount = groupedEvents.completed.length;
  const mostUrgentEvent = getMostUrgentEvent(events);

  const mostUrgentScore = mostUrgentEvent
  ? calculateUrgencyScore(mostUrgentEvent)
  : 0;

  const mostUrgentLabel = mostUrgentEvent
  ? getUrgencyLabel(mostUrgentScore)
  : "None";

  function handleAddEventClick() {
    setShowForm(!showForm);
  }

async function handleAddEvent(
  newEvent: Omit<ReadyUpEvent, "id" | "status" | "createdAt">
) {
  try {
    const createdEvent = await createEvent(newEvent);
    setEvents([...events, createdEvent]);
    setShowForm(false);
  } catch (error) {
    setError("Failed to create event.");
  }
}

async function handleCompleteEvent(eventId: string) {
  try {
    const completedEvent = await completeEvent(eventId);

    const updatedEvents = events.map((event) =>
      event.id === eventId ? completedEvent : event
    );

    setEvents(updatedEvents);
  } catch (error) {
    setError("Failed to complete event.");
  }
}

async function handleDeleteEvent(eventId: string) {
  try {
    await deleteEvent(eventId);

    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  } catch (error) {
    setError("Failed to delete event.");
  }
}

  return (
    <main className="app">
      <Header onAddEventClick={handleAddEventClick} />

      {showForm && <EventForm onAddEvent={handleAddEvent} />}
      {error && <p className="error-message">{error}</p>}

{isLoading && <p className="empty-message">Loading events...</p>}

      <section className="dashboard-grid">
        <div className="summary-card">
          <h2>Total Events</h2>
          <p>{totalCount} events</p>
        </div>

        <div className="summary-card">
          <h2>Today</h2>
          <p>{todayCount} events</p>
        </div>

        <div className="summary-card">
          <h2>Upcoming</h2>
          <p>{upcomingCount} events</p>
        </div>

        <div className="summary-card">
          <h2>Completed</h2>
          <p>{completedCount} events</p>
        </div>
        <div className="summary-card urgent-summary-card">
  <h2>Most Urgent</h2>

  {mostUrgentEvent ? (
    <>
      <p>{mostUrgentEvent.title}</p>
      <span>
        {mostUrgentLabel} urgency · {mostUrgentScore}/105
      </span>
    </>
  ) : (
    <p>No active events</p>
  )}
</div>
      </section>

      <section className="content-section">
        <h2>Your Events</h2>

        <EventList
          title="Today"
          events={groupedEvents.today}
          emptyMessage="No events scheduled for today."
          onCompleteEvent={handleCompleteEvent}
          onDeleteEvent={handleDeleteEvent}
        />

        <EventList
          title="Upcoming"
          events={groupedEvents.upcoming}
          emptyMessage="No upcoming events."
          onCompleteEvent={handleCompleteEvent}
          onDeleteEvent={handleDeleteEvent}
        />

        <EventList
          title="Past"
          events={groupedEvents.past}
          emptyMessage="No past events."
          onCompleteEvent={handleCompleteEvent}
          onDeleteEvent={handleDeleteEvent}
        />

        <EventList
          title="Completed"
          events={groupedEvents.completed}
          emptyMessage="No completed events yet."
          onCompleteEvent={handleCompleteEvent}
          onDeleteEvent={handleDeleteEvent}
        />
      </section>
    </main>
  );
}

export default App;