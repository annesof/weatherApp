import {
  formatTimestampToDateWithHours,
  formatTimestampToDate,
  formatTimestampToHour,
} from "./date-utils";
import { describe, it, expect } from "@jest/globals";

describe("format timestamp ", () => {
  it("doit formater le timestamp au format 'jour mois à heure'", () => {
    const timestamp = Date.UTC(2024, 4, 4, 21, 0, 0);
    const formattedDate = formatTimestampToDateWithHours(timestamp);
    expect(formattedDate).toBe("samedi 4 mai à 21:00");
  });

  it("doit formater le timestamp au format 'jour mois'", () => {
    const timestamp = Date.UTC(2023, 11, 15, 15, 30, 0);
    const formattedDate = formatTimestampToDate(timestamp);
    expect(formattedDate).toBe("vendredi 15 décembre");
  });

  it("doit formater le timestamp au format 'heure:minute'", () => {
    const timestamp = Date.UTC(2023, 11, 15, 15, 30, 0);
    const formattedDate = formatTimestampToHour(timestamp);
    expect(formattedDate).toBe("15:30");
  });
});
