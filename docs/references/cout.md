---
sidebar_position: 2
---

# std::cout

Used to output text to the console.

## Summary

`std::cout` is an *object* that represents the console output stream. It is generally used whenever you want to output text to the console.

:::info Objects

Objects are instances of a class. They are used to represent things in the real world. For example, a `std::string` object represents a string of characters. A `std::vector` object represents a vector of elements. A `std::cout` object represents the console output stream. In this case, `cout` is an object of the `std::ostream` class.

:::

## Requirements

- `#include <iostream>`
- `using namespace std;` (optional)

:::info Namespaces

Namespaces are used to organize code. They are used to prevent naming conflicts. For example, if you have a function called `print` in your code, and you also have a variable called `print`, then the compiler will not know which one you are referring to. To prevent this, you can put your function in a namespace. For example, you can put your function in the `std` namespace. Then, you can refer to your function as `std::print`. This way, the compiler knows that you are referring to the function and not the variable.

:::

## Usage/Syntax

`std::cout` is followed by the `<<` (insertion) operator, which is followed by an expression. This pattern can be repeated as many times as you want. The expression can be a string literal, a variable, and more.

### General syntax

```cpp
std::cout << <expression> << <expression> << ... << <expression>;
```

### examples

```cpp
// expression is a string literal
std::cout << "Hello, world!" << std::endl;

// multiple expressions
std::cout << "Hello, " << "world!" << std::endl;

// expression is a variable
std::string name = "John";
std::cout << "Hello, " << name << "!" << std::endl;

// expression is a function call that returns a string
std::string get_name() { /* returns a name string */
    return "John";
}

std::cout << "Hello, " << get_name() << "!" << std::endl;
```

