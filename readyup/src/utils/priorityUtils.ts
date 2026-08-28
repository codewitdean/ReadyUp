import type { ReadyUpEvent } from "../types/Event";

export function calculateUrgencyScore(event: ReadyUpEvent): number {
  let score = 0;

  // 1. Priority score
  if (event.priority === "high") {
    score += 40;
  } else if (event.priority === "medium") {
    score += 25;
  } else {
    score += 10;
  }

  // 2. Date closeness score
  const now = new Date();
  const eventDateTime = new Date(`${event.date}T${event.startTime}`);

  const millisecondsUntilEvent = eventDateTime.getTime() - now.getTime();
  const daysUntilEvent = millisecondsUntilEvent / (1000 * 60 * 60 * 24);

  if (daysUntilEvent < 0) {
    score += 0;
  } else if (daysUntilEvent <= 1) {
    score += 40;
  } else if (daysUntilEvent <= 3) {
    score += 30;
  } else if (daysUntilEvent <= 7) {
    score += 20;
  } else if (daysUntilEvent <= 14) {
    score += 10;
  } else {
    score += 5;
  }

  // 3. Category score
  if (event.category === "interview") {
    score += 25;
  } else if (event.category === "work") {
    score += 20;
  } else if (event.category === "school") {
    score += 15;
  } else {
    score += 10;
  }

  return score;
}

export function getUrgencyLabel(score: number): "Low" | "Medium" | "High" | "Critical" {
  if (score >= 90) {
    return "Critical";
  }

  if (score >= 70) {
    return "High";
  }

  if (score >= 45) {
    return "Medium";
  }

  return "Low";
}