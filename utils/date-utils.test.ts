import {
  formatTimestampToDateWithHours,
  formatTimestampToDate,
} from "./date-utils";
import { describe, it, expect } from "@jest/globals";

describe("format timestamp ", () => {
  it("au format samedi 5 mai à 22:00", () => {
    const timestamp = Date.UTC(2024, 4, 4, 21, 0, 0);
    const formattedDate = formatTimestampToDateWithHours(timestamp);
    expect(formattedDate).toBe("samedi 4 mai à 21:00");
  });

  it("au format samedi 5 mai", () => {
    const timestamp = Date.UTC(2023, 11, 15, 15, 30, 0);
    const formattedDate = formatTimestampToDate(timestamp);
    expect(formattedDate).toBe("vendredi 15 décembre");
  });
});
