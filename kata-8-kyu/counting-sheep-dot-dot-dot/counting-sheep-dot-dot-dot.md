# 8 kyu - Counting sheep...

##### **ID**: [54edbc7200b811e956000556](https://www.codewars.com/kata/54edbc7200b811e956000556) | **Slug**: [counting-sheep-dot-dot-dot](https://www.codewars.com/kata/54edbc7200b811e956000556) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2015-02-25 ***by*** [tfKamran](https://www.codewars.com/users/tfKamran) | **Approved**: 2015-03-10 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, java, ruby, python, csharp, haskell, elixir, cpp, rust, typescript, scala, c, crystal, racket, julia, go, coffeescript, factor, bf

##### **My Completed Languages**: javascript, python, typescript ***as at*** 2022-10-15 | **Originally completed**: 2021-12-01

---

## Kata Description


Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).



For example,



```javascript

[true,  true,  true,  false,

  true,  true,  true,  true ,

  true,  false, true,  false,

  true,  false, false, true ,

  true,  true,  true,  true ,

  false, false, true,  true]

```

```crystal

[true,  true,  true,  false,

  true,  true,  true,  true ,

  true,  false, true,  false,

  true,  false, false, true ,

  true,  true,  true,  true ,

  false, false, true,  true]

```

```python

[True,  True,  True,  False,

  True,  True,  True,  True ,

  True,  False, True,  False,

  True,  False, False, True ,

  True,  True,  True,  True ,

  False, False, True,  True]

```

```csharp

[true,  true,  true,  false,

  true,  true,  true,  true ,

  true,  false, true,  false,

  true,  false, false, true ,

  true,  true,  true,  true ,

  false, false, true,  true]

```

```c

{ true,  true,  true,  false,

  true,  true,  true,  true,

  true,  false, true,  false,

  true,  false, false, true,

  true,  true,  true,  true,

  false, false, true,  true }

```

```cpp

[true,  true,  true,  false,

  true,  true,  true,  true ,

  true,  false, true,  false,

  true,  false, false, true ,

  true,  true,  true,  true ,

  false, false, true,  true]

```

```haskell

[True,  True,  True,  False,

  True,  True,  True,  True ,

  True,  False, True,  False,

  True,  False, False, True ,

  True,  True,  True,  True ,

  False, False, True,  True]

```

```elixir

[true,  true,  true,  false,

  true,  true,  true,  true ,

  true,  false, true,  false,

  true,  false, false, true ,

  true,  true,  true,  true ,

  false, false, true,  true]

```

```rust

&[true,  true,  true,  false,

  true,  true,  true,  true ,

  true,  false, true,  false,

  true,  false, false, true ,

  true,  true,  true,  true ,

  false, false, true,  true]

```

```scala

Array(

  true,  true,  true,  false,

  true,  true,  true,  true,

  true,  false, true,  false,

  true,  false, false, true,

  true,  true,  true,  true,

  false, false, true,  true

)

```

```racket

;for racket in this kata, 

;only values that are exactly #t count as sheep. 

;any other value is not a sheep.

(count-sheeps '(#t #t #t #f #t #t 1

                #t #f #f #f #f #f #f

                #t #f #t #t #t #t #t

                #t #t #f #t #t #t 5))

```

```factor

{ t t t f

  t t t t

  t f t f

  t f f t

  t t t t

  f f t t }

```

```bf

"tttftttttftftfftttttfftt"

```





The correct answer would be `17`.



Hint: Don't forget to check for bad values like `null`/`undefined`



```if:bf

In BF, true is represented as the letter 't' (ASCII 116), while false is represented as the letter 'f' (ASCII 102) 



Input streams will be terminated with a null character

```



---


🏷 `ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/54edbc7200b811e956000556)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
