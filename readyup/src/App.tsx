import { useState } from "react";
import Header from "./components/Header";
import EventForm from "./components/EventForm";
import type { ReadyUpEvent } from "./types/Event";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState<ReadyUpEvent[]>([]);

  function handleAddEventClick() {
    setShowForm(!showForm);
  }

  function handleAddEvent(newEvent: ReadyUpEvent) {
    setEvents([...events, newEvent]);
    setShowForm(false);
  }

  return (
    <main className="app">
      <Header onAddEventClick={handleAddEventClick} />

      {showForm && <EventForm onAddEvent={handleAddEvent} />}

      <section className="dashboard-grid">
        <div className="summary-card">
          <h2>Today</h2>
          <p>0 events</p>
        </div>

        <div className="summary-card">
          <h2>Upcoming</h2>
          <p>{events.length} events</p>
        </div>

        <div className="summary-card">
          <h2>Completed</h2>
          <p>0 events</p>
        </div>
      </section>

      <section className="content-section">
        <h2>Your Events</h2>

        {events.length === 0 ? (
          <p className="empty-message">
            No events yet. Add your first meeting, class, interview, or appointment.
          </p>
        ) : (
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <strong>{event.title}</strong> — {event.date} at {event.startTime}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;