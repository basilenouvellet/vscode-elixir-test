const vscode = require('vscode');

const config = vscode.workspace.getConfiguration('vscode-elixir-test');

function handler() {
  const terminal = config.forceNewTerminalWhenRunningWatchCommands
    ? vscode.window.createTerminal()
    : vscode.window.activeTerminal || vscode.window.createTerminal();
  terminal.sendText('mix test.watch');
  if (config.focusOnTerminalAfterTest) terminal.show();
}

module.exports = {
  name: 'extension.elixirWatchTestSuite',
  handler,
};
