function saveGame() {
    localStorage.setItem("totalGold", gold);
    localStorage.setItem("copperOre", ores.copper);
    localStorage.setItem("copperBars", bars.copper);
    localStorage.setItem("ironOre", ores.iron);
    localStorage.setItem("ironBars", bars.iron);
    localStorage.setItem("silverOre", ores.silver);
    localStorage.setItem("silverBars", bars.silver);
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

    localStorage.setItem("unlockIronState", unlockIronState);
    localStorage.setItem("unlockSilverState", unlockSilverState);
    localStorage.setItem("unlockGoldState", unlockGoldState);
    localStorage.setItem("unlockMithrilState", unlockMithrilState);

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

    ores.iron = parseInt(localStorage.getItem("ironOre"));
    ironOreInventory.innerHTML = "Iron Ore: " + ores.iron;
    sellIronOre.innerHTML = "Sell all for " + ores.iron * price.ironOre;

    bars.iron = parseInt(localStorage.getItem("ironBars"));
    ironBarsInventory.innerHTML = "Iron Bars: " + bars.iron;
    sellIronBar.innerHTML = "Sell all for " + bars.iron * price.ironBar;

    ores.silver = parseInt(localStorage.getItem("silverOre"));
    silverOreInventory.innerHTML = "Silver Ore: " + ores.silver;
    sellSilverOre.innerHTML = "Sell all for " + ores.silver * price.silverOre;

    bars.silver = parseInt(localStorage.getItem("silverBars"));
    silverBarsInventory.innerHTML = "Silver Bars: " + bars.silver;
    sellSilverBar.innerHTML = "Sell all for " + bars.silver * price.silverBar;

    ores.gold = parseInt(localStorage.getItem("goldOre"));
    goldOreInventory.innerHTML = "Gold Ore: " + ores.gold;
    sellGoldOre.innerHTML = "Sell all for " + ores.gold * price.goldOre;

    bars.gold = parseInt(localStorage.getItem("goldBars"));
    goldBarsInventory.innerHTML = "Gold Bars: " + bars.gold;
    sellGoldBar.innerHTML = "Sell all for " + bars.gold * price.goldBar;

    ores.mithril = parseInt(localStorage.getItem("mithrilOre"));
    mithrilOreInventory.innerHTML = "Mithril Ore: " + ores.mithril;
    sellMithrilOre.innerHTML = "Sell all for " + ores.mithril * price.mithrilOre;

    bars.mithril = parseInt(localStorage.getItem("mithrilBars"));
    mithrilBarsInventory.innerHTML = "Mithril Bars: " + bars.mithril;
    sellMithrilBar.innerHTML = "Sell all for " + bars.mithril * price.mithrilBar;

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

    if (oreQuantity >= 10) {
        upgradeOreQuantityBtn.innerHTML = "Ore Quantity Maxed";
        upgradeOreQuantityBtn.style.backgroundColor = "grey";
        upgradeOreQuantityBtn.disabled = true;
    };

    unlockIronState = localStorage.getItem("unlockIronState");
    unlockSilverState = localStorage.getItem("unlockSilverState");
    unlockGoldState = localStorage.getItem("unlockGoldState");
    unlockMithrilState = localStorage.getItem("unlockMithrilState");


    if(unlockIronState == "true") {
        unlockNextMineralIron.disabled = true;
        ironOreHeader.style.display = "block";
        ironBarHeader.style.display = "block";
        ironBarsInventory.style.display = "block";
        ironOreInventory.style.display = "block";
        sellIronOre.style.display = "block";
        sellIronBar.style.display = "block";
        unlockNextMineralSilver.style.display = "block";
        unlockNextSilverHeader.style.display = "block";
        unlockNextMineralIron.style.display = "none";
        unlockNextIronHeader.style.display = "none";
    };
    if(unlockSilverState == "true") {
        unlockNextMineralSilver.disabled = true;
        silverOreHeader.style.display = "block";
        silverBarHeader.style.display = "block";
        silverBarsInventory.style.display = "block";
        silverOreInventory.style.display = "block";
        sellSilverOre.style.display = "block";
        sellSilverBar.style.display = "block";
        unlockNextMineralGold.style.display = "block";
        unlockNextGoldHeader.style.display = "block";
        unlockNextMineralSilver.style.display = "none";
        unlockNextSilverHeader.style.display = "none";
    };
    if(unlockGoldState == "true") {
        unlockNextMineralGold.disabled = true;
        goldOreHeader.style.display = "block";
        goldBarHeader.style.display = "block";
        goldBarsInventory.style.display = "block";
        goldOreInventory.style.display = "block";
        sellGoldOre.style.display = "block";
        sellGoldBar.style.display = "block";
        unlockNextMineralMithril.style.display = "block";
        unlockNextMithrilHeader.style.display = "block";
        unlockNextMineralGold.style.display = "none";
        unlockNextGoldHeader.style.display = "none";
    };
    if(unlockMithrilState == "true") {
        unlockNextMineralMithril.disabled = true;
        mithrilOreHeader.style.display = "block";
        mithrilBarHeader.style.display = "block";
        mithrilBarsInventory.style.display = "block";
        mithrilOreInventory.style.display = "block";        
        sellMithrilOre.style.display = "block";
        sellMithrilBar.style.display = "block";
        if (ironOreHeader.style.display === "block" && silverOreHeader.style.display === "block" && goldOreHeader.style.display === "block") {
            unlockWrapper.style.display = "none";
            toggleUnlockBtn.style.display = "none";
        }
    }
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