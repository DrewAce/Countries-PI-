/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Activity, conn } = require("../../src/db.js");

const agent = session(app);
const activity = {
  name: "Escalada",
  difficulty: 5,
  duration: 4,
  season: "Summer",
  countries: ["POL"],
};

describe("Activity routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

  beforeEach(() =>
    Activity.sync({ force: true }).then(() => Activity.create(activity))
  );

  describe("POST /activity", () => {
    it("should return status 404 and corresponding text if any of the mandatory parameters is not send", () =>
      agent.post("/activities").expect(404));
  });

  it("should return status 200 if activity was created successfully", () =>
    agent.post("/activities").send(activity).expect(200));

  describe("GET /activity", () => {
    it("should return status 200", () => agent.get("/activities").expect(200));
    it("expects content to be of type JSON", () => {
      agent.get("/countries").expect("Content-Type", /json/);
    });
  });
});
