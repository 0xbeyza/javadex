import path, {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import fs from 'fs';
import readline from 'readline'; 

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const filePath = join(_dirname.split('javadex')[0], 'javadex', 'database.json');
const data = fs.readFileSync(filePath, 'utf-8');
const user = JSON.parse(data).user;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let amountSwapped;
let swappedToken;

-
rl.question('Swapped from TokenA or TokenB? ', (answer) => {
    swappedToken=answer;
    rl.question('Amount Swapped ', (amount) => {
        amountSwapped=amount;
        if(swappedToken == "TokenA"){
            swap(amountSwapped,0);
        }else if(swappedToken == "TokenB"){
            swap(0,amountSwapped);
        }else{
            console.log("error");
        }
        rl.close();
    });

});

export const swap = (amountSwappedfromA, amountSwappedfromB) => {
    user.tokenA = user.tokenA - amountSwappedfromA;
    console.log(user.tokenA);
    console.log(amountSwapped);
}




