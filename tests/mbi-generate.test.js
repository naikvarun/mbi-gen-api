const supertest = require("supertest");

describe("Generate MBI API", () => {
  const app = require("../server");
  test("should return a 200 on /mbi/generate", async () => {
    return supertest(app).get("/mbi/generate").expect(200);
  });
  test("should return a mbi string field on response", async () => {
    return supertest(app)
      .get("/mbi/generate")
      .expect(200)
      .then((response) => response.body)
      .then((data) => {
        const { mbi } = data;
        expect(mbi).toBeDefined();
        expect(mbi).toEqual(expect.any(String));
      });
  });
});
