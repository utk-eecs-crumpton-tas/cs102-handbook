---
sidebar_position: 1
---

# Getting Started

You'll want to follow this guide to make your life easier during the course.

## Introduction

This year you'll be programming in C++ as opposed to Java. They're quite different languages both in terms of syntax and setup. So let's get started with the setup!

## Windows Users

For Windows users, we'll need to install WSL (Windows Subsystem for Linux).

### Installing WSL

1. Navigate to the start menu in the bottom left corner, and find the Powershell application. Right click and *run as administrator*. 

![start menu](/info/s1.png)

2. Once the shell is open, copy and enter the following line

    ```bash
    wsl --install
    ```
    ![note about WSL](/info/note1.png)

3. Once WSL is installed, **restart your computer**. I recommend running Ubuntu (the default Linux distribution that's installed) and setting up your new Linux system. It should look like this

    ![ubuntu](/info/s2.png)

    Once started, it should prompt you to create a username/password. Once you've done that, you're set!

### Installing g++

Now we'll need to install g++, which is the compiler we'll be using to compile our C++ code in this course.


Now that you have Ubuntu opened, enter the following line

```bash
sudo apt install g++
```

Note that you may need to enter `y` or `yes` when prompted during the installation process.

### Final Steps

This isn't necessary but you can test it for fun if you'd like!

Now that you've installed g++ on your Linux system, let's test it out to make sure everything is working.

In your home directory, enter the following command

```bash
vim test.cpp
```

Now you should be in a very barebones text editor. From here, press `i` and enter the following code

```cpp
#include <iostream>

using namespace std;

int main() {
    cout << "Hello world!\n";
    
    return 0;
}
```

Once all that is typed out, press `esc`, and type `wq`, then hit enter.

Now you should be back to the plain terminal screen. From here, enter the following line

```bash
g++ -o test test.cpp
```

Now your program should be compiled into an executable which you can run to see the results of your code by typing

```bash
./test
```

Don't forget the `.` !

If it prints "Hello world!" to your screen, then you've set everything up correctly.

## Mac Users

For Mac users, we just need to install g++ for compiling our C++ programs, but first we'll need a couple of things

### Installing Xcode Command Line Tools (g++)

1. press `CMD+SPACE` and type `terminal`, then press enter to open the terminal.
2. Once opened, type and enter the following line

    ```
    xcode-select --install
    ```

    This will install the Xcode command line tools. It might take awhile, so sit still while it's installing.

Once installed, you should now be able to compile C++ programs and run them. Restart the terminal application, and enter the following line

```bash
g++ --version
```

If it prints a bunch of version information, then you've successfully installed g++!

:::note

Although it appears you’ve installed `g++`, the Xcode suite actually installs Clang, which is another C++ compiler. It then sets `g++` to be an alias for the Clang compiler. This is most likely fine, but it might possibly compile differently than `g++`.

:::