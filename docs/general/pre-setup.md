---
sidebar_position: 1
---

# Pre-Setup

Entirely optional but *highly recommended*.

## Introduction

As I've said, this is completley optional, so skip to the next document if doing this doesn't interest you. However I advise against it, since you'll have a much better experience throughout the semester if you do this.

In this guide, I'll show you how to install VScode for both Windows and Mac users, which is pretty much the defacto text editor of choice for programming.

## Windows Users

### Installing VScode

1. Go to [this link](https://code.visualstudio.com/download) and download the installer for your system.

2. Once downloaded, run the installer and follow the instructions.

3. Once installed, you should be able to open VScode by searching for it in the start menu.

Mostly you should be using VScode from the command line. Let's test that out in the powershell now.

```bash
# navigate to some directory that you're not afraid of making a file in
cd C:\Desktop\

# create a file called test.cpp
code test.cpp
```

If you did everything correctly, you should see a new window open up with a blank file.

## Mac Users

### Installing VScode

1. Go to [this link](https://code.visualstudio.com/download) and download the installer for your system.

2. Once downloaded, run the installer and follow the instructions.

3. Once installed, you should be able to open VScode by searching for it (hint: `cmd + space` to open spotlight search).

Ideally you'll be using the terminal a lot if you're on Mac, so we need to setup VScode to launch from the terminal. To do this, simply open VScode and press `cmd + shift + p` to open the command palette. Type in `shell command` and select `Shell Command: Install 'code' command in PATH`. This will allow you to open VScode from the terminal.

Once that's done, quit VScode (`cmd + q`) and quit the terminal if it's open. Now, open the terminal back up and enter the following command

```bash
code test.cpp
```

If you did everything correctly, you should see a new window open up with a blank file.

## Extensions

The best thing about VScode is its huge pool of community extensions. These are basically plugins that add extra functionality to VScode. You can find any extension available by clicking the puzzle piece icon in the left sidebar of VScode and searching for one. (You can also install themes, but that's less important)

At the very least, you should install the C++ official extension.

**C/C++** - Made by Microsoft, this extension adds syntax highlighting and other features for C++.

## Extra


I also recommend enabling a couple VScode settings to make your life easier.

1. Open the settings by pressing `cmd + ,` or by clicking the gear icon in the bottom left corner. Then, search for `auto save` and select `onFocusChange`. This will save you millions of times pressing `cmd + s` to save your file.

2. (**This feature only works if you've installed the extension I listed above**) Search for `format on save` and check the box. I cannot recommend this enough. So many students have poor formatting which will lose you points and will be straight up unacceptable in later courses. This will automatically format your code when you save it, so you don't have to worry about it.

VScode also comes with an integrated terminal which you can open by pressing `cmd + ~`. This will be useful for navigating around your filesystem and moving files since you won't have to move between windows this way. As well as running your programs once you've installed `g++`.

:::note

`cmd` is interchangeable with `ctrl` on Windows and vice versa.

:::
