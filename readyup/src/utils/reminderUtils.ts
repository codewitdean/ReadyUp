export type Reminder = {
  type: "day_before" | "day_of" | "thirty_minutes_before";
  label: string;
  reminderTime: string;
};

export function calculateReminderTimes(date: string, startTime: string): Reminder[] {
  const eventDateTime = new Date(`${date}T${startTime}`);

  const dayBefore = new Date(eventDateTime);
  dayBefore.setDate(dayBefore.getDate() - 1);

  const dayOf = new Date(eventDateTime);
  dayOf.setHours(8, 0, 0, 0);

  const thirtyMinutesBefore = new Date(eventDateTime);
  thirtyMinutesBefore.setMinutes(thirtyMinutesBefore.getMinutes() - 30);

  return [
    {
      type: "day_before",
      label: "1 day before",
      reminderTime: dayBefore.toLocaleString(),
    },
    {
      type: "day_of",
      label: "Day of event",
      reminderTime: dayOf.toLocaleString(),
    },
    {
      type: "thirty_minutes_before",
      label: "30 minutes before",
      reminderTime: thirtyMinutesBefore.toLocaleString(),
    },
  ];
}