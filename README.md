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

This extension _should_ be relatively portable. If you think this isn't the
case, please open an issue or submit a pull request!

## Extension Settings

Currently, there are none!

## Known Issues

* It isn't possible to view the traces directly in VS Code.
* This _probably_ doesn't work for remote editing.

## Release Notes

### 1.0.0

- Right click trace file to open in browser
