function saveGame() {
    localStorage.setItem("totalGold", gold);
    localStorage.setItem("copperOre", ores.copper);
    localStorage.setItem("copperBars", bars.copper);
    localStorage.setItem("ironOre", ores.iron);
    localStorage.setItem("ironBars", bars.iron);
    localStorage.setItem("silverOre", ores.silver);
    localStorage.setItem("silverBars", bars.siver);
    localStorage.setItem("goldOre", ores.gold);
    localStorage.setItem("goldBars", bars.gold);
    localStorage.setItem("mithrilOre", ores.mithril);
    localStorage.setItem("mithrilBars", bars.mithril);

    localStorage.setItem("miningSpeed", speed.mining);
    console.log("Game Saved");
};

function restoreGame() {
    gold = parseInt(localStorage.getItem("totalGold"));
    totalGold.innerHTML = "Gold: " + gold;
    
    ores.copper = parseInt(localStorage.getItem("copperOre"));
    copperOreInventory.innerHTML = "Copper Ore: " + ores.copper;
    sellCopperOre.innerHTML = "Sell all for " + ores.copper * price.copperOre;

    bars.copper = parseInt(localStorage.getItem("copperBars"));
    copperBarsInventory.innerHTML = "Copper Bars: " + bars.copper;
    sellCopperBar.innerHTML = "Sell all for " + bars.copper * price.copperBar;
};

function clearGame() {
    localStorage.clear();
};

var saveGameBtn = document.getElementById("save-game");
var restoreGameBtn = document.getElementById("restore-game");
var clearGameBtn = document.getElementById("clear-game");

saveGameBtn.onclick = saveGame;
restoreGameBtn.onclick = restoreGame;
clearGameBtn.onclick = clearGame;

setInterval(() => {
    saveGame()
}, 300000);