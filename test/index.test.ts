import { expect, it, describe } from "vitest";
import { defineDuration, durationToMilliseconds } from "../src/index";

describe("duration", () => {
  it("text transformation", () => {
    expect(defineDuration("1s")).toEqual(
      expect.objectContaining({ seconds: 1 }),
    );
    expect(defineDuration("3 months")).toEqual(
      expect.objectContaining(
        defineDuration({
          months: 3,
        }),
      ),
    );
    expect(defineDuration("1 year")).toEqual(
      expect.objectContaining(
        defineDuration({
          years: 1,
        }),
      ),
    );
    expect(defineDuration("1 year 3 months")).toEqual(
      expect.objectContaining(
        defineDuration({
          years: 1,
          months: 3,
        }),
      ),
    );
  });

  it("durationToMilliseconds", () => {
    expect(durationToMilliseconds(defineDuration({ seconds: 1 }))).toEqual(
      1000,
    );
    expect(durationToMilliseconds(defineDuration({ minutes: 1 }))).toEqual(
      60 * 1000,
    );
    expect(durationToMilliseconds(defineDuration({ hours: 1 }))).toEqual(
      60 * 60 * 1000,
    );
    expect(durationToMilliseconds(defineDuration({ days: 1 }))).toEqual(
      24 * 60 * 60 * 1000,
    );
    expect(durationToMilliseconds(defineDuration({ weeks: 1 }))).toEqual(
      7 * 24 * 60 * 60 * 1000,
    );
    expect(durationToMilliseconds(defineDuration({ months: 1 }))).toEqual(
      30 * 24 * 60 * 60 * 1000,
    );
    expect(durationToMilliseconds(defineDuration({ years: 1 }))).toEqual(
      365 * 24 * 60 * 60 * 1000,
    );
  });
});
