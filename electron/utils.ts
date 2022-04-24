import { spawn } from 'child_process';
import { dialog } from 'electron';
import { resolve } from'path';


// This function will output the lines from the script 
// and will return the full combined output
// as well as exit code when it's done (using the callback).
export function spawn_child(command: string, args:string[]=[], callback?: (...args: unknown[]) => void): Promise<String> {
    return new Promise((resolve, reject) => {
        var child = spawn(command, args, {
            shell: true
        });
        // once command has been attempted to run
        child.on('spawn', () => {
            resolve('spawned')
        })
        // You can also use a variable to save the output for when the script closes later
        child.on('error', (error: Error) => {
            reject('not spawned');
            dialog.showMessageBox({
                title: 'Title',
                type: 'warning',
                message: 'Error occured.\r\n' + error
            });
        });
    
        child.stdout.setEncoding('utf8');
        child.stdout.on('data', (data: String) => {
            //Here is the output  
            console.log(data);      
        });
    
        child.stderr.setEncoding('utf8');
        child.stderr.on('data', (data: String) => {
            //Here is the output from the command
            console.log(data);  
        });
    
        child.on('close', (code: number) => {
            //Here you can get the exit code of the script  
            console.log('child process closed with code', code);
    
        });
        if (typeof callback === 'function')
            callback();
    })
}