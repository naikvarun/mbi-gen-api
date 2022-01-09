const alpha = "ACDEFGHJKMNPQRTUVWXY";
const nonZeroNums = "123456789";
const numeric = "0" + nonZeroNums;
const alphaNumeric = alpha + nonZeroNums;
/**
 * https://www.cms.gov/medicare/new-medicare-card/understanding-the-mbi.pdf
 * 11 Char long
 * ---------------------------------
 *  01 02 03 04 05 06 07 08 09 10 11
 *  C  A  AN N  A  AN N  A  A  N  N
 * ---------------------------------
 * C - Numeric 1-9
 * A - Alpabetic A-Z except {S, L, O, I B, Z}
 * N - Numeric 0-9
 */
const mbiFormat = [
  nonZeroNums,
  alpha,
  alphaNumeric,
  numeric,
  alpha,
  alphaNumeric,
  numeric,
  alpha,
  alpha,
  numeric,
  numeric,
];

const MBI_LENGHT = mbiFormat.length;
/**
 * Generate random char out of set
 * @param {string} set
 * @param {() => number} random pseudorandom number generator
 * @returns {string} single char out of `set`
 */
const generateRandomFromSet = (set, random) => {
  random = random || Math.random;
  return set[Math.floor(random() * set.length)];
};
/**
 * Generate a Medicare Beneficiary Identifier
 * @param {() => number} random pseudorandom nuber generator
 * @returns {string} MBI
 */
const generateMBI = (random) =>
  mbiFormat.map((set) => generateRandomFromSet(set, random)).join("");

/**
 * Verify if mbi is valid
 * @param {string} mbi
 */
const verifyMBI = (mbi) => {
  if (mbi.length !== MBI_LENGHT) {
    return false;
  }
  for (let i = 0; i < MBI_LENGHT; i++) {
    if (!mbiFormat[i].includes(mbi[i])) {
      return false;
    }
  }
  return true;
};

module.exports = {
  generateMBI,
  verifyMBI,
};
