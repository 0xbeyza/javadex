import fs, { write } from 'fs';
const path = './database.json';
import chalk from 'chalk'
import { Command } from 'commander';
const program = new Command();

const data = {
    "pool": {
      "tokenA": 1000,
      "tokenB": 1000,
      "K": 1000000
    },
    "user": {
      "tokenA": 500,
      "tokenB": 500
    }
  }

// Veriyi oku
function readData() {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    console.log(JSON.parse(data).pool);
  } catch (err) {
    console.error(chalk.red('Dosya okunurken hata oluştu:', err));
    process.exit(1); // Hata durumunda uygulamayı sonlandır
  }
}

// Veriyi yaz
function writeData() {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error(chalk.red('Dosya yazılırken hata oluştu:', err));
    process.exit(1); // Hata durumunda uygulamayı sonlandır
  }
}

// Program bilgisi
program
  .name('javadex')
  .description('Uniswap V2 DEX Simülasyonu')
  .version('1.0.0');

if (process.argv.slice(2)[0] == "deneme") {
    readData();
} else if (process.argv.slice(2)[0] == "read") {
    readData();
} else if (process.argv.slice(2)[0] == "write") {
    writeData();
}

// Eğer hiçbir komut girilmezse yardım mesajını göster
if (!process.argv.slice(2).length) {
  program.outputHelp(chalk.blue);
}

program.parse(process.argv);
