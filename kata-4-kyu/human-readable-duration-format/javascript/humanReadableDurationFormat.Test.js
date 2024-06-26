//+ ====================================================================================================================
//+
//+ 4 kyu - Human readable duration format  [ ID: 52742f58faf5485cae000b9a ] (human-readable-duration-format)
//+ URL: https://www.codewars.com/kata/52742f58faf5485cae000b9a
//+ Category: ALGORITHMS  |  Tags: STRINGS | DATE TIME | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { formatDuration } = require("./humanReadableDurationFormat")

it("basic tests", () => {
  assert.strictEqual(formatDuration(0), "now")

  assert.strictEqual(formatDuration(1), "1 second")
  assert.strictEqual(formatDuration(62), "1 minute and 2 seconds")
  assert.strictEqual(formatDuration(120), "2 minutes")
  assert.strictEqual(formatDuration(3600), "1 hour")
  assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds")

  assert.strictEqual(formatDuration(15731080), "182 days, 1 hour, 44 minutes and 40 seconds")
  assert.strictEqual(formatDuration(132030240), "4 years, 68 days, 3 hours and 4 minutes")
  assert.strictEqual(formatDuration(205851834), "6 years, 192 days, 13 hours, 3 minutes and 54 seconds")
  assert.strictEqual(formatDuration(253374061), "8 years, 12 days, 13 hours, 41 minutes and 1 second")
  assert.strictEqual(formatDuration(242062374), "7 years, 246 days, 15 hours, 32 minutes and 54 seconds")
  assert.strictEqual(formatDuration(101956166), "3 years, 85 days, 1 hour, 9 minutes and 26 seconds")
  assert.strictEqual(formatDuration(33243586), "1 year, 19 days, 18 hours, 19 minutes and 46 seconds")
})

it("random tests", () => {
  function sol(seconds) {
    if (seconds == 0) return "now"
    function formatComponents(x) {
      let firsts = x.slice(0, -1).join(", ")
      return (firsts && firsts + " and ") + x[x.length - 1]
    }

    let components = ["year", "day", "hour", "minute", "second"]
    let times = [31536000, 86400, 3600, 60, 1]

    return formatComponents(
      times
        .map((secondsByUnit, i) => {
          let value = (seconds / secondsByUnit) | 0
          seconds %= secondsByUnit
          return value == 0 ? "" : value + " " + components[i] + (value > 1 ? "s" : "")
        })
        .filter(Boolean)
    )
  }
  for (let i = 0; i < 100; i++) {
    const n = Math.floor(Math.random() * 10000000)
    assert.strictEqual(formatDuration(n), sol(n))
  }
})
