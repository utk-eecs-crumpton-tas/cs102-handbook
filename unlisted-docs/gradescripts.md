---
sidebar_position: 2
---

# Gradescripts

How to use the gradescripts for the labs.

## Prerequisites

These tests are designed to be run on the lab machines, but they should also work on your machine if you have the correct dependencies installed, namely `g++`,`wget`, `unzip`, `diff` and `valgrind`.

On Mac, you should be able to install these dependencies with [Homebrew](https://brew.sh/)

On Windows Subsystem for Linux, you should be able to install these dependencies with `apt`

Homebrew for Mac:

:::warning
`valgrind` is not available on Mac, for the assignments that include a `leak-check`, you will not be able to test locally.
:::

```sh
brew install gcc wget diffutils
```

APT for WSL Windows Debian/Ubuntu:

```sh
apt install -y gcc wget unzip diffutils valgrind
```

## Pre-setup

Make sure your lab is in its own directory. This will prevent conflicts with gradescripts for future labs.

:::note
**`lab-directory` and `lab.cpp` are placeholders** for your actual lab directory and source file.

You should name your lab directory something like `penname-lab` or `calculator-lab` and your source file `penname.cpp` or `calculator.cpp`.
:::

Moving your lab into its own directory:

Make a new directory:

```bash
abradl11:hydra0 ~/cs102/labs› mkdir lab-directory
```

Move your `lab.cpp` file into the new directory (or just create it in the directory if don't have one yet):

```bash
abradl11:hydra0 ~/cs102/labs› mv lab.cpp lab-directory
```

Change into the new directory:

```bash
abradl11:hydra0 ~/cs102/labs› cd lab-directory/
```

Your directory should look like this:

```bash
abradl11:hydra0 ~/cs102/labs/lab-directory› ls
lab.cpp
```

You can verify the contents of the `lab.cpp` with:

```bash
abradl11:hydra0 ~/cs102/labs/lab-directory› cat lab.cpp
*your source code*
```

## Download the Gradescript

:::note
**`LAB_NAME-tests.zip` is a placeholder**. You will need to replace `LAB_NAME-tests.zip` at the end of the URL with the name of the zip file from the [list of files](https://github.com/utk-eecs-crumpton-tas/cs102-downloads/tree/main/tests) for your current assignment. E.g `penname-tests.zip` for the penname lab or `calculator-tests.zip` for the calculator lab.
:::

Download the gradescripts with:

```bash
wget https://raw.githubusercontent.com/utk-eecs-crumpton-tas/cs102-downloads/main/tests/LAB_NAME-tests.zip
```

**Replacing `LAB_NAME-tests.zip` at the end of the URL** with the correct zip file name from the [list of files](https://github.com/utk-eecs-crumpton-tas/cs102-downloads/tree/main/tests) mentioned above.

Unzip the tests:

```bash
abradl11:hydra0 ~/cs102/labs/lab-directory› unzip LAB_NAME-tests.zip
*lots of output*
```

And your directory should look like this:

```bash
abradl11:hydra0 ~/cs102/labs/lab-directory› ls
lab.cpp  LAB_NAME-tests.zip  scripts/ tests/
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

Calculator lab example:

```txt
abradl11:hydra0 ~/cs102/labs/calculator-lab› bash scripts/test.bash calculator.cpp
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
abradl11:hydra0 ~/cs102/labs/calculator-lab› bash scripts/test.bash calculator.cpp --print input
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
- `leak-check` checks for memory leaks with `valgrind`

Input components

- `stdin` provides input to `cin`
- `fin` provides input to `ifstream`
- `arguments` provide command-line arguments

All files associated with a test can be found in `tests/TEST_NAME/` e.g. `tests/001-absolute-value-operator/`

## Debugging

Most of the time, you should be able to print debug information to `cerr` and inspect it with `--print output`.

Debug statement:

```cpp
cerr << "Debug information!" << endl;
```

```txt
abradl11:hydra0 ~/cs102/labs/calculator-lab› scripts/test.bash calculator.cpp --print output
(1/28)  absolute-value-operator
  stdout     passed

(2/28)  absolute-value-b
  stdout     passed

(3/28)  absolute-value-B
  stdout     passed

(4/28)  absolute-value-positive
  stdout     failed

expected                                                        yours
Enter left operand:                                             Enter left operand:
Enter operation:                                                Enter operation:
Result = 77                                                   | Result = -77

run with
./lab.bin <tests/004-absolute-value-positive/stdin.tmp.txt

your stdout
cat tests/004-absolute-value-positive/stdout.tmp.txt
Enter left operand:
Enter operation:
Result = -77

your stderr
cat tests/004-absolute-value-positive/stderr.tmp.txt
Debug information!
```

Noticed the `Debug information!` line in the `stderr` section.

You can see how the lab was run and run by itself under the run with section:

```bash
./lab.bin <tests/004-absolute-value-positive/stdin.tmp.txt
```
