// 7 kyu - Sum of Cubes  [ ID: 59a8570b570190d313000037  (sum-of-cubes) ]
// URL: https://www.codewars.com/kata/59a8570b570190d313000037
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const sumCubes = (n) => [...Array(n + 1).keys()].reduce((a, c) => a + (c ** 3))
