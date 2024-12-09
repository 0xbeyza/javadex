export const userBalance = () => {
    function displayUserBalance() {
        const data = fs.readFileSync('database.json');
        const userBalance = JSON.parse(data);
    
        console.log("\n--- Kullanıcı Bakiyesi ---");
        console.log(`Token A: ${userBalance.tokenA}`);
        console.log(`Token B: ${userBalance.tokenB}\n`);
    }
    
    
}