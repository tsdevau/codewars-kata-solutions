# 7 kyu - Highest and Lowest

##### **ID**: [554b4ac871d6813a03000035](https://www.codewars.com/kata/554b4ac871d6813a03000035) | **Slug**: [highest-and-lowest](https://www.codewars.com/kata/554b4ac871d6813a03000035) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-05-07 ***by*** [Deantwo](https://www.codewars.com/users/Deantwo) | **Approved**: 2015-05-20 ***by*** [dnolan](https://www.codewars.com/users/dnolan)

##### **Languages Available**: csharp, javascript, python, ruby, java, coffeescript, haskell, rust, typescript, fsharp, go, kotlin, php, crystal, cpp, elixir, julia, r, clojure, c, cobol, scala, d, lua, factor

##### **My Completed Languages**: javascript, typescript ***as at*** 2022-10-15 | **Originally completed**: 2021-11-07

---

## Kata Description


In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.



### Examples



``` text

Input: "1 2 3 4 5"   =>  Output: "5 1"

Input: "1 2 -3 4 5"  =>  Output: "5 -3"

Input: "1 9 3 4 -5"  =>  Output: "9 -5"

```

```php

highAndLow("1 2 3 4 5");  // return "5 1"

highAndLow("1 2 -3 4 5"); // return "5 -3"

highAndLow("1 9 3 4 -5"); // return "9 -5"

```

```csharp

Kata.HighAndLow("1 2 3 4 5");  // return "5 1"

Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"

Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"

```

```fsharp

highAndLow "1 2 3 4 5"  // return "5 1"

highAndLow "1 2 -3 4 5" // return "5 -3"

highAndLow "1 9 3 4 -5" // return "9 -5"

```

```javascript

highAndLow("1 2 3 4 5");  // return "5 1"

highAndLow("1 2 -3 4 5"); // return "5 -3"

highAndLow("1 9 3 4 -5"); // return "9 -5"

```

```d

highAndLow("1 2 3 4 5");  // return "5 1"

highAndLow("1 2 -3 4 5"); // return "5 -3"

highAndLow("1 9 3 4 -5"); // return "9 -5"

```

```c

high_and_low("1 2 3 4 5")  // return "5 1"

high_and_low("1 2 -3 4 5") // return "5 -3"

high_and_low("1 9 3 4 -5") // return "9 -5"

```

```cpp

highAndLow("1 2 3 4 5");  // return "5 1"

highAndLow("1 2 -3 4 5"); // return "5 -3"

highAndLow("1 9 3 4 -5"); // return "9 -5"

```

```typescript

highAndLow("1 2 3 4 5");  // return "5 1"

highAndLow("1 2 -3 4 5"); // return "5 -3"

highAndLow("1 9 3 4 -5"); // return "9 -5"

```

```coffeescript

highAndLow("1 2 3 4 5")  # return "5 1"

highAndLow("1 2 -3 4 5") # return "5 -3"

highAndLow("1 9 3 4 -5") # return "9 -5"

```

```python

high_and_low("1 2 3 4 5")  # return "5 1"

high_and_low("1 2 -3 4 5") # return "5 -3"

high_and_low("1 9 3 4 -5") # return "9 -5"

```

```ruby

high_and_low("1 2 3 4 5")  # return "5 1"

high_and_low("1 2 -3 4 5") # return "5 -3"

high_and_low("1 9 3 4 -5") # return "9 -5"

```

```crystal

high_and_low("1 2 3 4 5")  # return "5 1"

high_and_low("1 2 -3 4 5") # return "5 -3"

high_and_low("1 9 3 4 -5") # return "9 -5"

```

```c

high_and_low("1 2 3 4 5", result)  // result "5 1"

high_and_low("1 2 -3 4 5", result) // result "5 -3"

high_and_low("1 9 3 4 -5", result) // result "9 -5"

```

```java

highAndLow("1 2 3 4 5")  // return "5 1"

highAndLow("1 2 -3 4 5") // return "5 -3"

highAndLow("1 9 3 4 -5") // return "9 -5"

```

```haskell

highAndLow "1 2 3 4 5")  # return "5 1"

highAndLow "1 2 -3 4 5") # return "5 -3"

highAndLow "1 9 3 4 -5") # return "9 -5"

```

```go

HighAndLow("1 2 3 4 5")  // return "5 1"

HighAndLow("1 2 -3 4 5") // return "5 -3"

HighAndLow("1 9 3 4 -5") // return "9 -5"

```

```kotlin

highAndLow("1 2 3 4 5")  // return "5 1"

highAndLow("1 2 -3 4 5") // return "5 -3"

highAndLow("1 9 3 4 -5") // return "9 -5"

```

```elixir

Kata.high_and_low("1 2 3 4 5")  # return "5 1"

Kata.high_and_low("1 2 -3 4 5") # return "5 -3"

Kata.high_and_low("1 9 3 4 -5") # return "9 -5"

```

```clojure

(high-and-low "1 2 3 4 5")  ; return "5 1"

(high-and-low "1 2 -3 4 5") ; return "5 -3"

(high-and-low "1 9 3 4 -5") ; return "9 -5"

```

```julia

highandlow("1 2 3 4 5")  # return "5 1"

highandlow("1 2 -3 4 5") # return "5 -3"

highandlow("1 9 3 4 -5") # return "9 -5"

```

```rust

high_and_low("1 2 3 4 5")  // return "5 1"

high_and_low("1 2 -3 4 5") // return "5 -3"

high_and_low("1 9 3 4 -5") // return "9 -5"

```

```cobol

        HighAndLow("1 2 3 4 5")

      * RESULT = "5 1"

        HighAndLow("1 2 -3 4 5")

      * RESULT = "5 -3"

        HighAndLow("1 9 3 4 -5")

      * RESULT = "9 -5"

```

```scala

Sol.high_and_low("1 2 3 4 5")  // return "5 1"

Sol.high_and_low("1 2 -3 4 5") // return "5 -3"

Sol.high_and_low("1 9 3 4 -5") // return "9 -5"

```

```lua

high_and_low "1 2 3 4 5"   --> return "5 1"

high_and_low "1 2 -3 4 5"  --> return "5 -3"

high_and_low "1 9 3 4 -5"  --> return "9 -5"

```



### Notes



- All numbers are valid ```Int32```, no *need* to validate them.

- There will always be at least one number in the input string.

- Output string must be two numbers separated by a single space, and highest number is first.



---


🏷 `FUNDAMENTALS | STRINGS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/554b4ac871d6813a03000035)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
