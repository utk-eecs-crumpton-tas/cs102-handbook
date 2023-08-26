# BITSET

Work with bits and bitsets using bitwise operators.

## The Lab

In this lab, you'll develop a program that manipulates **bits** of integers belonging to a `vector`. You should already know what bits are, vaguely at least, but I will cover them in depth in this write-up to help you with the lab. Skip [to this section](#the-lab) if you know all about bits/bitwise stuff or just don't want to read about it.

## Background

You can skip this section if you think you know what you're doing in terms of bits. But I HIGHLY recommend reading through it all thoroughly -- especially if you'll be taking 230 next year. Though you have already learned about these concepts in class. Skip to the [Bitwise Operators](#bitwise-operators) section and/or [Examples](#examples) for a briefer explanation.

### Bits & Bytes

Every data type in your computer is stored in memory somehow. Where they're stored is not exactly important right now, but _how they're stored_ is. Each data type has a specific amount of **bytes** that it takes up. A single **byte** is a unit comprised of 8 **bits**. Similar to how a meter is 100 centimeters, a byte is 8 bits. Bits are the lowest level unit in computing and can be either `0` or `1`. A `char` for example is 1 byte. That means it is 8 bits. So how do we represent a single char using bits? Well, binary (the "language" that uses bits) is in **base-2**. The decimal system for example is in **base-10**. I'm not going to get too much into it, but just pay attention to this next part.

```txt
0000 0000
```

The sequence of bits above is 8 bits in total (usually we'll separate bits by every fourth bit just to make it cleaner) which means in total it makes up some form of data comprising one byte. A `char` is one byte, so it could be represented by the above bits. If we chose to represent a `char` using the bits above, it would be equal to the following `\0`. This is known as the null terminating character. For `char`s, there is a table that maps a specific decimal value to its "letter" representation. This is known as an [ASCII table](https://www.asciitable.com/). If all bits in a byte are 0, then its decimal equivalent is just 0. So looking at the ASCII table I just linked, we can see what 0 maps to and then we will understand why the `char` is `\0`. This is why a `char` is one byte. The range of a typical ASCII table is `[0, 127]` inclusive. If all 8 bits are **set** (more on this later), then the bits would look like

```txt
1111 1111
```

In this case, the decimal equivalent of those bits would be 255. A `char` can only hold one byte of data, so the highest value it can contain is 255, right? Well actually, most ASCII characters are **unsigned**, which means they do not include negative numbers. A `char` in C++ is implicitly signed. This means it can hold 127 **negative** values and 127 **positive** values. So now you should see that's where we get the range `[0, 127]`

All of this is to say that you should understand every data type is just a certain amount of bytes, which is just a certain amount of sets of 8 bits. An `int` is no different from a `char` in terms of _what_ it stores at the binary level. The only difference between them to your computer is the amount of bytes each can hold. It's then up to the programming language to create rules that dictate what data types are comprised of and how they map into our reality. (e.g. `char` is comprised of 1 byte and it maps to letters, `int` is 4 bytes and it maps to integer values)

In this lab, you'll be working primarily with `int`s so let's discuss that. Here are some sequences of bits representing `int`s and their decimal equivalent

| Binary                                                  | Decimal |
| ------------------------------------------------------- | ------- |
| `0000` `0000` `0000` `0000` `0000` `0000` `0000` `0000` | 0       |
| `0000` `0000` `0000` `0000` `0000` `0000` `0000` `0001` | 1       |
| `0000` `0000` `0000` `0000` `0000` `0000` `0000` `0010` | 2       |
| `0000` `0000` `0000` `0000` `0000` `0000` `0001` `0000` | 16      |

The pattern here is 2 to the power of the **set** bit's index. A **set** bit is just a bit that is 1 instead of 0. That will give you the decimal equivalent of the binary representation. If there are more than 1 set of bits, then you just need to calculate that bit's value individually and then add up all of the values. So if you have `int == 3`, it would look like

```txt
0000 0000 0000 0000 0000 0000 0000 0011
```

The first bit's index is 0, and it is set. So `2^0 == 1`. Then the second bit is also set, and its index is 1. So `2^1` is `2`. `2 + 1 == 3`, which is how we calculate the value.

### Bitwise Operators

The task you've been given for this lab is to manipulate the bits of integers using **bitwise operators**. Bitwise operators are similar to regular operators like `+`, `-`, `*`, `/`, etc., except they work at the bit level and have slightly different rules.

Keep in mind that every bitwise operator can be mixed and matched with each other just like you would normal arithmetic. You can get creative with them, and you'll have to be a bit creative to solve some of this lab.

Here are the following bitwise operators you'll be working with for C++

| Operator | Description             |
| -------- | ----------------------- |
| &        | bitwise AND operator    |
| &#124;   | bitwise OR operator     |
| ~        | bitwise NOT operator    |
| >>       | bitshift right operator |
| <<       | bitshift left operator  |

Ignoring what these do for now, similar to an expression `a + 3` in C++, `a & 3` does not modify `a`. It hasn't been stored anywhere. You'd have to do `a += 3` to modify `a` itself. It's the same with bitwise operators `a &= 3`.

#### Bitwise AND

- `&` -- `left & right` where each bit from `right` is _tested_ against each bit from `left`. If both bits are 1, then the resulting bit is 1. Otherwise, the resulting bit is 0 and `result = left & right` would be the result of testing each bit from right to left e.g.

```txt
  0100 0001
  1100 0010 &
-------------
= 0100 0000
```

#### Bitwise OR

- `|` -- `left | right` where each bit from `right` is _set_ by each bit from `left`. If either bit is 1, then the resulting bit is 1. Otherwise, the resulting bit is 0 and `result = left | right` would be the result of setting each bit from right to left e.g.

```txt
  0100 0001
  1100 0010 |
-------------
= 1100 0011
```

#### Bitwise NOT

- `~` -- `~a` where each bit from `a` is _flipped_. If the bit is 1, then the resulting bit is 0. If the bit is 0, then the resulting bit is 1 and `result = ~left` would be the result of flipping each bit from right to left e.g.

```txt
  0100 0001 ~
-------------
= 1011 1110
```

#### Bitshift Right

- `>>` -- `a >> amount` shift `a`'s bits to the right `amount` times. However many times a number is shifted, that amount of bits gets ejected from the sequence to the right, and that same amount of bits gets inserted to the left of the sequence as 0's e.g.

```txt
  0100 0001 >> 3
----------------
= 0000 1000
```

Chop 3 bits off the right, and insert 3 0's on the left

#### Bitshift Left

- `<<` -- `a << amount` shift `a`'s bits to the left `amount` times. However many times a number is shifted, that amount of bits gets ejected from the sequence to the left, and that same amount of bits gets inserted to the right of the sequence as 0's e.g.

```txt
  0100 0001 << 3
----------------
= 0000 1000
```

Chop 3 bits off the left, and insert 3 0's on the right

#### Bitmasking

Before showing you some examples, you should understand the concept of **bit-masking**. All the bitwise operators I've shown you so far (except for the shift ones) are applied to every bit within a given data type. With the following code

```cpp
int a = 8;
int b = 2;
int result = a & b;
// result == 0
```

All of the bits in `a` are tested against all the bits in `b`. Their bits look like

```txt
a == 0000 0000 0000 0000 0000 0000 0000 1000
```

```txt
b == 0000 0000 0000 0000 0000 0000 0000 0010
```

And the result of `a & b` looks like

```txt
result == 0000 0000 0000 0000 0000 0000 0000 0000
```

Each bit index of `a` is `&`'d against each corresponding bit index of `b`. You'll notice that none of the bits from `a` line up with `b` so that it ever does `1 & 1`, therefore the result for every bit in `a & b` is 0, and so the final value of the `result` is 0.

As you can see from the example above, there's no real purpose in just ANDing two random values. This is where **bitmasks** come in. A bit mask is just a number that we'll use for specific purposes when using bitwise operations against a specific value. So in the example above, instead of using `2` for `b`, we would replace `b` with a value that we intend to AND against be for a specific purpose. So if we wanted to test whether or not the 4th bit of `a` was set for example, then we should set `b` equal to a value that will return some non-zero number when using AND between `a` and `b`. So making `b` a "bitmask" to do this, we just do

```txt
a == 0000 0000 0000 0000 0000 0000 0000 1000
```

```txt
b == 0000 0000 0000 0000 0000 0000 0000 1000
```

Now when we do `a & b`, the result will be `8`. The example is a bit contrived, but hopefully, that shows what a bitmask is and why you would want to use one. You curate a bitmask for whatever problem you're trying to solve, and then you test that bitmask against a specific value you're analyzing using any one of the bitwise operations that make sense.

### Examples

I'm going to show some examples here so you understand what's happening at both the bit and the decimal level using each bitwise operator listed above in C++. (You can edit the following snippets and their inputs however you want and run the code yourself **in the browser**, btw)

#### AND Example

<iframe
  frameBorder="0"
  height="450px"
  src="https://onecompiler.com/embed/cpp/3xxnk5z7r?hideTitle=true&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&theme=dark"
  width="100%"
></iframe>

#### OR Example

Notice that the result does not change for any input to value `a` less than 255. It compares every set bit from value `b` (255 is `1111 1111`, so 8 bits of it are set) and then ORs that with whatever `a` is.

<iframe
  frameBorder="0"
  height="450px"
  src="https://onecompiler.com/embed/cpp/3xxnntqz5?hideTitle=true&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&theme=dark"
  width="100%"
></iframe>

#### Bitshift Right Example

Notice that however many times an integer is shifted right, the resulting integer is `original_number / 2^shiftamnt`. If the resulting integer is something like 1.6, the decimal is "truncated", (rounded down basically), so `17 >> 1` would just be 8.

<iframe
  frameBorder="0"
  height="450px"
  src="https://onecompiler.com/embed/cpp/3xxnngh2j?hideTitle=true&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&theme=dark"
  width="100%"
></iframe>

#### Bitshift Left Example

The behavior for this is the same as bitshift right, but instead the resulting integer in this case is `original_number * 2^shiftamnt`.

<iframe
  frameBorder="0"
  height="450px"
  src="https://onecompiler.com/embed/cpp/3ym378bjv?hideNew=true&hideLanguageSelection=true&hideTitle=true&hideNewFileOption=true&theme=dark"
  width="100%"
></iframe>

Hopefully, all of this gives you an idea of how to use each operator and what their functions are.

The examples above are a bit contrived so you can think for yourself during the actual lab. (Hint: You will be using a combination of a bitmask, shifting, and `&`/`|` for most of the lab)

## The Code

This lab implements a `BITSET` class that allows you to create sets of integers that are represented as bitsets. The gist of the lab is that you will have a `vector` containing a variable amount of `int`s that represent a bitset, which is simply the bit representation of a number. Luckily, the `BITSET` class is mostly implemented for you, so you just have to focus on writing a few functions here and there.

More specifically, it's important to understand that each `mSets` element is an integer that you will perform bitwise operations on based on a given

### Your Task

All you have to do is complete the parts of the code that are commented as

```txt
// TODO: ...
```

The big parts are the functions. I've listed the functions here for you to reference. The order they are listed in is the order you should implement them in.

```cpp
ToBinary(int bit_set, int spacing) // returns a string representation of bitset with a space every spacing bits from *left to right*
BITSET::GetNumSets() // returns the number of sets in the BITSET object. This is just the size of the vector containing the int's
BITSET::GetSet(int index) // returns the int from mSets at index
BITSET::Test(int index) // "tests" (compares a bit like "bit & 1") the bit at index and returns true/false accordingly
BITSET::Set(int index) // "sets" (flips a bit from 0 to 1) the bit at index. Returns nothing.
BITSET::Clear(int index) // "clears" (flips a bit to 0) the bit at index. Returns nothing.
```

[Hint for `BITSET::Set()`](#bitwise-or)

[Hint for `BITSET::Test()`](#bitwise-and)

[Hint for `BITSET::Clear()`](#bitmasking)

#### Caveats

- `BITSET:GetSet()` should return 0 if the index given is out of the bounds of `mSets`. This is because the `BITSET` class is meant to be able to hold a variable amount of integers, and if you try to access an index that doesn't exist, it should just return 0.

- `BITSET::Set()` should _increase_ the number of bitsets in your `mSets` vector accordingly. If you set the 32nd bit, then you should have 2 sets in your `mSets` vector (each `int` goes from 0th - 31st bit -- 32 bits total). The first set should be `0` and the second set should be `1`. If you set the 66th bit, then you should have 3 sets in your `mSets` vector. The first set should be `0`, the second set should be `0`, and the third set should be `4`. And so on. Even if your `mSets` vector is empty, if the user sets the 66th bit, then the vector should resize until it can sufficiently hold the 66th bit. (There are 32 bits in an `int` in C++ on most systems, so you'll need 3 `int`s to reach the 66 bits)

- `BITSET::Clear()` likewise, should _decrease_ the number of `int`s in your `mSets` vector. More specifically, it should "truncate" the vector to the smallest amount of `int`s that can hold all of the bits that are set. In other words, starting from the end of the vector, remove every element that is 0 until you reach a non-zero `int`. So if your `mSets` vector looks like this:

```txt
{ 1, 6, 9, 0, 0, 0, 1 }
```

The highest set bit is the 192nd bit here (starting from 0). If you clear the 192nd bit, then the vector should look like this:

```txt
{ 1, 6, 9 }
```

Notice all 0-elements between any non-zero elements are removed.

---
