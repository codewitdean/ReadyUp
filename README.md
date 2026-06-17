# ReadyUp

## AI Meeting Reminder & Prep Assistant

ReadyUp is a full-stack software engineering project designed to help users track meetings, events, interviews, classes, and appointments. The app helps users stay organized by showing upcoming events, calculating reminders, and later generating AI-powered preparation checklists.

---

## Project Overview

People often forget important meetings or show up unprepared because event information is spread across calendars, emails, notes, and messages.

ReadyUp solves this problem by giving users one place to:

* Add and manage events
* View upcoming meetings
* Track today’s events
* Mark events as completed
* Calculate reminder times
* Prepare for meetings using AI-generated checklists in a future version

---

## Main Features

### MVP Features

* Add an event
* View all events
* Delete an event
* Mark an event as completed
* Group events by Today, Upcoming, and Past
* Sort events by date and time
* Calculate reminder times
* Save events using LocalStorage

### Future Features

* User login and registration
* PostgreSQL database
* AI meeting preparation checklist
* Google Calendar integration
* Email or push notifications
* AWS deployment
* Dashboard analytics

---

## Tech Stack

### MVP

* React
* TypeScript
* CSS
* LocalStorage

### Future Full-Stack Version

* React + TypeScript
* Node.js
* Express.js
* PostgreSQL
* Prisma
* AI API
* Google Calendar API
* AWS
* GitHub Actions

---

## Software Engineering Documents

This project includes planning and design documents similar to what real software teams use before building a product.

| Document           | Purpose                                          |
| ------------------ | ------------------------------------------------ |
| REQUIREMENTS.md    | Defines what the app must do                     |
| USER_STORIES.md    | Describes features from the user’s point of view |
| SYSTEM_DESIGN.md   | Explains the system architecture                 |
| DATABASE_SCHEMA.md | Plans the database structure                     |
| API_DESIGN.md      | Plans backend API routes                         |
| TEST_PLAN.md       | Explains how the app will be tested              |
| GANTT_CHART.md     | Shows the project timeline                       |

---

## System Architecture

### MVP Architecture

```text
User
 ↓
React Frontend
 ↓
Browser LocalStorage
```

### Future Full-Stack Architecture

```text
User
 ↓
React + TypeScript Frontend
 ↓
Node.js / Express Backend
 ↓
PostgreSQL Database
```

Future backend services may also connect to:

```text
AI API
Google Calendar API
Reminder Scheduler
Email/Notification Service
```

---

## Main Data Model

```ts
type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  meetingLink: string;
  category: "school" | "work" | "interview" | "personal";
  priority: "low" | "medium" | "high";
  status: "upcoming" | "completed" | "cancelled";
  createdAt: string;
};
```

---

## Project Roadmap

### Stage 1: Planning and Documentation

* Requirements document
* User stories
* System design
* Database schema
* API design
* Test plan
* Gantt chart

### Stage 2: Frontend MVP

* React project setup
* Dashboard layout
* Event form
* Event list
* Event card
* Add, delete, and complete event features

### Stage 3: Event Logic

* Event sorting
* Event grouping
* Reminder calculations
* LocalStorage persistence

### Stage 4: Backend API

* Node.js/Express server
* Event API routes
* Backend validation
* API testing

### Stage 5: Database

* PostgreSQL setup
* Database schema implementation
* Connect backend to database

### Stage 6: AI Feature

* AI-generated event summary
* AI preparation checklist
* Online vs. in-person event detection

### Stage 7: Deployment

* Deploy frontend
* Deploy backend
* Add screenshots
* Final documentation

---

## Testing Plan

The MVP will be tested through manual testing and later unit tests.

Core tests include:

* Add event
* Delete event
* Mark event as completed
* Group events correctly
* Sort events correctly
* Save events after page refresh
* Validate missing fields
* Validate event times

---

## Goal of This Project

The goal of ReadyUp is to build a portfolio-quality software engineering project that demonstrates:

* Frontend development
* Backend planning
* Database design
* API design
* Data structures and algorithms
* Clean code
* Testing
* Documentation
* AI integration
* Cloud deployment planning

---

## Current Status

Stage 1: Planning and Documentation
Status: In Progress

---

## Author

Dean Kwadwo Obeng Asante
