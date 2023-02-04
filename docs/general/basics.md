---
sidebar_position: 3
---

# Common Unix/Linux & g++ Commands

Tips and resources that are useful for the course.

## What is this?

This page can be used as a reference for the basics of the COSC 102 course. It is not meant to be a complete reference, but rather a quick reference for the most common things you will need to know.

:::info

This page is aimed at Unix/Linux computers. If you are using Windows, it's more or less the same, but some of the syntax is slightly different like how Windows uses `\` instead of `/` for paths, and the file system structure is different. (e.g. `C:\` is the root directory for Windows, but `/` is the root directory for Unix/Linux. `C:\Desktop` is the Desktop folder for Windows, but `/home/<username>/Desktop` is the Desktop folder for Unix/Linux.)

:::

---

## Copying to/from the lab machines (`scp`)

`scp` - Stands for *Secure Copy*. This command allows you to copy files from a remote server to your local computer or vice versa.

:::note

In the following examples, omit the `<>` characters. They are just placeholders for the actual values you need to use. Also note that `hydra` and `tesla` are interchangeable.

:::

### Syntax

| File                                      | NetID          | Number            | Destination                                           |
| ----------------------------------------- | -------------- | ----------------- | ----------------------------------------------------- |
| The **path** to the file you want to copy | Your UTK NetID | Any number [0,30] | The **path** to the location you want the file copied |


### From your computer to the lab computers

```bash
scp <file> <netid>@tesla<number>.eecs.utk.edu:<destination>
```

### From the lab computers to your computer

```bash
scp <netid>@tesla<number>.eecs.utk.edu:<file> <destination>
```


### Common SCP FAQs/Errors

If you're copying a file **from your computer to the lab computers**, you need to make sure _one_ of the following is true:

- You are in the same directory as the file you want to copy
- You provide the full path of the file you want to copy

If you aren't in the same directory as the file you want to copy, then you can use `cd` to navigate to the directory that contains the file you want to copy. Or you can provide the full path to the file you want to copy. (e.g. `scp ~/Desktop/file.txt` as opposed to `scp file.txt`)

```bash
scp ~/Desktop/file.txt <netid>@tesla<number>.eecs.utk.edu:<destination>

# as opposed to

scp file.txt <netid>@tesla<number>.eecs.utk.edu:<destination>
```

If you _are_ in the same directory, then the path you use for the file you want to copy is just the name of the file.

If you're copying a file **from the lab computers to your computer**, then `<file>` & `<destination>` will *always* be the full path to the file you want to copy. (e.g. `~/cosc102/labs/lab1.cpp` for `<file>`). You can however copy a file to your current directory by using `.` as the destination.

```bash
scp <netid>@tesla<number>.eecs.utk.edu:~/cosc102/labs/lab1.cpp .
```

## Other commands you should know

### List files in a directory

- `ls` - Stands for *List*. This command is used to list the contents of a directory. It is often used to see what files are in a directory, or to see if a file exists in a directory. There are multiple flags you can use with `ls` that alter the output

```bash
ls -a # lists hidden files/directories (ones that start with a . character)
ls -l # a more detailed list of the current directory. It shows things like file mod times, permissions, and more
ls <directory/file> # lists the contents of a specific directory/lists whether a file exists in the current directory, respectively
```

### Change directory

- `cd` - Stands for *Change Directory*. This command is used to change the current directory. It is often used to navigate to a specific directory, or to navigate back to your home directory.

```bash
cd <directory> # changes the current directory to the directory specified
cd .. # changes the current directory to the parent directory of the current directory (moves back one)
cd ~ # changes the current directory to your home directory
```

### Print current directory path

- `pwd` - Stands for *Print Working Directory*. This command is used to print the current directory. It is often used to see what directory you are currently in.

```bash
pwd
```

### Make a new directory

- `mkdir` - Stands for *Make Directory*. This command is used to create a new directory.

```bash
mkdir <new-directory-name>
```

### Copy a file or directory

- `cp` - Stands for *Copy*. This command is used to copy a file or directory.

```bash
cp <source> <destination>
cp -r <source-directory> <destination-directory>
```

### Move/rename a file

- `mv` - Stands for *Move*. This command is used to move a file to a different location. You can also use it to rename a file.

```bash
mv <source> <destination> # moves source to destination or renames source to destination
```

### Remove a file or directory

- `rm` - Stands for *Remove*. This command is used to remove files and directories.

```bash
rm <file> # removes a file
rm -r <directory> # removes a directory and all of its contents
```

### Create a new file

- `touch` - This command is used to create a new file.

```bash
touch <new-file-name>
```

### Print the contents of a file

- `cat` - Stands for *Concatenate*. This command is used to print the contents of a file to the terminal.

```bash
cat <file>
```

## Tips & Important Notes

I'm just gonna throw out a bunch of small bits of info here that I see students struggle with often.

- Instead of typing `/home/netid/` in SCP/SSH, use `~`. This is basically shorthand for that path. So `/home/netid` is the same thing as `~`.
- When you're in a directory, you can use `..` to go back one directory. So if you're in `/home/netid/cosc102/labs`, you can use `cd ..` to go back to `/home/netid/cosc102`

