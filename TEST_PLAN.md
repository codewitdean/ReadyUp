# ReadyUp Test Plan

## Project Name

ReadyUp — AI Meeting Reminder & Prep Assistant

## Purpose

This document explains how ReadyUp will be tested. Testing helps make sure the app works correctly, handles errors, and gives users a reliable experience.

The MVP will focus on testing the event tracker features first.

---

## 1. Testing Goals

The main goals of testing are to make sure:

- Users can add events
- Users can view events
- Users can delete events
- Users can mark events as completed
- Events are grouped correctly
- Reminder times are calculated correctly
- Data is saved correctly
- Errors are handled clearly

---

## 2. Types of Testing

## Unit Testing

Unit testing checks small pieces of code by themselves.

Examples:

- Test event sorting function
- Test reminder calculation function
- Test event grouping function
- Test priority scoring function

---

## Integration Testing

Integration testing checks if different parts of the app work together.

Examples:

- Event form adds data to the event list
- Event list updates after deleting an event
- Completed status updates correctly
- LocalStorage saves and loads event data

---

## Manual Testing

Manual testing means using the app like a real user.

Examples:

- Add an event
- Refresh the page
- Check if the event is still there
- Mark an event completed
- Delete an event
- Try submitting an empty form

---

## 3. MVP Test Cases

| Test ID | Feature | Test Scenario | Expected Result |
|---|---|---|---|
| TC-01 | Add Event | User submits valid event form | Event appears on dashboard |
| TC-02 | Add Event | User submits form without title | Error message appears |
| TC-03 | Add Event | User submits form without date | Error message appears |
| TC-04 | View Events | User has multiple events | Events display in list |
| TC-05 | Delete Event | User clicks delete button | Event is removed |
| TC-06 | Complete Event | User marks event completed | Status changes to completed |
| TC-07 | Group Events | Event date is today | Event appears under Today |
| TC-08 | Group Events | Event date is in the future | Event appears under Upcoming |
| TC-09 | Group Events | Event date is in the past | Event appears under Past |
| TC-10 | Reminder Logic | Event starts at 2:00 PM | 30-minute reminder is 1:30 PM |
| TC-11 | LocalStorage | User refreshes page | Saved events still appear |
| TC-12 | Time Validation | End time is before start time | Error message appears |

---

## 4. Future Backend Test Cases

These will be added after the backend is created.

| Test ID | Feature | Test Scenario | Expected Result |
|---|---|---|---|
| TC-13 | API | GET /api/events | Returns all user events |
| TC-14 | API | POST /api/events | Creates new event |
| TC-15 | API | PUT /api/events/:id | Updates event |
| TC-16 | API | DELETE /api/events/:id | Deletes event |
| TC-17 | Database | Create event | Event is saved in PostgreSQL |
| TC-18 | Auth | Login with valid credentials | User receives token |
| TC-19 | Auth | Login with invalid credentials | Error message appears |

---

## 5. Future AI Test Cases

These will be added when AI features are implemented.

| Test ID | Feature | Test Scenario | Expected Result |
|---|---|---|---|
| TC-20 | AI Prep | Generate checklist for interview | Checklist includes interview preparation items |
| TC-21 | AI Prep | Generate checklist for online meeting | Checklist includes online meeting preparation |
| TC-22 | AI Prep | Event has physical location | AI identifies event as in-person |
| TC-23 | AI Prep | Event has Zoom/Teams link | AI identifies event as online |

---

## 6. Error Handling Tests

The app should handle these errors:

- Missing event title
- Missing event date
- Invalid time range
- Empty event list
- Failed data save
- Failed API request later
- Failed AI request later

---

## 7. Testing Tools

For the MVP:

- Browser manual testing
- React Testing Library later
- Vitest later

For backend later:

- Postman
- Jest
- Supertest

---

## 8. Definition of Done

A feature is considered done when:

- It works as expected
- It handles errors
- It has clean code
- It is tested manually
- It does not break other features
- Documentation is updated if needed

---

## Summary

The first version of ReadyUp will be tested manually and with simple logic tests. Later versions will include frontend unit tests, backend API tests, database tests, and AI feature tests.