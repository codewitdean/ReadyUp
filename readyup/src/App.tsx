import { useEffect, useState } from "react";
import Header from "./components/Header";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import type { ReadyUpEvent } from "./types/Event";
import { groupEventsByDateStatus } from "./utils/eventUtils";
import {
  loadEventsFromStorage,
  saveEventsToStorage,
} from "./utils/storageUtils";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState<ReadyUpEvent[]>(() =>
    loadEventsFromStorage()
  );

  useEffect(() => {
    saveEventsToStorage(events);
  }, [events]);

  const groupedEvents = groupEventsByDateStatus(events);

  const totalCount = events.length;
  const todayCount = groupedEvents.today.length;
  const upcomingCount = groupedEvents.upcoming.length;
  const completedCount = groupedEvents.completed.length;

  function handleAddEventClick() {
    setShowForm(!showForm);
  }

  function handleAddEvent(newEvent: ReadyUpEvent) {
    setEvents([...events, newEvent]);
    setShowForm(false);
  }

  function handleCompleteEvent(eventId: string) {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        return {
          ...event,
          status: "completed" as const,
        };
      }

      return event;
    });

    setEvents(updatedEvents);
  }

  function handleDeleteEvent(eventId: string) {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  }

  return (
    <main className="app">
      <Header onAddEventClick={handleAddEventClick} />

      {showForm && <EventForm onAddEvent={handleAddEvent} />}

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