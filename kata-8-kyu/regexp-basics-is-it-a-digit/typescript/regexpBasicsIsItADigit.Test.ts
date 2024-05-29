//+ ====================================================================================================================
//+
//+ 8 kyu - Regexp Basics - is it a digit?  [ ID: 567bf4f7ee34510f69000032 ] (regexp-basics-is-it-a-digit)
//+ URL: https://www.codewars.com/kata/567bf4f7ee34510f69000032
//+ Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================


import { assert } from "vitest"
import String from "./regexpBasicsIsItADigit"
console.log(String.prototype.digit)

describe("hex number", () => {
  it("Basic tests", () => {
    assert.strictEqual("".digit(), false)
    assert.strictEqual("7".digit(), true)
    assert.strictEqual(" ".digit(), false)
    assert.strictEqual("a".digit(), false)
    assert.strictEqual("a5".digit(), false)
    assert.strictEqual("14".digit(), false)
  })

  it("More tests", () => {
    assert.strictEqual(false, " ".digit())
    assert.strictEqual(false, "!".digit())
    assert.strictEqual(false, '"'.digit())
    assert.strictEqual(false, "#".digit())
    assert.strictEqual(false, "$".digit())
    assert.strictEqual(false, "%".digit())
    assert.strictEqual(false, "&".digit())
    assert.strictEqual(false, "'".digit())
    assert.strictEqual(false, "(".digit())
    assert.strictEqual(false, ")".digit())
    assert.strictEqual(false, "*".digit())
    assert.strictEqual(false, "+".digit())
    assert.strictEqual(false, ",".digit())
    assert.strictEqual(false, "-".digit())
    assert.strictEqual(false, ".".digit())
    assert.strictEqual(false, "/".digit())
    assert.strictEqual(true, "0".digit())
    assert.strictEqual(true, "1".digit())
    assert.strictEqual(true, "2".digit())
    assert.strictEqual(true, "3".digit())
    assert.strictEqual(true, "4".digit())
    assert.strictEqual(true, "5".digit())
    assert.strictEqual(true, "6".digit())
    assert.strictEqual(true, "7".digit())
    assert.strictEqual(true, "8".digit())
    assert.strictEqual(true, "9".digit())
    assert.strictEqual(false, ":".digit())
    assert.strictEqual(false, ";".digit())
    assert.strictEqual(false, "<".digit())
    assert.strictEqual(false, "=".digit())
    assert.strictEqual(false, ">".digit())
    assert.strictEqual(false, "?".digit())
    assert.strictEqual(false, "@".digit())
    assert.strictEqual(false, "A".digit())
    assert.strictEqual(false, "B".digit())
    assert.strictEqual(false, "C".digit())
    assert.strictEqual(false, "D".digit())
    assert.strictEqual(false, "E".digit())
    assert.strictEqual(false, "F".digit())
    assert.strictEqual(false, "G".digit())
    assert.strictEqual(false, "H".digit())
    assert.strictEqual(false, "I".digit())
    assert.strictEqual(false, "J".digit())
    assert.strictEqual(false, "K".digit())
    assert.strictEqual(false, "L".digit())
    assert.strictEqual(false, "M".digit())
    assert.strictEqual(false, "N".digit())
    assert.strictEqual(false, "O".digit())
    assert.strictEqual(false, "P".digit())
    assert.strictEqual(false, "Q".digit())
    assert.strictEqual(false, "R".digit())
    assert.strictEqual(false, "S".digit())
    assert.strictEqual(false, "T".digit())
    assert.strictEqual(false, "U".digit())
    assert.strictEqual(false, "V".digit())
    assert.strictEqual(false, "W".digit())
    assert.strictEqual(false, "X".digit())
    assert.strictEqual(false, "Y".digit())
    assert.strictEqual(false, "Z".digit())
    assert.strictEqual(false, "[".digit())
    assert.strictEqual(false, "\\".digit())
    assert.strictEqual(false, "]".digit())
    assert.strictEqual(false, "^".digit())
    assert.strictEqual(false, "_".digit())
    assert.strictEqual(false, "`".digit())
    assert.strictEqual(false, "a".digit())
    assert.strictEqual(false, "b".digit())
    assert.strictEqual(false, "c".digit())
    assert.strictEqual(false, "d".digit())
    assert.strictEqual(false, "e".digit())
    assert.strictEqual(false, "f".digit())
    assert.strictEqual(false, "g".digit())
    assert.strictEqual(false, "h".digit())
    assert.strictEqual(false, "i".digit())
    assert.strictEqual(false, "j".digit())
    assert.strictEqual(false, "k".digit())
    assert.strictEqual(false, "l".digit())
    assert.strictEqual(false, "m".digit())
    assert.strictEqual(false, "n".digit())
    assert.strictEqual(false, "o".digit())
    assert.strictEqual(false, "p".digit())
    assert.strictEqual(false, "q".digit())
    assert.strictEqual(false, "r".digit())
    assert.strictEqual(false, "s".digit())
    assert.strictEqual(false, "t".digit())
    assert.strictEqual(false, "u".digit())
    assert.strictEqual(false, "v".digit())
    assert.strictEqual(false, "w".digit())
    assert.strictEqual(false, "x".digit())
    assert.strictEqual(false, "y".digit())
    assert.strictEqual(false, "z".digit())
    assert.strictEqual(false, "{".digit())
    assert.strictEqual(false, "|".digit())
    assert.strictEqual(false, "}".digit())
    assert.strictEqual(false, "~".digit())

    assert.strictEqual(false, "1\n0".digit())
    assert.strictEqual(false, "1\n".digit())
    assert.strictEqual(false, "1 ".digit())
    assert.strictEqual(false, " 1".digit())
  })
})


