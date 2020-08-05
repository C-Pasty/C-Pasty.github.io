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
    localStorage.setItem("miningSpeedLevel", miningSpeedLevel);

    localStorage.setItem("smithingSpeedUpgradeCost", smithingSpeedUpgradeCost);
    localStorage.setItem("smithingSpeed", speed.smithing);
    localStorage.setItem("smithingSpeedLevel", smithingSpeedLevel);
    console.log("Game Saved");
};

function loadGame() {
    gold = parseInt(localStorage.getItem("totalGold"));
    totalGold.innerHTML = "Gold: " + gold;
    
    ores.copper = parseInt(localStorage.getItem("copperOre"));
    copperOreInventory.innerHTML = "Copper Ore: " + ores.copper;
    sellCopperOre.innerHTML = "Sell all for " + ores.copper * price.copperOre;

    bars.copper = parseInt(localStorage.getItem("copperBars"));
    copperBarsInventory.innerHTML = "Copper Bars: " + bars.copper;
    sellCopperBar.innerHTML = "Sell all for " + bars.copper * price.copperBar;

    speed.mining = parseInt(localStorage.getItem("miningSpeed"));
    miningSpeedLevel = parseInt(localStorage.getItem("miningSpeedLevel"));

    if (miningSpeedLevel == 1) {
        miningSpeedUpgradeCost = 500;
        miningSpeedUpgradeBtn.innerHTML = "Upgrade for " + miningSpeedUpgradeCost + " Gold";
    } else if (miningSpeedLevel == 2) {
        miningSpeedUpgradeCost = 2500;
        miningSpeedUpgradeBtn.innerHTML = "Upgrade for " + miningSpeedUpgradeCost + " Gold";
    } else if (miningSpeedLevel == 3) {
        miningSpeedUpgradeCost = 5000;
        miningSpeedUpgradeBtn.innerHTML = "Upgrade for " + miningSpeedUpgradeCost + " Gold";
    } else if (miningSpeedLevel == 4) {
        miningSpeedUpgradeCost = 10000;
        miningSpeedUpgradeBtn.innerHTML = "Upgrade for " + miningSpeedUpgradeCost + " Gold";
    } else if (miningSpeedLevel == 5) {
        miningSpeedUpgradeCost = 20000;
        miningSpeedUpgradeBtn.innerHTML = "Upgrade for " + miningSpeedUpgradeCost + " Gold";
    } else if (miningSpeedLevel == 6) {
        miningSpeedUpgradeCost = 50000;
        miningSpeedUpgradeBtn.innerHTML = "Upgrade for " + miningSpeedUpgradeCost + " Gold";
    } else if (miningSpeedLevel == 7) {
        miningSpeedUpgradeCost = 75000;
        miningSpeedUpgradeBtn.innerHTML = "Upgrade for " + miningSpeedUpgradeCost + " Gold";
    } else if (miningSpeedLevel == 8) {
        miningSpeedUpgradeCost = 100000;
        miningSpeedUpgradeBtn.innerHTML = "Upgrade for " + miningSpeedUpgradeCost + " Gold";
    } else if (miningSpeedLevel == 9) {
        miningSpeedUpgradeCost = 250000;
        miningSpeedUpgradeBtn.innerHTML = "Upgrade for " + miningSpeedUpgradeCost + " Gold";
    } else if (miningSpeedLevel == 10) {
        miningSpeedUpgradeBtn.innerHTML = "Mining Speed Maxed";
        miningSpeedUpgradeBtn.style.backgroundColor = "grey";
        miningSpeedUpgradeBtn.disabled = true;
    }

    speed.smithing = parseInt(localStorage.getItem("smithingSpeed"));
    smithingSpeedLevel = parseInt(localStorage.getItem("smithingSpeedLevel"));
    smithingSpeedUpgradeCost = parseInt(localStorage.getItem("smithingSpeedUpgradeCost"));
    smithingSpeedUpgradeBtn.innerHTML = "Upgrade for " + smithingSpeedUpgradeCost + " Gold";    
};

function clearGame() {
    localStorage.clear();
};

var saveGameBtn = document.getElementById("save-game");
var loadGameBtn = document.getElementById("load-game");
var clearGameBtn = document.getElementById("clear-game");

saveGameBtn.onclick = saveGame;
loadGameBtn.onclick = loadGame;
clearGameBtn.onclick = clearGame;

setInterval(() => {
    saveGame()
}, 1800000);