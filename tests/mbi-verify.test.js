const supertest = require("supertest");

describe("Generate MBI API", () => {
  const app = require("../server");

  test("should return a 400 on not sending data", async () => {
    return supertest(app).post("/mbi/verify").send({}).expect(400);
  });

  test("should return a 400 on invlaid MBI (length)", async () => {
    return supertest(app)
      .post("/mbi/verify")
      .send({ mbi: "abc" })
      .expect(200)
      .then((response) => response.body)
      .then((body) => {
        expect(body.mbi).toEqual("abc");
        expect(body.isValid).toBeFalsy();
      });
  });

  test("should return a 200 on valid MBI", async () => {
    return supertest(app)
      .post("/mbi/verify")
      .send({ mbi: "4FJ1X76TT95" })
      .expect(200)
      .then((response) => response.body)
      .then((body) => {
        expect(body.mbi).toEqual("4FJ1X76TT95");
        expect(body.isValid).toBeTruthy();
      });
  });
});
