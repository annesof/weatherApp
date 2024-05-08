import { formatTimestampToDate } from "./date-utils";
import { describe, it, expect } from "@jest/globals";

describe("formatDate", () => {
  it("devrait formater correctement la date", () => {
    const timestamp = Date.UTC(2024, 4, 4, 21, 0, 0) / 1000;
    const formattedDate = formatTimestampToDate(timestamp);
    expect(formattedDate).toBe("samedi 4 mai 2024");
  });

  it("devrait formater correctement une autre date", () => {
    const timestamp = Date.UTC(2023, 11, 15, 15, 30, 0) / 1000;
    const formattedDate = formatTimestampToDate(timestamp);
    expect(formattedDate).toBe("vendredi 15 décembre 2023");
  });
});
