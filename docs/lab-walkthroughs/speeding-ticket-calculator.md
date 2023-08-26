# Speeding Ticket Calculator

A speeding ticket calculator that reads from a file.

## Introduction

In this lab, we'll be calculating a fine for several speeding tickets, and then outputting that fine as a report. The caveat to this lab is that the ticket we read is an actual file on the computer. So we'll be familiarizing ourselves with a few new concepts, such as reading from a file and using the `fstream` class.

:::note
`fstream` is `iostream` but for files
:::

I want you to think of `fstream` as the same thing as `iostream` but for files. The two work almost identically, just slight variations. Similar to `cout` and `cin`, `fstream` has `ifstream` and `ofstream`. `ifstream` is for reading from a file, and `ofstream` is for writing to a file. We'll be using both in this lab.

:::

## Step 1: Reading input

The first part of this program prompts the user for the information needed to calculate the fine. The program should prompt the user for the following information, and store them in the appropriate variables:

- **Ticket File** - The **name** of the file containing the ticket information. This will be the name of an _actual file_ on the computer. More on that later. Its type is a `string`.

- **Report File** - The **name** of the file that the final report will be written to. This will be the name of an _actual file_ on the computer. More on that later. Its type is a `string`.

:::warning
The Ticket and Report "File"
:::

In this program, you will be opening a text file that the user specifies to be opened, and you will read from it. The name of the file is a `string` that the user will input. In other words, the input they give us is not a file, it's a file name that exists on the computer that you will open with `fstream`.

:::

- **Report Start Date** - name is self-explanatory. Just know that the format is `mm dd yyyy`, and it should actually consist of 3 separate values, each of which is an `int`.

- **Report End Date** - same as above, but for the end date.

### Example 1

Here's an example of the prompt output

```txt
Enter a ticket file: ticket // ticket file is "ticket"
Enter report start date (mm dd yyyy): 7 1 2017 // three int's separated by spaces
Enter report end date   (mm dd yyyy): 8 11 2018
```

You should already know how to read info from `stdin` (the name we use for the keyboard basically). We can just use `cin`. A _little hint_ though to make your life easier is that you can read multiple values into multiple variables with just one `cin`. This is because `cin` by default recognizes spaces as "delimiters", which is just a fancy word for things that separate other things.

The example below shows a use case for this:

### Example 2

```cpp
int v1, v2, v3;

cin >> v1 >> v2 >> v3
```

This will read 3 values from `stdin` and store them in `v1`, `v2`, and `v3` respectively. You can use this to read the 3 values for the report start date in one line.

## Step 2: File Input

As previously mentioned, the ticket "file" we get from the user input is the _name_ of the file we are to open on the computer. Interacting with files is almost the exact same as normal I/O (input/output), except that we have to do a little bit of setup first. We'll be using the `fstream` library for this, which is a subset of the `iostream` library. We'll be using the `ifstream` class from the `fstream` library to read from the file.

### Input File Format

Luckily the input file will adhere to a very specific format, so we can consistently read any file the same way every time and parse it accordingly. The format is as follows _(excluding the brackets)_:

```txt
<citation number> <month> <day> <year> <clocked speed> <speed limit> <type of road>
```

- **Citation Number** - a `string` that represents the citation number (yes, it's a `string`). This is the first value in the file.

- **Month** - An `int` that represents the month the ticket was issued. This is the second value in the file.

- **Day** - An `int` that represents the day the ticket was issued. This is the third value in the file.

- **Year** - An `int` that represents the year the ticket was issued. This is the fourth value in the file.

- **Clocked Speed** - An `int` that represents the speed the driver was clocked at. This is the fifth value in the file.

- **Speed Limit** - An `int` that represents the speed limit of the road. This is the sixth value in the file.

- **Type of Road** - A `char` that represents the type of road the ticket was issued on. This is the seventh value in the file.

One caveat here is that the year can be in the format of `yyyy` or `yy`. If it's in the format of `yy`, then it should be interpreted as `20yy`. For example, if the year is `17`, then it should be interpreted as `2017`, since in the final output we print the full year, and for this lab every year is assumed to be within the 21st century.

#### input file example

```txt
E059564 8 12 2018 89 55 i
E515522 7 3 2017 105 50 r
E712221 6 4 2015 200 25 h
E219221 12 25 17 2000 10 p
```

The above text is what is actually inside the input file. Notice how each line conforms to the [format I mentioned](#input-file-format). Each line is a ticket, and each ticket is composed of 7 values, separated by spaces, just like I listed above.

### Reading The File and The `fstream` Library

As I mentioned [here](#Introduction), `fstream` is the file equivalent of `iostream`.

`cin` is to `iostream` as `ifstream` is to `fstream`. You can think of `cin` as just a _pre-defined_ keyword that we can use to easily read from `stdin` (the technical term for the keyboard, basically). `ifstream` is almost the exact same as `cin`, but it's not pre-defined, and it's used to read from a file instead of `stdin` (the keyboard).

In general, these are the steps to reading a file:

1. Create an `ifstream` object. This is the object that will be used to read from the file. You can think of it as a file handle. When you make a `string` in C++, you use the `string` keyword. When you make an `ifstream` object, you use the `ifstream` keyword.

2. Open the file using the `ifstream` object. This is done using the `open()` method. This method takes in a `string` argument that represents the name of the file. **This is the same name that the user entered in the prompt**.

3. Read from the file using the `ifstream` object. This is done using the `>>` operator. This operator is "overloaded" to read from a file, and it works the same way as `cin`.

4. Close the file once we are done reading using the `ifstream` object. This is done using the `close()` method. This method takes no arguments.

#### Include `fstream`

```cpp
#include<fstream>
```

#### 1. Creating the `ifstream` object

By convention, we name the `ifstream` object `fin`. This is because `fin` is short for "file input", just like `cin` is short for "console input". You can name it whatever you want, but I recommend you use `fin` for consistency.

```cpp
// can be invoked in a number of ways

ifstream fin; // creates a blank ifstream handle

// or

ifstream fin("file_to_open"); /* creates an ifstream handle
                                that automatically opens the file */
```

:::note

In the above example, `"file_to_open"` is the name of the file we want to open. In your code, you'll replace that string-_literal_ (i.e. an "in-place" `string`) with the `string` _variable_ that holds the name of the file you prompted the user for in step 1.

:::

#### 2. Opening the file

```cpp
// opens the file.
// can be skipped if the ifstream object was created with a file name
fin.open("file_to_open");

// check to make sure the file is open by our program.
// if it isn't, then we can't read from it

if (!fin.is_open()) {
    // print error and exit
}
```

#### 3. Reading from the file

After the file is opened, reading from the file is _the same_ as reading with `cin`. Again, the only difference is that we use the `ifstream` object instead of `cin`, because the contents of a file are being read instead of the keyboard.

```cpp
// read from the file.
// can be done in a number of ways

int v1, v2, v3;

// reads 3 values from the file and stores them in v1, v2, and v3
fin >> v1 >> v2 >> v3;

// or

int v1, v2, v3;

fin >> v1; // reads 1 value from the file and stores it in v1

fin >> v2; // reads 1 value from the file and stores it in v2

fin >> v3; // reads 1 value from the file and stores it in v3
```

Keep in mind that `fin` is a _stream_ object, which means it is reading from the file as a continuous "stream" and "delimiting" the values based on the spaces in the file. Every time a space is encountered, the `fin` object will stop reading and store the value it read so far in the variable you specified.

#### 4. Closing the file

```cpp
// closes the file
fin.close();
```

:::warning
Always close the file when you're done reading!
:::

## Step 3: Calculating The Ticket Fee

:::note Calculating as you read

Each time you read a single line from the file, you should calculate everything for that line, and then move to the next line and repeat the process.

:::

Now that we have the ticket information, we can calculate the fee for each ticket. The fee is calculated using two variables

1. The initial fee of the ticket is calculated by subtracting the **speed limit** from the **clocked speed**.

2. A **multiplier** that is determined based on the **type of road** the ticket was issued on, and then multiplied by the initial fee.

### Multipliers & Road Types

Each multiplier should be stored as a `const double` variable. They will never change, and we know them at compile time, which is why we can use `const`.

Recall that the type of road is the last character in the ticket information. The type of road is represented by a single character, which is why we can use a `char` variable to store it. So once you've read your line, you should determine which multiplier to use based on the type of road. Here's a table that shows the mapping between the type of road and the multiplier:

#### table

| type of road         | multiplier |
| -------------------- | ---------- |
| i(nterstate)         | 5.2243     |
| h(ighway)            | 9.4312     |
| r(esidential)        | 17.2537    |
| p(none of the above) | 12.916     |

Use a switch statement to determine which multiplier to use to calculate the fine.

This part is pretty straightforward, so I won't go into too much detail.

## Step 4: Writing The Ticket Information To a File

Now that we have the ticket information, we can write it into a file. Since we're writing to a file, we'll need to use an `ofstream` object. This is the same as the `ifstream` object, except it's used for writing to a file instead of reading from a file. As I mentioned previously, `ofstream` is basically `cout` for files. I went over `ifstream` in great detail, so you can probably figure out how to use `ofstream` on your own. I'll show you how to open a file though since it's the only difference.

```cpp
// ofstream will automatically create the file if it doesn't exist
ofstream fout("file_to_open.txt");
```

Of course, you'll replace `"file_to_open"` with the name of the output file the user gave us earlier. You can also open the file using the `open()` method, but I prefer to use the constructor.

### Output File Format

Similar to the input file, the output file will be in a particular format.

- **Day** - The day the ticket was issued. This is the third value in the input file.
- **Month** - The month the ticket was issued, represented by a 3-letter abbreviation. This is the second value in the input file.
- **Year** - The year the ticket was issued. This is the fourth value in the input file and is in the format `yyyy` _OR_ `yy`.
- **Citation** - The citation number (not a number). This is the first value in the input file.
- **Fine** - The fine you calculated for the ticket based on the speed and road type.

#### template

```txt
<day>-<3-character Month>-<Year> <citation> $<fine>
```

Here are the formatting specifications such as width, justification, precision, etc (according to Canvas). **Read them carefully**:

```txt
1. The day must be exactly two digits. If the day is 1 - 9, it must be 01 - 09.
2. The 3-character month must be the three-character month: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, or Dec.
3. The year is simply a 2 or 4 digit year. If the year is only two digits, assume the 21st century. For example, year 10 will be the year 2010.
4. The citation is exactly the citation given in the input file, but it will be in a left justified field, 10 characters wide.
5. The $ must follow the citation field.
6. The fine will be a dollar amount in a right justified field, 9 characters wide.
7. You will only output those citations that occur between the given report start date and end dates (inclusively).
```

#### output corresponding to the input file

Here's an example of the output for the example file shown earlier:

```txt
03-Jul-2017 E515522    $   948.95
25-Dec-2017 E219221    $ 25702.84
```

- **Extremely Important** - The resulting report only contains tickets that were issued between the start and end date specified in the initial prompt. You must do some math to determine which tickets fall between the start and end dates. This is the most difficult part of the assignment, but it's still pretty straightforward. You'll need to compare the date of each ticket to the start and end date. If the ticket date is between the start and end date (inclusive), then it should be printed. If it isn't, then it should be skipped.

### Comparing Dates

There are a bunch of ways to compare dates. Some of them are simpler than others but maybe not as intuitive, whereas others are more verbose but easier to understand. I'm not going to describe the methods here outside of a couple of hints to lead you in the right direction (there's always office hours/Discord/Google if you get stuck)

#### hints

1. More verbose but easier to understand: You can compare the date you've read to the date range by checking each component of the date, starting at the widest scope (year) and working your way down to the smallest scope (day).

2. Less verbose but more difficult to understand: You can convert the date to a single number, and compare the number to the date range. This might not be as intuitive, but it's less typing than the former.

Just keep in mind that the date range given is inclusive. So if a ticket date is exactly equal to the start/end date, then it still falls within the range.

## Requirements

As usual, your program needs to adhere to the general requirements like proper indentation, variable naming, header, etc. But other than that, there are a few specific requirements that you need to follow.

1. You must use `iomanip` to restrict the day output to 2 digits, and the year output to 4 digits.

2. You must use `iomanip` to restrict the fine output to 2 decimal places.

3. You must use a `const string` array (**NOT** a `vector`) to store the 3-letter month abbreviations. (Note the relationship between the month number and the index in the array.)

4. You must use `const double`s for each fine multiplier and a `switch` statement to determine the multiplier used in the calculation based on the road type.

5. You must use `iomanip` for formatting the output (e.g. justification)

6. All fines must be `≥` `$0.00`. If the fine is less than `$0.00`, then round to `$0`.

7. If you attempt to open a file that does not exist, then you should print an error message and exit the program.

### MAKE SURE IT COMPILES AND RUNS

The program you turn in must compile and run on the lab machines using _this exact command:_

```bash
g++ -Wall -O0 -g -std=c++11 -o speeding speeding.cpp
```

If it doesn't compile with that exactly, you _will_ ~~almost certainly~~ get a **0**. If you're having trouble getting it to compile, then you should ask for help on Discord or in office hours.

## References

I've compiled a list of references if you get stuck on something and want easy access to information that might help you.

- [Iomanip stuff](https://www.tutorialspoint.com/cpp_standard_library/iomanip.htm)
- [fstream stuff](https://www.tutorialspoint.com/cplusplus/cpp_files_streams.htm)
