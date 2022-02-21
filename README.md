# chrome-trace-viewer README

This extension simplifies the workflow for viewing Chrome-compatible traces and
profiles. This trace file format can be emitted by Google Chrome, the Android
debug tools, the ROCm profiler (`rocprof`), and others.

## Features

When optimizing a program, I found myself repeatedly copying around trace files
and manually loading them in `chrome://tracing` as part of my workflow.
Automating this within VS code reduces context-switching between the IDE,
finder/file explorer, and browser, and saves a few seconds on each iteration of
the compile, run, and debug loop.

To use it, simply generate your trace as a `.json` file inside your project,
right click it, and select the new "Open as Profile Trace in Browser" option.
This will open up the Perfetto trace viewer in your browser, and automatically
load the trace file for you!

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Currently, there are none!

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

-----------------------------------------------------------------------------------------------------------
## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

**Note:** You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
