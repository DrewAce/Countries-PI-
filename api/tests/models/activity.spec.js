const { Activity, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Activity model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Activity.sync({ force: true }));
    describe("name", () => {
      it("should not create the Activity if the name is not submitted", (done) => {
        Activity.create({
          difficulty: 3,
          duration: 1,
          season: "Summer",
          countries: ["ECU", "COL", "PER", "BOL"],
        })
          .then(() => done(new Error("Ingrese todos los campos")))
          .catch(() => done());
      });

      it("should not create the activity if the season is not sent", (done) => {
        Activity.create({
          name: "Pelotear",
          difficulty: 5,
          duration: 2,
          countries: ["ECU"],
        })
          .then(() => done(new Error("Ingrese todos los campos")))
          .catch(() => done());
      });
    });

    describe("difficulty", () => {
      it("should not create the Activity if the difficulty is not submitted", (done) => {
        Activity.create({
          name: "Correr",
          difficulty: "",
          duration: 1,
          season: "Summer",
          countries: ["ECU", "COL", "PER", "BOL"],
        })
          .then(() => done(new Error("Ingrese todos los campos")))
          .catch(() => done());
      });
    });
    describe("duration", () => {
      it("should not create the Activity if the duration is not submitted", (done) => {
        Activity.create({
          name: "Correr",
          difficulty: 5,
          duration: "",
          season: "Summer",
          countries: ["ECU", "COL", "PER", "BOL"],
        })
          .then(() => done(new Error("Ingrese todos los campos")))
          .catch(() => done());
      });
    });

    describe("season", () => {
      it("you should not create the activity if the season is not a valid option", (done) => {
        Activity.create({
          name: "Nadar",
          difficulty: 2,
          duration: 1,
          season: "xxx",
          countries: ["ECU", "COL", "PER", "BOL"],
        }).catch(() => done());
      });
    });
    describe("countries", () => {
      it("should not create the Activity if the duration is not submitted", (done) => {
        Activity.create({
          name: "",
          difficulty: "",
          duration: 1,
          season: "Summer",
          countries: [],
        }).catch(() => done());
      });
    });
  });
});
