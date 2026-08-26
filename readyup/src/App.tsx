import { useState } from "react";
import Header from "./components/Header";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import type { ReadyUpEvent } from "./types/Event";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState<ReadyUpEvent[]>([]);

  const completedCount = events.filter(
    (event) => event.status === "completed"
  ).length;

  const upcomingCount = events.filter(
    (event) => event.status === "upcoming"
  ).length;

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
          <p>{events.length} events</p>
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
          events={events}
          onCompleteEvent={handleCompleteEvent}
          onDeleteEvent={handleDeleteEvent}
        />
      </section>
    </main>
  );
}

export default App;