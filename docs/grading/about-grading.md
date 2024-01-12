---
sidebar_position: 1
---

# About Grading

How to format your lab submissions.

## Formatting

Each of your labs will have 10 to 15 points for grading the format of your code. This includes things like the header, indentation, comments, and coding conventions. A grade like this will not be as present in upper-level CS courses, but one of the goals of 102 is to get you used to writing code that is easy to read and understand. This is a skill that will be useful in all of your future classes.

### Header

A header will be required for all of your labs at UT, however, the format may vary. For this class, you will need to include the following information in your header:

```cpp
/* Program Name: PROGRAM NAME HERE
 * Student Name: YOUR NAME HERE
 * Net ID: NETID HERE
 * Student ID: STUDENT ID HERE (000-12-3456)
 * Program Description: BRIEF, 1-2 SENTENCE DESCRIPTION HERE */
```

Each field of the header is worth 1 point. If you forget the header, you will lose 5 points.

### Comments

If your program does not have comments you will lose 5 points. You should get in the habit of commenting on your code. However, if you over-comment your code, you may also receive a small penalty. The idea behind comments is just to provide a brief explanation of what your code is doing. You should not need to comment on every line of code. Assume the reader of the code already knows C++, comments are just to help the reader understand if something may be unclear.

Examples of bad comments:

```cpp
cout << "Hello" << endl; // prints "Hello" to the console
```

```cpp
return 1; // return an error
```

It's obvious that `cout` prints to the console, and it's obvious that `return 1` returns an error. These comments are not necessary. You should only comment on things that may not be obvious to the reader.

Examples of good comments:

```cpp
// compute the sum of the first n integers
int sum = 0;
for (int i = 1; i <= n; i++) {
    sum += i;
}
```

### Formatting Comments

Poorly formatted comments are -1. Comments should be formatted like this:

```cpp
// This is a good comment
int main() {
    // This is a good comment
    int x = get_x();
    if (x > 0) {
        // This is a good comment
        cout << "x is positive" << endl;
    } else if (x == 0) {
        cout << "x is zero" << endl; // This is a good comment
//This is a bad comment
    } else {
    //This is a bad comment
        cout << "x is negative" << endl;
    }
// This is a bad comment
}
```

The indentation level of your comments should match the indentation level of the code they are commenting on.

### Bad Variable Names

If poor or non-descriptive variable names are used, you may lose a couple of points for this depending on how difficult it makes your code to understand.

Examples of bad variable names:

```cpp
int a, b, c = 0; // single letter variable names which don't explain the contents
string un; // username - don't use abbreviations
int arrlen; // array length - don't shorten words and chunk them together
```

Examples of good variable names:

```cpp
int x, y; // for a coordinate system
string username;
int array_length;
```

Variable names should rather be too descriptive than not descriptive enough.

### Bad Variable Casing Conventions

You will not necessarily lose points unless there are a lot of inconsistencies and errors in your variable naming conventions. However, it is important to follow the conventions of the language you are using.

There are several naming conventions common in programming

- camelCase: variables and functions
- snake_case: variables and functions
- PascalCase: classes, structs, enums, and type aliases
- UPPER_SNAKE_CASE or SCREAMING_SNAKE_CASE: constants
- kebab-case: file names, inside strings, or in markup languages

When naming variables and functions in C++, you should use one of two: camelCase or snake_case.

```cpp
void myFunction() {
    int myVariable = 0;
}

void my_function() {
    int my_variable = 0;
}
```

I prefer snake_case since the C++ standard library uses snake_case, but either one is okay. The important thing is to be consistent!

Variables should not start with capital letters, and should not contain capital letters if not using camelCase. Examples of how not to name your variables:

```cpp
int MyVariable = 0;
int My_Variable = 0;
int my_Variable = 0;
```

When naming global constants, or macros, you should use UPPER_SNAKE_CASE.

```cpp
#define CIRCLE_RADIUS 10

const double PI = 3.14159;
```

Lastly, it is common practice to name any custom types using PascalCase.

```cpp
class MyClass {
    // ...
};

struct MyStruct {
    // ...
};

enum MyEnum {
    FieldOne,
    FieldTwo,
    FieldThree,
};

typedef int MyTypeAlias1;
using MyTypeAlias2 = int;

int main() {
    MyClass my_class;
    MyStruct my_struct;
    MyEnum my_enum = FieldOne;
    MyTypeAlias1 my_type_alias1 = 0;
    MyTypeAlias2 my_type_alias2 = 0;
}
```

### Non-Const Global Variables

:::note
The `const` keyword in C++ is the equivalent of `final` in Java. It means that the variable cannot be changed.
:::

Minus 1 per non-const global variable up to 3. Global variables are variables that are declared outside of any function. They are accessible from anywhere in your program. Non-const global variables are generally considered a bad practice, and you should avoid using them. It may not seem like a big deal now, but as your programs grow in size and complexity, global variables can lead to a lot of difficult-to-find bugs. If you do use a global variable, it should be declared as `const`.

```cpp
int my_global_variable = 0; // bad
const int MY_GLOBAL_VARIABLE = 0; // okay
```

The best way to remove global variables is simply to pass them as arguments to any functions that need them.

Before

```cpp
vector<int> my_global_variable; // bad

void my_function() {
    my_global_variable.push_back(0);
}

int main() {
    my_function();
}
```

After

```cpp
void my_function(vector<int>& my_global_variable) {
    my_global_variable.push_back(0);
}

int main() {
    vector<int> my_global_variable; // okay
    my_function(my_global_variable);
}
```

### Unused Variables

Minus 1 per unused variable up to 3. Unused variables are a bad practice that can make your code messy or harder to understand. If you have a variable that you are not using, you should remove it. The best way to catch global variables is to compile `g++` with the `-Wall` flag. This will print a warning for any unused variables as well as many other useful warnings.

```bash
g++ -Wall -o my_program my_program.cpp
```

### Dead Code

Dead code is code that is never executed. This can happen for several reasons, but the most common is that you forgot to remove a line of code after a `return` or `break` statement.

Examples:

```cpp
int dead_code1(int a) {
    if (a == 0) {
        return 0;
    } else {
        return 1;
    }
    cout << "This line will never be executed because it happens after a return" << endl;
}

int dead_code2(int a) {
    switch (a) {
    case 0:
        break;
        cout << "This line will never be executed because it happens after a break" << endl;
    case 1:
        break;
    }
}
```

### Empty Code Blocks

-1 for empty code blocks.

Example:

```cpp
if (true) {
    // do nothing - empty block
} else {
  cout << "It's false!" << endl;
}
```

You should not have empty code blocks in your code. Any empty code block can be removed by refactoring your code a little bit.

Fix:

```cpp
if (false) {
  cout << "It's false!" << endl;
}
```

### Bad Indentation or Inconsistent Use of Whitespace

Example of bad indentation:

```cpp
int main() {
int a = 0;
int b = 0;
int c = 0;
    if (a == 0) {
        b = 1;
        }
      else {
        c = 1;
     }
}
```

Examples of inconsistent use of whitespace:

```cpp
int main() {
    int a = 0;
    int b =0;
    int c= 0;

    int result = a + b*c;
}
```

Bad indentation makes code incredibly difficult to read. A couple of mistakes are okay, but if we cannot tell where your code blocks begin and end, you will lose points for this. The best advice I can give you is to use a code formatter. This is a program that will automatically fix any whitespace and indentation issues in your code and format everything in a consistent way. To format your code in Vim while in normal mode use the command `gg=G`. To format in VS Code right-click your code and select format document or hit `shift+alt+f`. You may need to install an extension in VS Code, the Microsoft `C/C++` extension should come with whatever you need. If you use a formatter on your code before submitting, you will never have to worry about losing points for this.

A side note: If you are sharing code with a TA on the Discord server, please format your code first, this will make it much easier for us to help you!

<!-- :::tip Code Formatter -->

<!-- Ethan has talked a bit about automatic-code formatters for VS Code in link:"/docs/reference/vscode-setup#extra" as well, which is basically the `gg=G` command but for VS Code. -->

<!-- ::: -->

### Compiler Warnings

This may not happen for all labs, but some labs will have specific instructions for compiling code such as `g++ -Wall -o my_program my_program.cpp`, which will enable all compiler warnings. You will lose 1 point up to 3 for any compiler warnings.

The most common compiler warning is comparing a signed and unsigned integer.

```cpp
int main() {
    vector<int> my_vector = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    for (int i = 0; i < my_vector.size(); i++) {
        cout << my_vector[i] << endl;
    }

    return 0;
}
```

```bash
warning: comparison of integer expressions of different signedness: ‘int’ and ‘size_t’ {aka ‘long unsigned int’} [-Wsign-compare]
```

The variable `i` is a signed `int` and `my_vector.size()` is a `size_t` aka a `long unsigned int`. This is a common mistake that can be avoided by using `unsigned int` or `size_t` for your loop counters.

```cpp
int main() {
    vector<int> my_vector = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    for (size_t i = 0; i < my_vector.size(); i++) {
        cout << my_vector[i] << endl;
    }

    return 0;
}
```

## Output

Almost all of the labs in the class will have a section grading the output of your program (what's printed to the console). Whereas this will be a smaller portion of your grade in this class, having your output match **exactly**, will be much more important in future classes. For this reason, you should take the time to make sure your output matches the expected output exactly.

Each lab writeup will include some example output such as:

```bash
Your penname name is Birmingham Johnson.
You will write as a 15 year old.
Your address is 59 Student Lane.



Your penname name is Albuquerque Steve.
You will write as a 45 year old.
Your address is 18 Jack Lane.
```

This output should look like this as code:

```cpp
// Output 1
cout << "Your penname name is Birmingham Johnson.\n";
cout << "You will write as a 15 year old.\n";
cout << "Your address is 59 Student Lane.\n";

// Output 2
cout << "Your penname name is Albuquerque Steve.\n";
cout << "You will write as a 45 year old.\n";
cout << "Your address is 18 Jack Lane.\n";
```

### Common Mistakes

All output should end in a new line `\n` and only one new line. It is very common for students to forget to add a new line to the end of their output.

```cpp
cout << "Your address is 59 Student Lane."; // Wrong, missing `\n`
```

Adding extra whitespace. This is just one example, but I have seen this a lot where students will put a space before a new line.

```cpp
cout << "Your penname name is Birmingham Johnson. \n"; // Incorrect, extra whitespace
```

```cpp
// Incorrect, extra newlines between outputs
cout << "Your penname name is Birmingham Johnson.\n\n";
cout << "You will write as a 15 year old.\n\n";
cout << "Your address is 59 Student Lane.\n\n";
```

Missing punctuation. This is another common mistake. Make sure you have all of the punctuation in the correct places.

```cpp
cout << "Your penname name is Birmingham Johnson\n"; // Incorrect, missing `.`
```

Mismatched letter casing.

```cpp
cout << "your penname name is Birmingham Johnson.\n"; // Incorrect, `y` is not capitalized
```

Mismatched wording.

```cpp
cout << "Your penname is Birmingham Johnson.\n"; // Incorrect, `name` is missing
```

```cpp
cout << "Your penname name will be Birmingham Johnson.\n"; // Incorrect, used `will be` instead of `is`
```

If something seems incorrect about the output, it possibly is. If you are unsure, please ask a TA on the Discord server. Erring on the side of caution, it is better to match the output exactly, even if there is a mistake. You will not be penalized for any of our mistakes and this will allow you to reference the writeup for "correctness".

### Checking Output

For some of the harder labs like bit set and vectors from scratch, we will try to give you grade scripts for checking your output, but we do not have grade scripts for all the labs. For the labs you do not have grade scripts, you can use the `diff` command to compare your output to the expected output. This is a very useful command that you will use in the future.

To use the `diff` command, first copy the expected output from the lab writeup into a file.

`output.txt`

```txt
Your penname name is Birmingham Johnson.
You will write as a 15 year old.
Your address is 59 Student Lane.

```

This file should be in the same directory as your source code and binary. To compare your output to the expected output, first compile your program, then run the following command:

```bash
g++ -o my_program my_program.cpp
diff <(./my_program) lab_output.txt
```

Run `diff` with the `-y` flag to get a side-by-side comparison.

```bash
diff -y <(./my_program) lab_output.txt
```

If you want to run your program and save the output to a file, you can do so like this

```bash
./my_program > my_output.txt
```

Then you can compare your output to the expected output using `diff` like this:

```bash
diff -y my_output.txt lab_output.txt

```

This program should easily let you find if any of the mistakes listed above are present in your output.

## Compiling

:::danger Your Code Must Compile on the Lab Machines

Whenever you are going to submit your code for an assignment, **ALWAYS** make sure it compiles _and_ behaves (as intended) before doing so -- **ON THE LAB MACHINES**. Compilers work differently across computers, so even if it compiles on your computer, it doesn't necessarily compile or behave the same way on the lab machines. The TA's grade using the lab machines, so if your code doesn't compile or work correctly there, you will **not get credit** for the assignment. Trust me, it happens all the time.

:::

This may seem like a steep policy, but this will be the policy used for all upper-level classes, the difference here is since this is an intro class, some degree of error is expected. There will be two extra credit labs available throughout the semester you can use to make up for any points lost due to this policy.

The best way to be certain your lab compiles is to download your submission from Canvas, upload it to one of the lab machines, and verify that the submission compiles.

The file can be uploaded using `scp SOURCE DESTINATION` (more on that in the [scp quick guide](/docs/reference/common-linux-commands#copying-tofrom-the-lab-machines)), but in this case, the source is the file on your computer, and the destination is the lab machine.

```bash
scp my_program.cpp NETID@hydra0.eecs.utk.edu:~/uploads
```
