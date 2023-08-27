---
sidebar_position: 4
---

# Vim Cheatsheet

Basic Vim motions to get you started.

## Movement

- `h j k l` - Left, Down, Up, Right (recommended over the arrow keys)
- `w b` - Go forward a word, go back a word
- `{ }` - Jump up and down whole code blocks
- `gg` - Go to the top of the document
- `G` - Go to the bottom of the document
- `0` - Go to the beginning of the line
- `^` - Go to the first non-whitespace character of the line
- `$` - Go to the end of the line

## Editing

- `yy` - Copy a line
- `dd` - Delete a line (similar to cut)
- `p` - Paste what was yanked or deleted
- `u` - Undo
- `ctrl + r` - Redo
- `x` - Delete a character
- `r` - Replace a character
- `d` or `y` combined with any other movement options to delete or yank different selections like `dw` to delete a word or `dj` to delete the line and the line below it.
- `gg=G` - Format your document - use this religiously

## Visual Mode

Used for highlighting and selecting text.

- `v` - visual mode for text selection
- `shift + v` - visual line mode, for selecting whole lines
- `y d` - in visual mode to copy or cut selection
- `p` - Paste over selection

## Insert Mode

- `i` - Insert mode before the cursor
- `a` - Insert mode after the cursor
- `shift + i` - Insert mode at the beginning of the line
- `shift + a` - Insert mode at the end of the line
- `o` - Insert mode on a new line below the cursor
- `shift + o` - Insert mode on a new line above the cursor
- `c` - Same as `d` but also enters insert mode
- `cc` - Delete a line and enter insert mode
- `escape` - exit insert mode

## Exiting

- `:q` - Close a document
- `:wq` - Save and exit a document
- `:q!` - Close the document without saving
- `shift + ZZ` - An alias for `:wq` to save and exit a document

<!-- There is a [vim VS Code extension](https://marketplace.visualstudio.com/items?itemName=VS Codevim.vim) if you want to use vim key bindings in VS Code. This is another good [vim VS Code extension](https://marketplace.visualstudio.com/items?itemName=VSCodevim.vim) for setting up the VS Code extension. -->

If you want to dive deeper into Vim, this YouTuber, [The Primeagen](https://www.youtube.com/@ThePrimeagen) is a good place to start.
