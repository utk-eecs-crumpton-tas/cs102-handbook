---
sidebar_position: 5
---

# Swap Files

## What is a swap file?

If you have Vim open, and a session ends unexpectedly (such as closing the terminal while Vim is open), the unsaved changes you have made will be stored in a swap file.
If a swap file exists, a screen will pop up displaying the location of the swap file and a list of actions you can take.

```txt
E325: ATTENTION
Found a swap file by the name ".file.txt.swp"
          owned by: abradl11   dated: Fri Jan 12 09:17:55 2024
         file name: ~abradl11/file.txt
          modified: YES
         user name: abradl11   host name: hydra0.eecs.utk.edu
        process ID: 865209
While opening file "file.txt"
             dated: Fri Jan 12 09:15:42 2024

(1) Another program may be editing the same file.  If this is the case,
    be careful not to end up with two different instances of the same
    file when making changes.  Quit, or continue with caution.
(2) An edit session for this file crashed.
    If this is the case, use ":recover" or "vim -r file.txt"
    to recover the changes (see ":help recovery").
    If you did this already, delete the swap file ".file.txt.swp"
    to avoid this message.

Swap file ".file.txt.swp" already exists!
[O]pen Read-Only, (E)dit anyway, (R)ecover, (D)elete it, (Q)uit, (A)bort:
```

## Viewing the current file

Using the `[O]pen Read-Only` will let you see the current contents of the file without the changes saved in the swap file.

Using the `(E)dit anyway` will let you open the current file and make changes to it.

:::danger

If you make changes to your file and then choose to recover your swap file, the changes you made will be overwritten.

:::

## Deleting the swap file

If you have not made many unsaved changes, the easiest course of action to to simply delete the swap file and continue editing where you left off. Deleting the swap file will prevent the dialogue from popping up when you open Vim. There are two ways to delete the swap file.

1. One of the options may pop up saying `(D)elete it`. If you press this option, it will delete the swap file and open up your file for editing as normal without applying the changes from the swap file.
2. You can remove the swap file manually. A path should appear on the screen `Found a swap file by the name ".file.txt.swp"`. To remove the file, you can simply use

   ```bash
   rm .file.txt.swp
   ```

   :::note

   Files preceded by a dot will not appear in the directory normally with the `ls` command. You must use `ls -a` to list them.

   :::

## Recovering the swap file

If you have made significant unsaved changes to your file and wish to recover them from your swap file, you can use the `(R)ecover` option. This will open up the editor with the changes from the swap file. If you wish to keep the changes from the swap file, you must write and quit as normal `:wq`. If you wish to discard the changes from the swap file, you can use `:q!`.

In either case, whether you apply or discard the changes, you must manually delete the swap file to prevent the dialogue from popping up again.

:::danger

If you recover your changes, don't delete the swap file, continue editing the file, then recover the swap file a second time, the changes will be reverted to the first time you recovered the swap file and your changes after recovering will be overwritten.

:::

## Quitting or Aborting

The `(Q)uit` and `(A)bort` options will simply close Vim.

## Disabling swap files

If you wish the prevent Vim from creating swap files altogether, this is possible, however, if you disable swap files, there will be no way to recover any unsaved changes you have made if Vim quits unexpectedly.

To disable the swap files in Vim, open up the vimrc

```bash
vim ~/.vimrc
```

And add the following line

```vim
set noswapfile
```

To disable swap files in Neovim open the `init.lua` file

```bash
nvim ~/.config/nvim/init.lua
```

and all the following line

```lua
vim.opt.swapfile = false
```
