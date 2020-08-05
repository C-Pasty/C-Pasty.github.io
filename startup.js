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
    localStorage.setItem("miningSpeedUpgradeCost", miningSpeedUpgradeCost);

    localStorage.setItem("smithingSpeedUpgradeCost", smithingSpeedUpgradeCost);
    localStorage.setItem("smithingSpeed", speed.smithing);

    localStorage.setItem("oreQuantity", oreQuantity);
    localStorage.setItem("oreQuantityUpgradeCost", oreQuantityUpgradeCost);

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
    miningSpeedUpgradeCost = parseInt(localStorage.getItem("miningSpeedUpgradeCost"));
    miningSpeedUpgradeBtn.innerHTML = "Upgrade for " + miningSpeedUpgradeCost + " Gold";

    speed.smithing = parseInt(localStorage.getItem("smithingSpeed"));
    smithingSpeedUpgradeCost = parseInt(localStorage.getItem("smithingSpeedUpgradeCost"));
    smithingSpeedUpgradeBtn.innerHTML = "Upgrade for " + smithingSpeedUpgradeCost + " Gold";
    
    oreQuantity = parseInt(localStorage.getItem("oreQuantity"));
    oreQuantityUpgradeCost = parseInt(localStorage.getItem("oreQuantityUpgradeCost"));
    oreQuantityHeader.innerHTML = "Ore Quantity: " + "+" + oreQuantity;
    upgradeOreQuantityBtn.innerHTML = "Upgrade for " + oreQuantityUpgradeCost + " Gold";
};

function clearGame() {
    var clearGameConfirm = confirm("Are you sure you want to delete your save?");
        if (clearGameConfirm == true) {
        txt = "You have deleted your save file.";
        localStorage.clear();
        } else {
        txt = "You did not delete your save file.";
        }
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