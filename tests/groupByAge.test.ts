import { describe, it, expect } from "vitest";
import { groupByAge } from "../src/groupByAge";

describe("group", () => {
  it("should group by age", () => {
    const people = [
      { name: "amanda", age: 18 },
      { name: "Pedro", age: 25 },
      { name: "Maria", age: 25 },
      { name: "Mauricio", age: 44 },
    ];

    const expectPeople = {
        "18": [
          {
            age: 18,
            name: "amanda",
          },
        ],
        "25": [
          {
            age: 25,
            name: "Pedro",
          },
          {
            age: 25,
            name: "Maria",
          },
        ],
        "44": [
          {
            age: 44,
            name: "Mauricio",
          },
        ],
      }

    expect(groupByAge(people)).toEqual(expectPeople);
  });
});
