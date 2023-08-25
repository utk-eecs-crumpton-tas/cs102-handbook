---
sidebar_position: 2
---

# Gradescripts

How to use the gradescripts for the labs.

These tests are designed to be run on the lab machines, but they should also work on your own machine if you have the correct dependencies installed, namely `bash`, `g++`, `diff`, `valgrind`, `realpath`, and `unzip`.

On Windows Subsystem for Linux, you should be able to install these dependencies with `apt`

On Mac, you should be able to install these dependencies with [Homebrew](https://brew.sh/)

## Pre-setup

Make sure your lab is in its own directory. This will prevent conflicts for gradescripts for future labs.

:::note
`lab-directory` and `lab.cpp` are filler names for your actual lab directory and source file.
:::

Moving your lab into its own directory:

Make a new directory:

```bash
abradl11:hydra0 ~/cs102› mkdir lab-directory
```

Move your `lab.cpp` file into the new directory (or just create it in the directory if don't have one yet):

```bash
abradl11:hydra0 ~/cs102› mv lab.cpp lab-directory
```

Change into the new directory:

```bash
abradl11:hydra0 ~/cs102› cd lab-directory/
```

Your directory should look like this:

```bash
abradl11:hydra0 ~/cs102/lab-directory› ls
lab.cpp
```

You can verify the contents of the `lab.cpp` with:

```bash
abradl11:hydra0 ~/cs102/lab-directory› cat lab.cpp
*your source code*
```

## Download the Gradescript

:::note
`lab-tests.zip` is a filler name for the actual zip file for the lab you are working on.
All of the zip files for the gradescripts can be found [here](https://github.com/seeker-3/cs102-resources/tree/main/tests).
:::

Download the gradescripts with:

```bash
curl https://raw.githubusercontent.com/seeker-3/cs102-resources/main/tests/lab-tests.zip -o lab-tests.zip
```

Substituting `lab-tests.zip` with the name of the zip file for the lab you are working on.

Unzip the tests:

```bash
abradl11:hydra0 ~/cs102/lab-directory› unzip lab-tests.zip
*lots of output*
```

And your directory should look like this:

```bash
abradl11:hydra0 ~/cs102/lab-directory› ls
lab.cpp  lab-tests.zip  scripts/ tests/
```

## Using the Gradescript

:::note
The script will recompile your program each time you run it, so you don't need to recompile it yourself.
The gradescript will create a file in your directory called `lab.bin` which is your compiled program.
:::

Run the tests like this:

```bash
bash scripts/test.bash lab.cpp
```

The tests use the `diff` command to compare your output to the tests. the `|` symbol means the two lines are different. The `>` symbol with output in green means the line is extra in your program. The `<` symbol with output in red means the line is missing is yours. If the lines look the same, then it could be a whitespace issue.

Example:

```txt
abradl11:hydra0 ~/cs102/calculator-lab› bash scripts/test.bash calculator.cpp
Testing absolute-value-operator (1/28)
  stdout     passed

Testing absolute-value-b (2/28)
  stdout     passed

Testing absolute-value-B (3/28)
  stdout     passed

Testing absolute-value-positive (4/28)
  stdout     failed

expected                                                        yours
Enter left operand:                                             Enter left operand:
Enter operation:                                                Enter operation:
Result = 77                                                   | Result = -77

For more info run with the print flag:
  bash scripts/test.bash <source-file> --print [input|output|all]
```

Inspect additional information about the test with the `--print` flag:

```txt
abradl11:hydra0 ~/cs102/calculator-lab› bash scripts/test.bash calculator.cpp --print input
Testing absolute-value-operator (1/28)
  stdout     passed

Testing absolute-value-b (2/28)
  stdout     passed

Testing absolute-value-B (3/28)
  stdout     passed

Testing absolute-value-positive (4/28)
  stdout     failed

expected                                                        yours
Enter left operand:                                             Enter left operand:
Enter operation:                                                Enter operation:
Result = 77                                                   | Result = -77

stdin
cat /home/abradl11/cs102/calculator-lab/tests/004-absolute-value-positive/stdin.tmp.txt
77
|
```

Use the `--help` flag to see all the options:

```bash
bash scripts/test.bash calculator.cpp --help
```

## About the Gradescripts

The gradescripts have several components they will check depending on the lab.

Output components

- `stderr` expects output written to `cerr`
- `stdout` expects output written to `cout`
- `fout` expects output written to an `ofstream`
- `leak-check` checks for memory leaks

Input components

- `stdin` provides input to `cin`
- `fin` provides input to `ifstream`
- `arguments` provide command-line arguments

All files associated with a test can be found in `tests/<test-name>/`

## Debugging

Most of the time, you should be able to print debug information to `cerr` and inspect it with `--print output`.

Debug statement:

```cpp
cerr << "Debug information!" << endl;
```

```txt
abradl11:hydra0 ~/cs102/calculator-lab› bash scripts/test.bash calculator.cpp --print output
Testing absolute-value-operator (1/28)
  stdout     passed

Testing absolute-value-b (2/28)
  stdout     passed

Testing absolute-value-B (3/28)
  stdout     passed

Testing absolute-value-positive (4/28)
  stdout     failed

expected                                                        yours
Enter left operand:                                             Enter left operand:
Enter operation:                                                Enter operation:
Result = 77                                                   | Result = -77

stdout
cat /home/abradl11/cs102/calculator-lab/tests/004-absolute-value-positive/stdout.tmp.txt
Enter left operand:
Enter operation:
Result = -77

stderr
cat /home/abradl11/cs102/calculator-lab/tests/004-absolute-value-positive/stderr.tmp.txt
Debug information!
```

Noticed the `Debug information!` line in the `stderr` section.

You can also run the compiled program by itself with:

```bash
./lab.bin
```

You will also need to supply arguments and standard input manually depending on the lab.
