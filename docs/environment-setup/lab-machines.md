---
sidebar_position: 1
---

# Lab Machines Environment Setup

Installing [oh my zsh](https://ohmyz.sh/) and [Neovim](https://neovim.io/) with [Neovim kickstart](https://github.com/nvim-lua/kickstart.nvim) on the lab machines.

## Examples

After you have run the installation, you will get compiler errors directly inside your editor.

![Neovim LSP Example](@site/static/img/nvim-lsp-example.png)

Your command line will have syntax highlighting and autocomplete with the right arrow key.

![Oh-My-Zsh Example](@site/static/img/omz-example.png)

## Installation

1. Log into a lab machine with [`ssh`](/docs/reference/common-linux-commands#logging-into-the-lab-machines).
2. Run this command

   ```bash
   bash -c "$(curl -fsSL https://raw.githubusercontent.com/utk-eecs-crumpton-tas/cs102-downloads/main/scripts/install.bash)"
   ```

3. That's it, now you can use Neovim. Just replace `vim` with `nvim` when editing your files.

   ```bash
   nvim file.cpp
   ```

4. If you are on a Mac the color scheme for Neovim will not display correctly in the default terminal app. You can use [iTerm2](https://iterm2.com/) instead.

Here is a [vim command reference](/docs/reference/vim-cheatsheet) to help you get started.

## Customizing (Optional)

### Oh My Zsh

To customize OMZ plugins, edit the `~/.zshrc` file with

```bash
nvim ~/.zshrc
```

OMZ comes with several themes you can find [here](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)

If you want to add additional plugins, you can `git clone` them into `~/.oh-my-zsh/custom/plugins` and then add them to the `plugins` array in `~/.zshrc`.

### Neovim

To customize Neovim, edit the `~/.config/nvim/init.lua` file with

```bash
nvim ~/.config/nvim/init.lua
```

The file contains tons of comments detailing all the configuration options.

The creator of Neovim kickstart created a YouTube video detailing all the aspects of the config as well.

[![Effective Neovim: Instant IDE](https://img.youtube.com/vi/m8C0Cq9Uv9o/0.jpg)](https://youtu.be/m8C0Cq9Uv9o?si=m8tKHEMPFe7g8iXo)

### Neovim Themes

Nvim comes with several themes. You can switch to another theme with the telescope command:

```vim
:Telescope colorscheme
```

You can also add additional themes from the community.

Here is a collection of [Neovim themes](https://vimcolorschemes.com/) you can use.

If you wanted to change your theme to, for example, [One Dark Pro](https://github.com/olimorris/onedarkpro.nvim), find the section of the `init.lua` file that looks like this:

```lua
  { -- You can easily change to a different colorscheme.
    -- Change the name of the colorscheme plugin below, and then
    -- change the command in the config to whatever the name of that colorscheme is
    --
    -- If you want to see what colorschemes are already installed, you can use `:Telescope colorscheme`
    'folke/tokyonight.nvim',
    lazy = false, -- make sure we load this during startup if it is your main colorscheme
    priority = 1000, -- make sure to load this before all the other start plugins
    config = function()
      -- Load the colorscheme here
      vim.cmd.colorscheme 'tokyonight-night'

      -- You can configure highlights by doing something like
      vim.cmd.hi 'Comment gui=none'
    end,
  },
```

And change it to this:

```lua
  { -- You can easily change to a different colorscheme.
    -- Change the name of the colorscheme plugin below, and then
    -- change the command in the config to whatever the name of that colorscheme is
    --
    -- If you want to see what colorschemes are already installed, you can use `:Telescope colorscheme`
    'navarasu/onedark.nvim',
    lazy = false, -- make sure we load this during startup if it is your main colorscheme
    priority = 1000, -- make sure to load this before all the other start plugins
    config = function()
      -- Load the colorscheme here
      vim.cmd.colorscheme 'onedark'

      -- You can configure highlights by doing something like
      vim.cmd.hi 'Comment gui=none'
    end,
  },
```
