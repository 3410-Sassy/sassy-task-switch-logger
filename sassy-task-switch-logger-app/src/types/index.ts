export interface Category {
  id: string;
  name: string;
  order: number;
}

export interface Task {
  id: string;
  name: string;
  categoryId: string;
  colorId: string;
  order: number;
}

export interface TrackedTime {
  taskId: string;
  startTime: Date;
  endTime?: Date;
}

export interface GoogleCalendarColor {
  background: string;
  foreground: string;
}

export interface GoogleCalendarColors {
  [key: string]: GoogleCalendarColor;
}