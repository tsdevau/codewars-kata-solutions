// 5 kyu - Caesar Cipher Helper  [ ID: 526d42b6526963598d0004db  (caesar-cipher-helper) ]
// URL: https://www.codewars.com/kata/526d42b6526963598d0004db
// Category: undefined  |  Tags: CIPHERS | OBJECT-ORIENTED PROGRAMMING | STRINGS | ALGORITHMS
// *****************************************************************************
class CaesarCipher {
    constructor(n) {
      this.n = n
    }
    encode(s) {
      const x = (v) => ((((v.charCodeAt() & 31) + this.n) % 26) + 64)
      return s.toUpperCase().replace(/[A-Z]/g, (v) => String.fromCharCode(x(v)))
    }
    decode(s) {
      const x = (v) => ((((v.charCodeAt() & 31) + 26 - this.n) % 26) + 64)
      return s.replace(/[A-Z]/g, (v) => String.fromCharCode(x(v)))
    }
  }
// *****************************************************************************
// *****************************************************************************
class CaesarCipher {
    constructor(n) {
      this.n = n
    }
    encode(s) {
      const x = (v) => (((v.charCodeAt() & 31) + this.n) % 26) + 64
      return s.toUpperCase().replace(/[A-Z]/g, (v) => String.fromCharCode(x(v)))
    }
    decode(s) {
      const x = (v) => (((v.charCodeAt() & 31) - this.n) % 26)
      return s.replace(/[A-Z]/g, (v) => String.fromCharCode(x(v) + (x(v) < 1 ? 90 : 64)))
    }
  }

