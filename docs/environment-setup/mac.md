---
sidebar_position: 3
---

# Mac Environment Setup

Setting up homebrew, g++, and VSCode on Mac.

To run the following commands, open a terminal with `cmd+space` and search for `Terminal.app`.

## Install Homebrew

Homebrew is a package manager for macOS. It allows you to install and manage software packages from the command line.

Get it [here](https://brew.sh/) or run the following command in a terminal:

:::warning
Do not run this command while logged into the lab machines with `ssh`. Run it locally on your own computer.
:::

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Keep homebrew and all of its packages up to date with the following command:

```bash
brew update && brew upgrade
```

## Install GCC

GCC is a compiler for C and C++.

```bash
brew install gcc
```

GCC will be run with the command `g++-13` instead of `g++`. On a Mac, `g++` points to the Apple Clang C++ compiler, which is not the same as GCC.

```bash
g++-13 -std=c++11 -o lab0 lab0.cpp
```

## Download VSCode

To install VSCode, you can download it from [here](https://code.visualstudio.com/download) or run the following command in a terminal:

```bash
brew install --cask visual-studio-code
```

## VSCode Extensions

To add extensions to vscode, hit `cmd+shift+x`.

Search for and install the following extensions:

- `ms-vscode.cpptools-extension-pack` aka `C/C++ Extension Pack`

## VSCode Explorer

Hit `cmd+shift+p` and type `shell command` and select `Shell Command: Install 'code' command in PATH`

This will allow you to open vscode from the command line with the command `code`.

On your system, create a directory for your cs102 files, such as `~/cs102`.

```bash
mkdir ~/cs102
```

Open VSCode from the command line with the command:

```bash
code ~/cs102
```

You should see all your files in the file explorer on the left with `cmd+shift+e`.

You can create a new file such as `hello.cpp` with the new file icon in the file explorer and put the following code in it:

```cpp
#include <iostream>

using namespace std;

int main() {
  cout << "Hello World!" << endl;
  return 0;
}
```

## VSCode Terminal

To open a terminal in vscode, hit `` ctrl+` `` (control and backtick).

If you have a file explorer open to the side, it should start the terminal session in the directory you have open.

Run `pwd` to see the current directory:

```bash
pwd
```

Run `ls` and you should see your `hello.cpp` file:

```bash
ls
```

You can also compile and run your code from the terminal:

Compile:

```bash
g++-13 -std=c++11 -o hello hello.cpp
```

Run:

```bash
./hello
```

And it should print `Hello World!` to the terminal.

## VSCode Code Formatting

To format your code in vscode, hit `shift+option+f`. A prompt will appear asking which formatter you want to use. Select the `ms-vscode.cpptools` we just installed.

## VSCode Settings

To edit your settings in vscode, hit `cmd+shift+p` and search for `settings`. Select `Preferences: Open User Settings (JSON)`.

I recommend the following settings:

```jsonc
{
  // other settings...
  "files.autoSave": "onFocusChange", // Will save your files automatically when you change focus away from the editor
  "editor.formatOnSave": true, // Will automatically format your code when your files are saved
  // other settings...
}
```
