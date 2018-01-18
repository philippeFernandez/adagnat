/*
    ada-gnat extension main 
    -----------------------
    - modules loader
    - command activations
    - main entry points for the different features/commands
    
    This permits to simplify all links done in package.json 
    to the extension's code
*/

'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // @DBG : simple check on extension activated
    let checkCommand = vscode.commands.registerCommand('adagnat.check', ()=>{
        adaCheckCommand();
    });
    context.subscriptions.push(checkCommand);

    console.log('Extension adagnat is active, ok.');
} 
 
// this method is called when your extension is deactivated
export function deactivate() {    
    vscode.window.showInformationMessage('adagnat Has been deactivated ok.');
}
/*
   ------------------------------------------------------------
 */
function adaCheckCommand(){
    vscode.window.showInformationMessage('adagnat Has been loaded and still active ok.');
}