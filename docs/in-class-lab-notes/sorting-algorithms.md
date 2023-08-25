# Sorting Algorithms Notes

Here are some helpful resources for this lab:

- [Selection sort gif](https://en.wikipedia.org/wiki/Selection_sort)
- [Insertion sort gif](https://en.wikipedia.org/wiki/Insertion_sort)
- [Escape characters cppreference](https://en.cppreference.com/w/cpp/language/escape)
- [Big-O cheat sheet for sorts](https://www.bigocheatsheet.com/)

This video is very good, showing how to write code in JavaScript for 7 different sorting algorithms and animations of them sorting.

- [Fireship.io Sorting Algorithms](https://www.youtube.com/watch?v=RfXt_qHDEPw&t=414s)

## Continuous Input

When prompting the user, you are required to keep prompting them until they supply valid input.

```cpp
void get_x() {
  char input;

  while (true) {
    cout << "Input: ";
    cin >> input;

    if (input == 'x') {
      break;
    }

    cout << "Try again!" << endl;
  }


  if (input == 'x') {
    cout << "Success!" << endl;
  } else {
    cout << "Failure!" << endl; // this will never happen
  }
}
```

## `at` vs. `[]`

`at` is **required** in this lab

`at` and square brackets do the same thing, just `at` is a little safer. It will check if the element is out of range and exit the program with an error if it is. The square brackets will either return an uninitialized value resulting in undefined behavior or terminate with a seg fault.

```cpp
const size_t slightly_out_of_bounds = 5;
const size_t very_out_of_bounds = 10000000000; // 10 billion
const vector<int> values = {1, 2, 3, 4, 5}; // indexes 0 - 4

const int indexed_value1 = values[slightly_out_of_bounds]; // undefined behavior
const int indexed_value2 = values[very_out_of_bounds]; // segfault

const int at_value1 = values.at(very_out_of_bounds); // throws an exception
const int at_value2 = values.at(slightly_out_of_bounds); // throws an exception
```

## Escape Characters

These allow us to use double quotes and other characters within a string by prefixing them with a backslash `\`

```cpp
cout << "Enter \"x\" or \"y\"";
```

You should recognize `\n` and from the terminal `cd ./my\ directory\ with\ spaces/` for escaping spaces in a path or on windows `cd .\\my_directory\\my_subdirectory` for escaping slashes in a path.

## Stable vs. Unstable

Elements keep there relative order. In this example, the `4_1` and `4_2` are the same value, just subscripted so you can see their original order.

Original:

`[4_1, 6, 5, 7, 8, 4_2]`

Stable sort:
`[4_1, 4_2, 5, 6, 7, 8]`

Unstable sort:
`[4_2, 4_1, 5, 6, 7, 8]`

Both of the sorts you implement in this lab, should be stable, aka keep their relative order. The final list is the same, but it will be extra work for your code because you will be swapping elements of the same value and the output will be incorrect if your sorts are unstable.

This essentially boils down to using `>`, `<` or `>=` `<=` in your comparisons. If you are swapping like elements, you may need to remove the `=` from your comparison.

## Bonus Big-O Notation of sorts O(n^2) and O(n log n)

It's hard to talk about sorts without talking about big-o notation. You can just think of these like functions we learned in algebra: `O(n^2)` is essentially the same as `f(x)=x^2`.

All the sorts we are implemented run in `O(n^2)` (two nested for loops).

The best sorting algorithms are `O(n log n)` (merge sort, quick sort). The reason these are so much faster is they are able to sort half the elements in 1 pass vs. 1 element per pass. You will learn about this in CS302.

Below are example functions that run in `O(1)`, `O(n)`, `O(n^2)`, `O(log n)`, and `O(n log n)`.

### `O(1)`

```cpp
void big_o_of_1(const int n) {
  // 1 or constant time
  // takes the same amount of time no matter what n is
  cout << "n: " << n << endl;
}
```

### `O(n)`

```cpp
void big_o_of_n(const int n) {
  for (int i = 0; i < n; ++i) {
    cout << "i: " << i << endl; // runs n times
  }
}
```

### `O(n^2)`

Selection and insertion sort are both `O(n^2)`.

```cpp
void big_o_of_n_squared(const int n) {
  // n * n
  for (int i = 0; i < n; ++i) {
    for (int j = 0; j < n; ++j) {
      cout << "i: " << i << " j: " << j << endl; // runs n * n times
    }
  }
}
```

### `O(log n)`

```cpp
void big_o_of_log_n(const int n) {
  for (int i = 1; i < n; i *= 2) { // i doubles each time 1, 2, 4, 8 ...
    cout << "i: " << i << endl; // runs log(n) times
  }
}
```

### `O(n log n)`

Merge and quick sort are both `O(n log n)`.

```cpp
void big_o_of_n_log_n(const int n) {
  for (int i = 0; i < n; ++i) {
    for (int j = 0; j < n; j *= 2) {
      cout << "i: " << i << " j: " << j << endl; // runs n * log(n) times
    }
  }
}
```
