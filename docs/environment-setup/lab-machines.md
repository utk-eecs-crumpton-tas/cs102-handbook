---
sidebar_position: 1
---

# Lab Machines Environment Setup

Setting up Oh-My-Zsh and Neovim on the lab machines.

This guide will walk you through installing [https://ohmyz.sh/](https://ohmyz.sh/) and [Neovim](https://neovim.io/) with [Neovim kickstart](https://github.com/nvim-lua/kickstart.nvim) as well as setting up a language server to enable inline code analysis and autocomplete.

:::note
On Mac, the color schemes for Neovim will not display right for the default Terminal app. I recommend using [Hyper](https://hyper.is/) as an alternative.
:::

## Setup

First log into a lab machine with `ssh`.

[`ssh reference`](/docs/general/common-linux-commands#logging-into-the-lab-machines).

To run the installation, run the following command

```bash
bash -c "$(curl https://raw.githubusercontent.com/utk-eecs-crumpton-tas/cs102-downloads/main/scripts/install.bash)"
```

## Adding the C++ Language Server to Neovim

Open neovim

```bash
nvim
```

If this is your first time opening neovim, it will install several plugins. When it is finished, you can `:q`.

Then run

```vim
:Mason
```

Scroll down to `clangd` and press `i`.

[Here](https://github.com/williamboman/mason-lspconfig.nvim#available-lsp-servers) is a full list of language servers that come with `mason`.

[Here is a cheatsheet](http://localhost:3000/cs102-writeups/docs/general/vim-cheatsheet) of Vim commands for learning the basics. (Vim and Neovim use the same key bindings.)

You can keep the plugins up to date by running the following command in Neovim

```vim
:Lazy update
```

## OMZ Plugins

The script adds the following plugins to OMZ

- [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) - This plugin suggests commands as you type based on history and completions similar to the way a web browser suggests websites.
- [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) - This plugin adds color to the command line.
- [autoupdate](https://github.com/tamcore/autoupdate-oh-my-zsh-plugins) - This plugin automatically updates custom user plugins.

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

Watch the following video to learn about customizing Neovim and the `init.lua` file

[![Effective Neovim: Instant IDE](https://img.youtube.com/vi/stqUbv-5u2s/0.jpg)](https://youtu.be/stqUbv-5u2s?t=226)

Here is a collection of Vim themes you can use

[Neovim themes](https://vimcolorschemes.com/)

If you wanted to change your theme to, for example, [Tokyo Night](https://github.com/folke/tokyonight.nvim), find the section of the `init.lua` file that looks like this:

```lua
-- Theme inspired by Atom
{
    'navarasu/onedark.nvim',
    priority = 1000,
    config = function() vim.cmd.colorscheme('onedark') end,
},
```

And change it to this:

```lua
{
    'folke/tokyonight.nvim',
    priority = 1000,
    config = function() vim.cmd.colorscheme('tokyonight') end,
},
```

Check out [this page](/docs/general/vim-cheatsheet) for a short reference of vim commands.
