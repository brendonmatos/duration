import defu from "defu";

export type Duration = {
  milliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  weeks: number;
  months: number;
  years: number;
};

export type DurationConfig = Partial<Duration> | string;

export function defineDuration(config: DurationConfig) {
  if (typeof config === "string") {
    return defineDuration(parseStringDuration(config));
  }

  return defu(config, {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    weeks: 0,
    months: 0,
    years: 0,
  }) as Duration;
}

export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const WEEK = DAY * 7;
export const MONTH = DAY * 30;
export const YEAR = DAY * 365;

export function parseStringDuration(duration: string) {
  const numeralFromText = /(\d+)([ A-Za-z]+)/g;
  const matches = duration.matchAll(numeralFromText);
  const translator: { [key: string]: keyof Duration } = {
    ms: "milliseconds",
    millisecond: "milliseconds",
    s: "seconds",
    second: "seconds",
    m: "minutes",
    minute: "minutes",
    h: "hours",
    hour: "hours",
    d: "days",
    day: "days",
    w: "weeks",
    week: "weeks",
    mo: "months",
    month: "months",
    M: "months",
    y: "years",
    year: "years",
  };

  const config: Partial<Duration> = {};

  for (const match of matches) {
    const [, numeral, text] = match;
    const textTrimmed = text.trim();
    const numeralTrimmed = numeral.trim();
    const key = (translator[textTrimmed] || textTrimmed) as keyof Duration;
    config[key] = Number(numeralTrimmed);
  }

  return config;
}

export function durationToMilliseconds(duration: Duration) {
  return (
    duration.seconds * SECOND +
    duration.minutes * MINUTE +
    duration.hours * HOUR +
    duration.days * DAY +
    duration.weeks * WEEK +
    duration.months * MONTH +
    duration.years * YEAR
  );
}

export function durationToSeconds(duration: Duration) {
  return durationToMilliseconds(duration) / SECOND;
}

export function addToDate(date: Date, duration: Duration) {
  return new Date(date.getTime() + durationToMilliseconds(duration));
}

export function subtractFromDate(date: Date, duration: Duration) {
  return new Date(date.getTime() - durationToMilliseconds(duration));
}

export function millisecondsToDuration(milliseconds: number) {
  const years = milliseconds % YEAR;
  const months = years % MONTH;
  const weeks = months % WEEK;
  const days = weeks % DAY;
  const hours = days % HOUR;
  const minutes = hours % MINUTE;
  const seconds = minutes % SECOND;
  const millisecondsLeft = seconds % SECOND;

  return defineDuration({
    milliseconds: millisecondsLeft,
    seconds,
    minutes,
    hours,
    days,
    weeks,
    months,
    years,
  });
}

export function durationBetweenDates(date1: Date, date2: Date) {
  const diff = date1.getTime() - date2.getTime();
  return millisecondsToDuration(diff);
}
