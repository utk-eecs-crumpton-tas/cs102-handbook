---
title: Lab 3 - Calculator
---

# Lab 3 - Calculator

Build a simple arithmetic calculator.

## Introduction

I'm not going to go over much here, since the program is really simple honestly. I'll just cover a couple of the main points of this lab.

## Program Flow

Your program should do a few things:

1. Prompt user for left **operand**.
2. Prompt user for *operator*.
3. Prompt user for right **operand**.
4. Perform the operation and output the result.

Note that the **operands** are integers, while the *operator* is a single character. You should use a `switch` statement to determine which operation to perform.

:::note

The only exception to this flow is the absolute value operation. This operation only requires one operand, so you should prompt the user for only one operand.

:::

## Requirements

- You cannot *re-use* code. Don't repeat something you've already done.
- You must use a `switch` statement.
- You muse handle erroneous input. If the user enters an invalid operator, you should output an error message.

## Error Handling

You should handle erroneous input. If the user enters an invalid operator, you should output an error message and exit the program. You can check for invalid input using the `cin.fail()` function. This function returns `true` if the last input operation failed. You can use this function to check if the user entered an invalid operator.

```cpp
int my_int;
cin >> my_int;

// a failure occurs if the user entered something other than an integer
if (cin.fail()) {
    cout << "Invalid operator" << endl;
    return 1;
}
```

Alternatively, you can check the result of the `cin` operation directly.

```cpp
int my_int;

// cin >> x returns false if the user entered something other than an integer
if (!(cin >> my_int)) {
    cout << "Invalid operator" << endl;
    return 1;
}
```

These two methods are equivalent. I prefer the second method, since it's a little more concise, but it's up to you.

## Hints

- `cin.get()` - This function is used to get a single character from the user. You'll use this for the operator.

- `cin.ignore()` - This function is used to ignore the rest of the line. This is useful when you want to get a single character from the user, but there is still data left in the input buffer. So if the enters `Agfjdkl` fort their operator, and you use `cin.get()` to get the first character, the rest of the line will still be in the input buffer. So the next time you try to get an integer from the user, it will get `gfjdkl` instead of the integer they entered. So you can use `cin.ignore()` to ignore the rest of the line. This way, the next time you try to get an integer from the user, it will get the integer they entered.

`cin.ignore()` takes 2 arguments. 1. The number of characters to ignore, 2. The character to stop ignoring at. Whichever comes first. For ignoring, typically we want to ignore as many characters as physically possible or until we hit a `\n` character. Luckily, C++ has a constant for large number: `numeric_limits<streamsize>::max()`.

```cpp
// will ignore anything in the input buffer until it hits a newline character
cin.ignore(numeric_limits<streamsize>::max(), '\n');
```

:::caution Include `<limits>`

You must include `#include<limits>` to use `numeric_limits`.

:::