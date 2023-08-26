---
sidebar_position: 4
---

# Sharing Code on Discord

:::info

Before sharing your code on Discord, please format it first. Poorly formatted code is hard to read and even harder to debug. If you're using vim, you can format your code in normal mode by typing `gg=G`. If you're using VSCode, you can format your code right clicking and selecting format document.

:::

There are 3 ways to share code on Discord:

- [Sharing Code on Discord](#sharing-code-on-discord)
  - [Copying and Pasting](#copying-and-pasting)
  - [Uploading a File](#uploading-a-file)
  - [Taking a Screenshot](#taking-a-screenshot)

## Copying and Pasting

Discord supports a subset of the markup language known as [markdown](https://www.markdownguide.org/). Markdown lets you share code with mono-spacing and syntax highlighting in discord by wrapping it in backticks. [Here](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks) is the documentation for markdown code blocks for reference.

For example, if you wanted to share the following code:

```cpp
#include <iostream>

using namespace std;

int main() {
  cout << "Hello World!" << endl;
  return 0;
}
```

You would wrap it in backticks like this:

````cpp
```cpp
#include <iostream>

using namespace std;

int main() {
  cout << "Hello World!" << endl;
  return 0;
}
```
````

Notice that \`\`\`cpp is all connected on a line by itself and the source code begins on a new line. This is what it should look like in Discord:

![Copy and Paste Code into Discord](@site/static/img/discode.png)

If you've done it correctly the `cpp` should turn green and the code's syntax should be highlighted.

Discord limits the size of messages you can send, so this approach is mainly useful for sharing small snippets of code and not entire files.

## Uploading a File

Uploading a file is simple, you can either select the plus icon on the left side of the message box or simply drag and drop the file into the app. Uploading a file should be a last resort. You should do your best to try to figure out which part of your program is not working and ask questions about the piece you are struggling with. We will help if you are _really_ stuck, but please try to find bugs on your own if you can. Here is the section reference on [debugging with print statements](/docs/debugging/segmentation-faults#how-to-debug-segmentation-faults).

## Taking a Screenshot

A screenshot is okay in some situations, but if we need to make edits to the code you have shared with us this is difficult as we cannot edit code from an image. Screenshots are best suited for problems you are having at the command line like `scp` and `g++`. If you share output from the terminal please first clear your screen (you can clear quickly by pressing `ctrl + l`), run `ls` so we can see the context in which you are working, then run the command you are struggling with and show us as much of the output as you can.

![example screenshot](@site/static/img/example-screenshot.png)

- You can take a screenshot on mac by pressing `command + shift + 4` and then dragging your mouse to select the area you want to capture.
- You can take a screenshot on windows by pressing `windows + shift + s` and then dragging your mouse to select the area you want to capture.
