"use strict";
exports.__esModule = true;
exports.spawn_child = void 0;
var child_process_1 = require("child_process");
var electron_1 = require("electron");
// This function will output the lines from the script 
// and will return the full combined output
// as well as exit code when it's done (using the callback).
function spawn_child(command, args, callback) {
    if (args === void 0) { args = []; }
    return new Promise(function (resolve, reject) {
        var child = (0, child_process_1.spawn)(command, args, {
            shell: true
        });
        // once command has been attempted to run
        child.on('spawn', function () {
            resolve('spawned');
        });
        // You can also use a variable to save the output for when the script closes later
        child.on('error', function (error) {
            reject('not spawned');
            electron_1.dialog.showMessageBox({
                title: 'Title',
                type: 'warning',
                message: 'Error occured.\r\n' + error
            });
        });
        child.stdout.setEncoding('utf8');
        child.stdout.on('data', function (data) {
            //Here is the output  
            console.log(data);
        });
        child.stderr.setEncoding('utf8');
        child.stderr.on('data', function (data) {
            //Here is the output from the command
            console.log(data);
        });
        child.on('close', function (code) {
            //Here you can get the exit code of the script  
            console.log('child process closed with code', code);
        });
        if (typeof callback === 'function')
            callback();
    });
}
exports.spawn_child = spawn_child;
