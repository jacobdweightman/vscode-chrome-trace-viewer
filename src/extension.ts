// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as fs from 'fs';
import * as httpServer from 'http-server';
import * as open from 'open';
import * as os from 'os';
import * as path from 'path';
import * as vscode from 'vscode';

function openInBrowser(traceUri: vscode.Uri) {
	const port = 9001;
	const tmpdir = fs.mkdtempSync(path.join(os.tmpdir(), "chrome-trace-viewer-"));
	console.log(tmpdir);
	fs.copyFileSync(traceUri.fsPath, path.join(tmpdir, "index.json"));

	let server = httpServer.createServer({
		"root": tmpdir,
		"showDir": false,
		"cors": true
	});
	server.listen(port);

	const url = `http://127.0.0.1:${port}/index.json`;
	open(`https://ui.perfetto.dev/#!/?url=${url}`).then(() => {
		// We would like to shut down the HTTP server once perfetto completes
		// the request for index.json. However, the library doesn't expose any
		// hooks to accomplish this. For now, just wait a second after opening
		// perfetto, as this should be plenty of time for a local HTTP request.
		setTimeout(() => {
			console.log(`cleaning up ${tmpdir}!`);
			server.close();
			fs.rmSync(
				tmpdir,
				{
					"recursive": true,
					"force": true
				});
		}, 1000);
	});
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "chrome-trace-viewer" is now active!');

	let openInBrowserCmd = vscode.commands.registerCommand(
		"chrome-trace-viewer.openInChrome",
		openInBrowser);

	context.subscriptions.push(openInBrowserCmd);
}

// this method is called when your extension is deactivated
export function deactivate() {}
