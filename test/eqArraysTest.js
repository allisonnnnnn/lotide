const eqArrays = require("../eqArray");
const assertEqual = require("../assertEqual");
assertEqual(eqArrays([1, 2, 3, [4, 5]], [1, 2, 3, [4, 6]]), true);
