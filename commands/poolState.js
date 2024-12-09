export const poolState = () => {
    const fs = require('fs');

    function displayPoolStatus() {
        const data = fs.readFileSync('database.json');
        const pools = JSON.parse(data);
    
        console.log("\n--- Likidite Havuzu Durumu ---");
        console.log(`Token A: ${pools.pool.tokenA}`);
        console.log(`Token B: ${pools.pool.tokenB}`);
        console.log(`K (Constant): ${pools.pool.K}\n`);
    }    
}
