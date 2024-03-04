# Speeding Ticket Calculator Notes

Essentials for the Speeding Ticket Calculator lab

## Working with files

The basics of working with file streams in C++.

### Including headers

```cpp
// Use this header to include file streams
#include <fstream>
```

- `ifstream` is used to read from a file
- `ofstream` is used to write to a file

### Opening the file

```cpp
ifstream fin;
fin.open("input-data.txt");
```

or the shorthand

```cpp
ifstream fin("input-data.txt");
```

### Error checking the file

A file can fail to open if the file does not exist, or the user does not have permission to open that file.

Opening an output file can also fail. `ofstream` will create a new file, but it will not create new directories.
So trying to write to `directory/that/does/not/exist/output-file.txt` will fail.

```cpp
if(!fin.is_open()) {
    cerr << "Error opening file " << filename << endl;
    return 1;
}
```

### Reading data out of a file

`ifstream` like `cin` is an input stream, so we can use `fin` the same way as `cin`.

```cpp
int value;
string text;
fin >> value >> text;
```

### Closing the file

You need to explicitly close the file once you are finished with it. It is not guaranteed the data will be written otherwise.

```cpp
fin.close()
```

### Usage example

```cpp
string filename = "input-data.txt";
ifstream fin(filename);

if(!fin.is_open()) {
    cerr << "Error opening file " << filename << endl;
    return 1;
}

int value;
string text;
if(fin >> value >> text) {
  cout << "Got: " << value << " and " << text << endl;
} else {
    cout << "Error reading int and string\n";
}


fin.close();
```

## Reading all lines of data from a file

In c++ we can use a `while` loop to read all the lines of data out of a file.

For instance, if we have this file:

```txt
Hello World 100 3.1415
Sample Text 200 2.7182
Another String 300 1.618
More Text 400 0.5772
Final Entry 500 1.4142

```

Notice all the values are separated by whitespace.

We can use the following loop to read out all the information

```cpp
/* ...Open the file... */

string word1;
string word2;
int value;
double fraction;

// Exhaustively match these four values until fin fails
while(fin >> word1 >> word2 >> value >> fraction) {
    cout << word1 << " " << word2 << " " << value << " " << fraction << endl;
}

/* ...Close the file... */
```

This code will print the exact same output as the file.

<!--
TODO: Add examples for switch statements with multiple cases and usage of `setfill`
-->
