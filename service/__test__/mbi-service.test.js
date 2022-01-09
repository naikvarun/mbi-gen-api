describe("MBI Service", () => {
  const { verifyMBI, generateMBI } = require("../mbi-service");
  describe("Verify MBI", () => {
    test("should return true on valid MBI", () => {
      expect(verifyMBI("1EG4TE5MK73")).toBeTruthy();
    });
    test("should return false on length of MBI", () => {
      expect(verifyMBI("1EG4TE5M")).toBeFalsy();
    });

    test("should return false on invalid MBI with first char", () => {
      expect(verifyMBI("0EG4TE5MK03")).toBeFalsy();
    });

    test("should return false on invalid MBI with number in alpha position", () => {
      expect(verifyMBI("1EG47E5MK03")).toBeFalsy();
    });
  });

  describe("Generate MBI", () => {
    const testRandom = () => 0;
    test("should generate correct mbi", () => {
      const mbi = generateMBI(testRandom);
      expect(mbi.length).toEqual(11);
      expect(mbi).toEqual("1AA0AA0AA00");
    });
  });
});
