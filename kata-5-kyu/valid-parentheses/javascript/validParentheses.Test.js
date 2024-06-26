//+ ====================================================================================================================
//+
//+ 5 kyu - Valid Parentheses  [ ID: 52774a314c2333f0a7000688 ] (valid-parentheses)
//+ URL: https://www.codewars.com/kata/52774a314c2333f0a7000688
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { validParentheses } = require("./validParentheses")

describe("Solution test", () => {
  const act = (parens, expected) => {
    const input = `"${parens}"`
    it(`parens: ${input} expected: ${expected}`, () => {
      const actual = validParentheses(parens)
      assert.strictEqual(actual, expected)
    })
  }
  describe("Fixed tests", () => {
    act("()()((()", false)
    act("()", true)
    act("()()", true)
    act("(())", true)
    act(")", false)
    act("", true)
    act("())", false)
    act("((((()))))", true)
    act("()))", false)
    act("()()()())", false)
    act("(()()()())(())", true)
    act("((((((((", false)
    act("(())((()((()))))", true)
    act("())(", false)
    act(")()()()(", false)
    act("(()()))(", false)
    act(")()(", false)
    act("())(()", false)
    act("())(()", false)
  })
  describe("Random tests", () => {
    function randInt(a, b) {
      return (Math.random() * (b - a + 1) + a) | 0
    }
    function validParenthesesReference(string) {
      let tokenizer = /[()]/g, // ignores characters in between; parentheses are
        count = 0, // pretty useless if they're not grouping *something*
        token
      while (((token = tokenizer.exec(string)), token !== null)) {
        if (token == "(") {
          count++
        } else if (token == ")") {
          count--
          if (count < 0) {
            return false
          }
        }
      }
      return count == 0
    }
    function generator() {
      const len = randInt(1, 20) * 2
      let brackets = ""
      let rb = 0
      for (let i = 0; i < len; i++)
        if (randInt(0, rb) == 0) {
          brackets += "("
          rb += 5
        } else {
          brackets += ")"
          rb -= 5
        }
      return [brackets]
    }
    function randomAssertSimilar(generator, userSolution, referenceSolution, tests) {
      tests = tests || 100
      let user, reference, values
      while (tests-- > 0) {
        values = generator()
        reference = referenceSolution(values[0])
        it(`parens: "${values}" expected: ${reference}`, () => {
          let input = values[0]
          user = userSolution(input)
          assert.strictEqual(user, reference)
        })
      }
    }
    randomAssertSimilar(generator, validParentheses, validParenthesesReference)
  })
})
