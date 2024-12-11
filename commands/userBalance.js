import path, {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import fs from 'fs';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const filePath = join(_dirname.split('javadex')[0], 'javadex', 'database.json');

export const userBalance = () => {
    try {
      const data = fs.readFileSync(filePath, 'utf-8');
      console.log(JSON.parse(data).user);

    } catch (err) {
      console.error(chalk.red('Dosya okunurken hata oluştu:', err));
      process.exit(1); 
    }
  }
userBalance();