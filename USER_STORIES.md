# ReadyUp User Stories

## Project Name

ReadyUp — AI Meeting Reminder & Prep Assistant

## Purpose

This document describes the main features of ReadyUp from the user's point of view. User stories help guide development by focusing on what the user needs and why the feature matters.

---

## Core User Stories

### 1. Add an Event

As a user, I want to add an event so that I can keep track of important meetings, classes, interviews, and appointments.

**Acceptance Criteria**

- User can enter an event title.
- User can enter a date.
- User can enter a start time and end time.
- User can enter a location or meeting link.
- User can select a category.
- User can select a priority level.
- Event appears on the dashboard after submission.

---

### 2. View Events

As a user, I want to view all my events so that I can see what I have planned.

**Acceptance Criteria**

- User can see a list of all events.
- Events display title, date, time, location, priority, and status.
- Events are sorted by date and time.

---

### 3. Group Events

As a user, I want my events grouped by Today, Upcoming, and Past so that I can quickly understand what needs my attention.

**Acceptance Criteria**

- Events happening today appear under “Today.”
- Future events appear under “Upcoming.”
- Events that already passed appear under “Past.”
- Completed events are visually different from active events.

---

### 4. Mark Event as Completed

As a user, I want to mark an event as completed so that I can keep my dashboard organized.

**Acceptance Criteria**

- User can click a button to complete an event.
- Completed event status changes to “completed.”
- Completed events appear differently from upcoming events.

---

### 5. Delete an Event

As a user, I want to delete an event so that I can remove events I no longer need.

**Acceptance Criteria**

- User can delete an event.
- Deleted events are removed from the dashboard.
- The event is removed from storage.

---

### 6. Calculate Reminders

As a user, I want the app to calculate reminder times so that I know when I should prepare for an event.

**Acceptance Criteria**

- System calculates a reminder one day before the event.
- System calculates a reminder on the day of the event.
- System calculates a reminder 30 minutes before the event.
- Reminder times are based on the event date and start time.

---

### 7. AI Meeting Prep

As a user, I want AI to generate a preparation checklist so that I know what to review or bring before a meeting.

**Acceptance Criteria**

- User can generate a prep checklist for an event.
- AI creates a short event summary.
- AI creates a checklist of preparation items.
- AI identifies whether the event is online, in person, or unclear.

---

### 8. Calendar Import

As a user, I want to import events from Google Calendar so that I do not have to manually enter every meeting.

**Acceptance Criteria**

- User can connect Google Calendar.
- App displays imported calendar events.
- User can choose which events to track.
- Imported events are saved in the app.

---

## MVP User Stories

For the first version, we will focus only on these:

1. Add an event
2. View events
3. Group events
4. Mark event as completed
5. Delete an event
6. Calculate reminders
7. Save events locally

---

## Future User Stories

These will come after the MVP:

1. User login and accounts
2. AI meeting preparation
3. Google Calendar import
4. Email or push notifications
5. AWS deployment
6. Dashboard analytics