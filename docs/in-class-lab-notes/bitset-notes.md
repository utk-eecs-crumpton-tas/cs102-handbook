# Bitset Notes

## Making Binary Numbers in C++

Not needed for this lab, but good to know!

```cpp
  const int binary_9 = 0b1001;
  const int binary_145 = 0b10010001;
```

## Converting a 1D Index into a 2D Index

```cpp
  const size_t ARRAY_SIZE = 26;
  const size_t ROW_SIZE = 6;

  int array_2d[4][6] = {
      {0, 1, 2, 3, 4, 5},
      {6, 7, 8, 9, 10, 11},
      {12, 13, 14, 15, 16, 17},
      {18, 19, 20, 21, 22, 13},
  };

  for (size_t i = 0; i < ARRAY_SIZE; ++i) {
    // i = 0, row = 0, column = 0
    // i = 1, row = 0, column = 1
    // ...
    // i = 6, row = 1, column = 0
    // i = 7, row = 1, column = 1
    const size_t row_index = i / ROW_SIZE;
    const size_t column_index = i % ROW_SIZE;
    const int value = array_2d[row_index][column_index];
    std::cout << value << std::endl;
  }
```

Your row size in this case will be 32, the number of bits in an `int`.

## Bitwise Operations

- `~` bitwise NOT
- `<<` left shift
- `>>` right shift
- `&` bitwise AND
- `|` bitwise OR
- `^` bitwise XOR

For this lab, you will not use xor!!

[Ethan's overview of bitwise operators](/docs/lab-walkthroughs/bitset#bitwise-operators)

### Operator precedence

- `~` has the highest precedence meaning it will be evaluated first
- `<<` and `>>` have the second highest precedence. Since left-shift and right-shift, raise to a power of 2 or divide by a power of 2, I tend to think of them as bitwise multiplication and bitwise division.
- `&`, `|`, `^` have the lowest precedence.

WARNING: the `==` operator has higher precedence than `&`, `|`, `^`. This means that `bitset & mask != 0` would be evaluated as `bitset & (mask != 0)` when we want `(bitset & mask) != 0`.

## Right and Left Shift Examples

Right shifting and left shifting are the same as multiplying and dividing by a power of 2.

NOTE: do not use the `pow` function from `cmath` for this lab!

```cpp
  int x = 64 << 1; // same as 64 * pow(2, 1) or 64 * 2
  int x = 64 << 3; // same as 64 * pow(2, 3) or 64 * 8
  int x = 64 >> 1; // same as 64 / pow(2, 1) or 64 / 2
  int x = 64 >> 3; // same as 64 / pow(2, 3) or 64 / 8
```

### Shorthand syntax

Like all other operators in `c++`, you can use the shorthand assignment syntax with any bit operator

```cpp
  int bitset = 0b1001;
  bitset |= 0b1000; // bitset = bitset | 0b1000
  bitset &= 0b1000; // bitset = bitset & 0b1000
  bitset ^= 0b1000; // bitset = bitset ^ 0b1000
  bitset <<= 1;     // bitset = bitset << 1
```

## Returning a Boolean from a Function

The test function returns a boolean value, whether the bit is set or not.

```cpp
bool BITSET::Test(const int index) const
```

Do not do

```cpp
bool BITSET::Test(const int index) const {
    if ((bitset & mask) != 0) {
        return true;
    } else {
        return false;
    }
}
```

```cpp
bool BITSET::Test(const int index) const {
    if ((bitset & mask) == 0) {
        return false;
    } else {
        return true;
    }
}
```

Do

```cpp
bool BITSET::Test(const int index) const {
    return (bitset & mask) != 0;
}
```

Or possibly a more intuitive way

```cpp
bool BITSET::Test(const int index) const {
    const int test_bit = bitset & mask;
    return test_bit != 0;
}
```

## Bitset Calculators

[Ethan's examples of bitwise calculators](/docs/lab-walkthroughs/bitset#examples)

## vector APIs you will need for this lab

### `resize(new_size, fill_value)`

You will need this for the set function

```cpp
  std::vector<int> data{1, 2, 3, 4, 5};
  data.resize(10 /* new size */, 0 /* fill value */); // resize to 10 elements, fill with 0
  // after: {1, 2, 3, 4, 5, 0, 0, 0, 0, 0}
```

Same call signature as the `vector` constructor

```cpp
std::vector<int> data(10 /* new size */, 0 /* fill value */);
data; // {0, 0, 0, 0, 0, 0, 0, 0, 0, 0} 10 0s
```

### `pop_back()`

You will need this for the clear function

```cpp
  std::vector<int> data{1, 2, 3, 4, 5};
  data.pop_back(); // remove last element
  // after: {1, 2, 3, 4}
```

### `back()`

Returns the last element in a vector. Not needed, but helpful for the clear function when checking if the last element is 0.

```cpp
  std::vector<int> data{1, 2, 3, 4, 5};
  data.back(); // returns 5
```

## ToBinary Spacing

When 32 (the number of bits) is not evenly divisible by the size of the spacing, the smallest group of bits will go on the right. For example:

```cpp
ToBinary(0b1001, 3); // returns "000 000 000 000 000 000 000 000 000 010 01"
ToBinary(0b1001, 5); // returns "00000 00000 00000 00000 00000 00010 01"
ToBinary(0b1001, 6); // returns "000000 000000 000000 000000 000010 01"
```

A common error, make sure you are not adding an extra space at the end of the string!

```cpp
ToBinary(0b1001, 3); // Does not return "000 000 000 000 000 000 000 000 000 010 01 "
ToBinary(0b1001, 5); // Does not return "00000 00000 00000 00000 00000 00010 01 "
ToBinary(0b1001, 6); // Does not return "000000 000000 000000 000000 000010 01 "
```

## Helpful Resources

- [Ethan's walkthrough of the whole lab](/docs/lab-walkthroughs/bitset)

Make sure to set up the tests first thing. These are the tests we will grade the lab with!
