const vscode = require('vscode');

const config = vscode.workspace.getConfiguration('vscode-elixir-test');

function handler() {
  const terminal = vscode.window.activeTerminal || vscode.window.createTerminal();
  terminal.sendText('mix test');
  if (config.openTerminalAfterTest) terminal.show(!config.focusOnTerminalAfterTest);
}

module.exports = {
  name: 'extension.elixirRunTestSuite',
  handler,
};
