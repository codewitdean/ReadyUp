# ReadyUp Database Schema

## Project Name

ReadyUp — AI Meeting Reminder & Prep Assistant

## Purpose

This document describes the database structure for ReadyUp. The database will store users, events, reminders, and AI-generated meeting preparation information.

The MVP will use LocalStorage first, but the full version will use PostgreSQL.

---

## 1. Database Overview

ReadyUp will eventually store:

- User account information
- Events and meetings
- Reminder schedules
- AI-generated summaries and checklists
- Calendar integration data

---

## 2. Tables

## Users Table

The `users` table stores account information for each user.

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    event_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME,
    location TEXT,
    meeting_link TEXT,
    category VARCHAR(50),
    priority VARCHAR(20) DEFAULT 'medium',
    status VARCHAR(20) DEFAULT 'upcoming',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE reminders (
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES events(id) ON DELETE CASCADE,
    reminder_type VARCHAR(50) NOT NULL,
    reminder_time TIMESTAMP NOT NULL,
    sent BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE ai_preps (
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES events(id) ON DELETE CASCADE,
    summary TEXT,
    checklist TEXT,
    event_type VARCHAR(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE calendar_integrations (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    provider VARCHAR(50) NOT NULL,
    access_token TEXT,
    refresh_token TEXT,
    connected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

users
  |
  | one user has many events
  ↓
events
  |
  | one event has many reminders
  ↓
reminders

events
  |
  | one event has one AI prep
  ↓
ai_preps

users
  |
  | one user can have calendar integrations
  ↓
calendar_integrations

CREATE INDEX idx_events_user_id ON events(user_id);
CREATE INDEX idx_events_date ON events(event_date);
CREATE INDEX idx_reminders_time ON reminders(reminder_time);
type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  meetingLink: string;
  category: string;
  priority: "low" | "medium" | "high";
  status: "upcoming" | "completed" | "cancelled";
  createdAt: string;
};

This document shows you understand **database design**, **relationships**, **foreign keys**, and **future scalability**.

Next, create:
```sql

API_DESIGN.md