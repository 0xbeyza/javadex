import { Command } from 'commander';
// import { addLiquidity } from './commands/addLiquidity';
// import { swap } from './commands/swap';
import { poolState } from './commands/poolState.js';
import { userBalance } from './commands/userBalance.js';
// import { exit } from "./commands/exit";

const program = new Command();

program
  .name('javadex')
  .description('')
  .version('0.0.1');

program.command('poolState')
  .description('State of Pool')
  .action(() => poolState());
program.command('userBalance')
  .description('User Balance')
  .action(() => userBalance());