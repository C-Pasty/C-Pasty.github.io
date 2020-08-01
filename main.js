// Mining button Variables
var mineCopperOreBtn = document.getElementById("mine-copper-ore-btn");
var mineIronOreBtn = document.getElementById("mine-iron-ore-btn");
var mineSilverOreBtn = document.getElementById("mine-silver-ore-btn");
var mineGoldOreBtn = document.getElementById("mine-gold-ore-btn");
var mineMithrilOreBtn = document.getElementById("mine-mithril-ore-btn");

// Smithing button Variables
var smithCopperBarBtn = document.getElementById("smith-copper-bar-btn");
var smithIronBarBtn = document.getElementById("smith-iron-bar-btn");
var smithSilverBarBtn = document.getElementById("smith-silver-bar-btn");
var smithGoldBarBtn = document.getElementById("smith-gold-bar-btn");
var smithMithrilBarBtn = document.getElementById("smith-mithril-bar-btn");

// Inventory Variables
// Ores
var copperOreInventory = document.getElementById("total-copper-ore");
var ironOreInventory = document.getElementById("total-iron-ore");
var silverOreInventory = document.getElementById("total-silver-ore");
var goldOreInventory = document.getElementById("total-gold-ore");
var mithrilOreInventory = document.getElementById("total-mithril-ore");
// Bars
var copperBarsInventory = document.getElementById("total-copper-bars");
var ironBarsInventory = document.getElementById("total-iron-bars");
var silverBarsInventory = document.getElementById("total-silver-bars");
var goldBarsInventory = document.getElementById("total-gold-bars");
var mithrilBarsInventory = document.getElementById("total-mithril-bars");

// Sell Variables Buttons

var sellCopperOre = document.getElementById("copper-ore-sell");
var sellCopperBar = document.getElementById("copper-bar-sell");
var sellIronOre = document.getElementById("iron-ore-sell");
var sellIronBar = document.getElementById("iron-bar-sell");
var sellSilverOre = document.getElementById("silver-ore-sell");
var sellSilverBar = document.getElementById("silver-bar-sell");
var sellGoldOre = document.getElementById("gold-ore-sell");
var sellGoldBar = document.getElementById("gold-bar-sell");
var sellMithrilOre = document.getElementById("mithril-ore-sell");
var sellMithrilBar = document.getElementById("mithril-bar-sell");

// Mining box variables to hide and show based on progress in game

var copperBarHeader = document.getElementById("copper-bar-header");
var ironOreHeader = document.getElementById("iron-ore-header");
var ironBarHeader = document.getElementById("iron-bar-header");
var silverOreHeader = document.getElementById("silver-ore-header");
var silverBarHeader = document.getElementById("silver-bar-header");
var goldOreHeader = document.getElementById("gold-ore-header");
var goldBarHeader = document.getElementById("gold-bar-header");
var mithrilOreHeader = document.getElementById("mithril-ore-header");
var mithrilBarHeader = document.getElementById("mithril-bar-header");

// Gold Variable

var totalGold = document.getElementById("total-gold");
var gold = 50000000000000000;

// Unlock Variable

var unlockWrapper = document.getElementById("unlock-wrapper");
var unlockNextMineralIron = document.getElementById("unlock-next-mineral-iron");
var unlockNextMineralSilver = document.getElementById("unlock-next-mineral-silver");
var unlockNextMineralGold = document.getElementById("unlock-next-mineral-gold");
var unlockNextMineralMithril = document.getElementById("unlock-next-mineral-mithril");
var unlockNextIronHeader = document.getElementById("unlock-next-iron");
var unlockNextSilverHeader = document.getElementById("unlock-next-silver");
var unlockNextGoldHeader = document.getElementById("unlock-next-gold");
var unlockNextMithrilHeader = document.getElementById("unlock-next-mithril");

// Upgrade Variables

var miningSpeedUpgradeBtn = document.getElementById("mining-speed-upgrade");
var smithingSpeedUpgradeBtn = document.getElementById("smithing-speed-upgrade");
var upgradeOreQuantityBtn = document.getElementById("ore-quantity");

// Ore and Bars per second display

var copperOrePerSecond = document.getElementById("copper-ore-per-second");

// Wrapper Variables

var sellItemsWrapper = document.getElementById("sell-wrapper");
var inventoryWrapper = document.getElementById("inventory-wrapper");
var unlockWrapper = document.getElementById("unlock-wrapper");
var upgradeWrapper = document.getElementById("upgrade-wrapper");
var toggleInventoryBtn = document.getElementById("toggle-inventory");
var toggleShopBtn = document.getElementById("toggle-shop");
var toggleUpgradeBtn = document.getElementById("toggle-upgrades");
var toggleUnlockBtn = document.getElementById("toggle-unlocks");

// Progress bar variables

var copperOreProgress = document.getElementById("copper-progress-ore");
var copperBarProgress = document.getElementById("copper-progress-bar");

var copperOreProgressCounter = 0;
var copperBarProgressCounter = 0;

// Ore variables

var ores = {
    copper: 0,
    iron: 0,
    silver: 0,
    gold: 0,
    mithril: 0
};

// Bar Variables

var bars = {
    copper: 0,
    iron: 0,
    silver: 0,
    gold: 0,
    mithril: 0
};

// Upgradable Variables

var speed = {
    mining: 2000,
    smithing: 5000
};

// Ore prices

var price = {
    copperOre: 5,
    ironOre: 25,
    silverOre: 50,
    goldOre: 75,
    mithrilOre: 250,
    copperBar: 50,
    ironBar: 125,
    silverBar: 250,
    goldBar: 375,
    mithrilBar: 1250
};

// Upgrade prices

var upgrade = {
    iron: 5000,
    silver: 50000,
    gold: 100000,
    mithril: 250000
};

// Upgrade costs

var miningSpeedUpgradeCost = 100;
var smithingSpeedUpgradeCost = 500;
var oreQuantityUpgradeCost = 50000;

// Upgrade ore quantity variable

var oreQuantity = 1;

// Mine Ore Functions 

function mineCopperOre() {
    copperOreProgressBar();
    mineCopperOreBtn.disabled = true;
    mineCopperOreBtn.innerHTML = "Mining";
    mineCopperOreBtn.style.backgroundColor = "grey";
    setTimeout(() => {ores.copper += oreQuantity, mineCopperOre(), copperOreProgressBar();}, speed.mining);
    sellCopperOre.innerHTML = "Sell all for " + ores.copper * price.copperOre;
    copperOreInventory.innerHTML = "Copper Ore: " + ores.copper;
    localStorage.setItem("copperOre", ores.copper);
};

function mineIronOre() {
    mineIronOreBtn.disabled = true;
    mineIronOreBtn.innerHTML = "Mining";
    mineIronOreBtn.style.backgroundColor = "grey";
    setTimeout(() => {ores.iron += oreQuantity, mineIronOre();}, speed.mining);
    sellIronOre.innerHTML = "Sell all for " + ores.iron * price.ironOre;
    ironOreInventory.innerHTML = "Iron Ore: " + ores.iron;
};

function mineSilverOre() {
    mineSilverOreBtn.disabled = true;
    mineSilverOreBtn.innerHTML = "Mining";
    mineSilverOreBtn.style.backgroundColor = "grey";
    setTimeout(() => {ores.silver += oreQuantity, mineSilverOre();}, speed.mining);
    sellSilverOre.innerHTML = "Sell all for " + ores.silver * price.silverOre;
    silverOreInventory.innerHTML = "Silver Ore: " + ores.silver;
};

function mineGoldOre() {
    mineGoldOreBtn.disabled = true;
    mineGoldOreBtn.innerHTML = "Mining";
    mineGoldOreBtn.style.backgroundColor = "grey";
    setTimeout(() => {ores.gold += oreQuantity, mineGoldOre();}, speed.mining);
    sellGoldOre.innerHTML = "Sell all for " + ores.gold * price.goldOre;
    goldOreInventory.innerHTML = "Gold Ore: " + ores.gold;
};

function mineMithrilOre() {
    mineMithrilOreBtn.disabled = true;
    mineMithrilOreBtn.innerHTML = "Mining";
    mineMithrilOreBtn.style.backgroundColor = "grey";
    setTimeout(() => {ores.mithril += oreQuantity, mineMithrilOre();}, speed.mining);
    sellMithrilOre.innerHTML = "Sell all for " + ores.mithril * price.mithrilOre;
    mithrilOreInventory.innerHTML = "Mithril Ore: " + ores.mithril;
};

// Smith Ore Functions

function smithCopperBar() {
    if (ores.copper >= 5) {
        copperBarProgressBar();
        smithCopperBarBtn.disabled = true;
        smithCopperBarBtn.innerHTML = "Smithing";
        smithCopperBarBtn.style.backgroundColor = "grey";
        ores.copper -= 5;
        copperOreInventory.innerHTML = "Copper Ore: " + ores.copper
        setTimeout(() => {bars.copper += 1, copperBarsInventory.innerHTML = "Copper Bars: " + bars.copper;}, speed.smithing);
        setTimeout(() => {copperBarProgressBar(), smithCopperBar();}, speed.smithing);
        sellCopperBar.innerHTML = "Sell all for " + bars.copper * price.copperBar;
    } else if (ores.copper < 5) {
        smithCopperBarBtn.disabled = false;
        smithCopperBarBtn.innerHTML = "Smith Bar";
        smithCopperBarBtn.style.backgroundColor = "black";
        return;
    }
};

function smithIronBar() {
    if (ores.iron >= 5) {
        smithIronBarBtn.disabled = true;
        smithIronBarBtn.innerHTML = "Smithing";
        smithIronBarBtn.style.backgroundColor = "grey"; 
        ores.iron -= 5;
        ironOreInventory.innerHTML = "Iron Ore: " + ores.iron;
        setTimeout(() => {bars.iron += 1, ironBarsInventory.innerHTML = "Iron Bars: " + bars.iron;}, speed.smithing);
        setTimeout(() => {smithIronBar();}, speed.smithing);
        sellIronBar.innerHTML = "Sell all for " + bars.iron * price.ironBar;
    } else if (ores.iron < 5) {
        smithIronBarBtn.disabled = false;
        smithIronBarBtn.innerHTML = "Smith Bar";
        smithIronBarBtn.style.backgroundColor = "black";
        return;
    }
};

function smithSilverBar() {
    if (ores.silver >= 5) {
        smithSilverBarBtn.disabled = true;
        smithSilverBarBtn.innerHTML = "Smithing";
        smithSilverBarBtn.style.backgroundColor = "grey"; 
        ores.silver -= 5;
        silverOreInventory.innerHTML = "Silver Ore: " + ores.silver;
        setTimeout(() => {bars.silver += 1, silverBarsInventory.innerHTML = "Silver Bars: " + bars.silver;}, speed.smithing);
        setTimeout(() => {smithSilverBar();}, speed.smithing);
        sellSilverBar.innerHTML = "Sell all for " + bars.silver * price.silverBar;
    } else if (ores.silver < 5) {
        smithSilverBarBtn.disabled = false;
        smithSilverBarBtn.innerHTML = "Smith Bar";
        smithSilverBarBtn.style.backgroundColor = "black";
        return;
    }
};

function smithGoldBar() {
    if (ores.gold >= 5) {
        smithGoldBarBtn.disabled = true;
        smithGoldBarBtn.innerHTML = "Smithing";
        smithGoldBarBtn.style.backgroundColor = "grey";
        ores.gold -= 5;
        goldOreInventory.innerHTML = "Gold Ore: " + ores.gold;
        setTimeout(() => {bars.gold += 1, goldBarsInventory.innerHTML = "Gold Bars: " + bars.gold;}, speed.smithing);
        setTimeout(() => {smithGoldBar();}, speed.smithing);
        sellGoldBar.innerHTML = "Sell all for " + bars.gold * price.goldBar;
    } else if (ores.gold < 5) {
        smithGoldBarBtn.disabled = false;
        smithGoldBarBtn.innerHTML = "Smith Bar";
        smithGoldBarBtn.style.backgroundColor = "black";
        return;
    }
};

function smithMithrilBar() {
    if (ores.mithril >= 5) {
        smithMithrilBarBtn.disabled = true;
        smithMithrilBarBtn.innerHTML = "Smithing";
        smithMithrilBarBtn.style.backgroundColor = "grey"; 
        ores.mithril -= 5;
        mithrilOreInventory.innerHTML = "Mithril Ore: " + ores.mithril;
        setTimeout(() => {bars.mithril += 1, mithrilBarsInventory.innerHTML = "Mithril Bars: " + bars.mithril;}, speed.smithing);
        setTimeout(() => {smithMithrilBar();}, speed.smithing);
        sellMithrilBar.innerHTML = "Sell all for " + bars.mithril * price.mithrilBar;
    } else if (ores.mithril < 5) {
        smithMithrilBarBtn.disabled = false;
        smithMithrilBarBtn.innerHTML = "Smith Bar";
        smithMithrilBarBtn.style.backgroundColor = "black";
        return;
    }
};

// Unlock Function

function unlockIron() {
    if (ironOreHeader.style.visibility = "hidden" && gold >= upgrade.iron) {
        unlockNextMineralIron.disabled = true;
        gold -= upgrade.iron;
        totalGold.innerHTML = "Gold: " + gold;
        ironOreHeader.style.visibility = "visible";
        ironBarHeader.style.visibility = "visible";
        ironBarsInventory.style.display = "block";
        ironOreInventory.style.display = "block";
        sellIronOre.style.display = "block";
        sellIronBar.style.display = "block";
        unlockNextMineralSilver.style.display = "block";
        unlockNextSilverHeader.style.display = "block";
        unlockNextMineralIron.style.display = "none";
        unlockNextIronHeader.style.display = "none";
    }
};

function unlockSilver() {
    if (silverOreHeader.style.visibility = "hidden" && gold >= upgrade.silver) {
        unlockNextMineralSilver.disabled = true;
        gold -= upgrade.silver;
        totalGold.innerHTML = "Gold: " + gold;
        silverOreHeader.style.visibility = "visible";
        silverBarHeader.style.visibility = "visible";
        silverBarsInventory.style.display = "block";
        silverOreInventory.style.display = "block";
        sellSilverOre.style.display = "block";
        sellSilverBar.style.display = "block";
        unlockNextMineralGold.style.display = "block";
        unlockNextGoldHeader.style.display = "block";
        unlockNextMineralSilver.style.display = "none";
        unlockNextSilverHeader.style.display = "none";
    }
};

function unlockGold() {
    if (silverOreHeader.style.visibility = "hidden" && gold >= upgrade.gold) {
        unlockNextMineralGold.disabled = true;
        gold -= upgrade.gold;
        totalGold.innerHTML = "Gold: " + gold;
        goldOreHeader.style.visibility = "visible";
        goldBarHeader.style.visibility = "visible";
        goldBarsInventory.style.display = "block";
        goldOreInventory.style.display = "block";
        sellGoldOre.style.display = "block";
        sellGoldBar.style.display = "block";
        unlockNextMineralMithril.style.display = "block";
        unlockNextMithrilHeader.style.display = "block";
        unlockNextMineralGold.style.display = "none";
        unlockNextGoldHeader.style.display = "none";
    }
};

function unlockMithril() {
    if (silverOreHeader.style.visibility = "hidden" && gold >= upgrade.mithril) {
        unlockNextMineralMithril.disabled = true;
        gold -= upgrade.mithril;
        totalGold.innerHTML = "Gold: " + gold;
        mithrilOreHeader.style.visibility = "visible";
        mithrilBarHeader.style.visibility = "visible";
        mithrilBarsInventory.style.display = "block";
        mithrilOreInventory.style.display = "block";        
        sellMithrilOre.style.display = "block";
        sellMithrilBar.style.display = "block";
        if (ironOreHeader.style.visibility === "visible" && silverOreHeader.style.visibility === "visible" && goldOreHeader.style.visibility === "visible") {
            unlockWrapper.style.display = "none";
            toggleUnlockBtn.style.display = "none";
        }
    }
};

// Sell Ore and Bars functions

function sellAllCopperOre() {
    if (ores.copper > 0) {
        gold = gold + price.copperOre * ores.copper;
        ores.copper -= ores.copper;
        totalGold.innerHTML = "Gold: " + gold;
        copperOreInventory.innerHTML = "Copper Ore: " + ores.copper;
        sellCopperOre.innerHTML = "Sell all for " + ores.copper * price.copperOre;
    }
};

function sellAllCopperBars() {
    if (bars.copper > 0) {
        gold = gold + price.copperBar * bars.copper;
        bars.copper -= bars.copper;
        totalGold.innerHTML = "Gold: " + gold;
        copperBarsInventory.innerHTML = "Copper Bars: " + bars.copper;
        sellCopperBar.innerHTML = "Sell all for " + bars.copper * price.copperBar;
    }
};

function sellAllIronOre() {
    if (ores.iron > 0) {
        gold = gold + price.ironOre * ores.iron;
        ores.iron -= ores.iron;
        totalGold.innerHTML = "Gold: " + gold;
        ironOreInventory.innerHTML = "Iron Ore: " + ores.iron;
        sellIronOre.innerHTML = "Sell all for " + ores.iron * price.ironOre;
    }
};

function sellAllIronBars() {
    if (bars.iron > 0) {
        gold = gold + price.ironBar * bars.iron;
        bars.iron -= bars.iron;
        totalGold.innerHTML = "Gold: " + gold;
        ironBarsInventory.innerHTML = "Iron Bars: " + bars.iron;
        sellIronBar.innerHTML = "Sell all for " + bars.iron * price.ironBar;
    }
};

function sellAllSilverOre() {
    if (ores.silver > 0) {
        gold = gold + price.silverOre * ores.silver;
        ores.silver -= ores.silver;
        totalGold.innerHTML = "Gold: " + gold;
        silverOreInventory.innerHTML = "Silver Ore: " + ores.silver;
        sellSilverOre.innerHTML = "Sell all for " + ores.silver * price.silverOre;
    }
};

function sellAllSilverBars() {
    if (bars.silver > 0) {
        gold = gold + price.silverBar * bars.silver;
        bars.silver -= bars.silver;
        totalGold.innerHTML = "Gold: " + gold;
        silverBarsInventory.innerHTML = "Silver Bars: " + bars.silver;
        sellSilverBar.innerHTML = "Sell all for " + bars.silver * price.silverBar;
    }
};

function sellAllGoldOre() {
    if (ores.gold > 0) {
        gold = gold + price.goldOre * ores.gold;
        ores.gold -= ores.gold;
        totalGold.innerHTML = "Gold: " + gold;
        goldOreInventory.innerHTML = "Gold Ore: " + ores.gold;
        sellGoldOre.innerHTML = "Sell all for " + ores.gold * price.goldOre;
    }
};

function sellAllGoldBars() {
    if (bars.gold > 0) {
        gold = gold + price.goldBar * bars.gold;
        bars.gold -= bars.gold;
        totalGold.innerHTML = "Gold: " + gold;
        goldBarsInventory.innerHTML = "Gold Bars: " + bars.gold;
        sellGoldBar.innerHTML = "Sell all for " + bars.gold * price.goldBar;
    }
};

function sellAllMithrilOre() {
    if (ores.mithril > 0) {
        gold = gold + price.mithrilOre * ores.mithril;
        ores.mithril -= ores.mithril;
        totalGold.innerHTML = "Gold: " + gold;
        mithrilOreInventory.innerHTML = "Mithril Ore: " + ores.mithril;
        sellMithrilOre.innerHTML = "Sell all for " + ores.mithril * price.mithrilOre;
    }
};

function sellAllMithrilBars() {
    if (bars.mithril > 0) {
        gold = gold + price.mithrilBar * bars.mithril;
        bars.mithril -= bars.mithril;
        totalGold.innerHTML = "Gold: " + gold;
        mithrilBarsInventory.innerHTML = "Mithril Bars: " + bars.mithril;
        sellMithrilBar.innerHTML = "Sell all for " + bars.mithril * price.mithrilBar;
    }
};

// Upgrade mining speed

function upgradeMiningSpeed() {
    if (gold >= miningSpeedUpgradeCost && speed.mining > 100) {
        gold -= miningSpeedUpgradeCost;
        totalGold.innerHTML = "Gold: " + gold;
        miningSpeedUpgradeCost *= 2;
        miningSpeedUpgradeBtn.innerHTML = "Upgrade for " + miningSpeedUpgradeCost + " Gold";
        speed.mining -= 100;
        if (speed.mining <= 100) {
            miningSpeedUpgradeBtn.innerHTML = "Mining Speed Maxed";
            miningSpeedUpgradeBtn.style.backgroundColor = "grey";
            miningSpeedUpgradeBtn.disabled = true;
        }
    }
};

// Upgrade smithing speed

function upgradeSmithingSpeed() {
    if (gold >= smithingSpeedUpgradeCost && speed.smithing > 250) {
        gold -= smithingSpeedUpgradeCost;
        totalGold.innerHTML = "Gold: " + gold;
        smithingSpeedUpgradeCost *= 2;
        smithingSpeedUpgradeBtn.innerHTML = "Upgrade for " + smithingSpeedUpgradeCost + " Gold";
        speed.smithing -= 250;
        if (speed.smithing <= 250) {
            smithingSpeedUpgradeBtn.innerHTML = "Smithing Speed Maxed";
            smithingSpeedUpgradeBtn.style.backgroundColor = "grey";
            smithingSpeedUpgradeBtn.disabled = true;
        }
    } 
};

// Upgrade amount of ore gained

function upgradeOreQuantity() {
    if ( gold >= oreQuantityUpgradeCost) {
        gold -= oreQuantityUpgradeCost;
        totalGold.innerHTML = "Gold: " + gold;
        oreQuantityUpgradeCost += 50000;
        upgradeOreQuantityBtn.innerHTML = "Upgrade for " + oreQuantityUpgradeCost + " Gold";
        oreQuantity += 1;
        if (oreQuantity >= 10) {
            upgradeOreQuantityBtn.innerHTML = "Ore Quantity Maxed";
            upgradeOreQuantityBtn.style.backgroundColor = "grey";
            upgradeOreQuantityBtn.disabled = true;
        }
    }
};

// Toggle display function

function toggleInventory() {
    if (inventoryWrapper.style.display === "none") {
      inventoryWrapper.style.display = "block";
      toggleInventoryBtn.style.backgroundColor = "black";
    } else {
      inventoryWrapper.style.display = "none";
      toggleInventoryBtn.style.backgroundColor = "grey";
    }
};

function toggleUpgrades() {
    if (upgradeWrapper.style.display === "none") {
      upgradeWrapper.style.display = "block";
      toggleUpgradeBtn.style.backgroundColor = "black";
    } else {
      upgradeWrapper.style.display = "none";
      toggleUpgradeBtn.style.backgroundColor = "grey";
    }
};

function toggleUnlocks() {
    if (unlockWrapper.style.display === "none") {
      unlockWrapper.style.display = "block";
      toggleUnlockBtn.style.backgroundColor = "black";
    } else {
      unlockWrapper.style.display = "none";
      toggleUnlockBtn.style.backgroundColor = "grey";
    }
};

// Progress bar functions

function copperOreProgressBar() {
  if (copperOreProgressCounter == 0) {
    copperOreProgressCounter = 1;
    var width = 1;
    var id = setInterval(frame, speed.mining / 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        copperOreProgressCounter = 0;
      } else {
        width++;
        copperOreProgress.style.width = width + "%";
      }
    }
  }
};

function copperBarProgressBar() {
if (copperBarProgressCounter == 0) {
    copperBarProgressCounter = 1;
    var width = 1;
    var id = setInterval(frame, speed.smithing / 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        copperBarProgressCounter = 0;
      } else {
        width++;
        copperBarProgress.style.width = width + "%";
      }
    }
  }
};

// Initilze function

function init() {
    totalGold.innerHTML = "Gold: " + gold;
    copperOreInventory.innerHTML = "Copper Ore: " + ores.copper;
    ironOreInventory.innerHTML = "Iron Ore: " + ores.iron;
    silverOreInventory.innerHTML = "Silver Ore: " + ores.silver;
    goldOreInventory.innerHTML = "Gold Ore: " + ores.gold;
    mithrilOreInventory.innerHTML = "Mithril Ore: " + ores.mithril;
    copperBarsInventory.innerHTML = "Copper Bars: " + bars.copper;
    ironBarsInventory.innerHTML = "Iron Bars: " + bars.iron;
    silverBarsInventory.innerHTML = "Silver Bars: " + bars.silver;
    goldBarsInventory.innerHTML = "Gold Bars: " + bars.gold;
    mithrilBarsInventory.innerHTML = "Mithril Bars: " + bars.mithril;
    unlockNextIronHeader.innerHTML = "Unlock Iron for " + upgrade.iron;
    unlockNextSilverHeader.innerHTML = "Unlock Silver for " + upgrade.silver;
    unlockNextGoldHeader.innerHTML = "Unlock Gold for " + upgrade.gold;
    unlockNextMithrilHeader.innerHTML = "Unlock Mithril for " + upgrade.mithril;
    miningSpeedUpgradeBtn.innerHTML = "Upgrade for " + miningSpeedUpgradeCost + " Gold";
    upgradeOreQuantityBtn.innerHTML = "Upgrade for " + oreQuantityUpgradeCost + " Gold";
    ironOreHeader.style.visibility = "hidden";
    ironBarHeader.style.visibility = "hidden";
    silverOreHeader.style.visibility = "hidden";
    silverBarHeader.style.visibility = "hidden";
    goldOreHeader.style.visibility = "hidden";
    goldBarHeader.style.visibility = "hidden";
    mithrilOreHeader.style.visibility = "hidden";
    mithrilBarHeader.style.visibility = "hidden";
    sellCopperOre.innerHTML = "Sell all for " + ores.copper * price.copperOre;
    sellCopperBar.innerHTML = "Sell all for " + bars.copper * price.copperBar;
    sellIronOre.innerHTML = "Sell all for " + ores.iron * price.ironOre;
    sellIronBar.innerHTML = "Sell all for " + bars.iron * price.ironBar;
    sellSilverOre.innerHTML = "Sell all for " + ores.silver * price.silverOre;
    sellSilverBar.innerHTML = "Sell all for " + bars.silver * price.silverBar;
    sellGoldOre.innerHTML = "Sell all for " + ores.gold * price.goldOre;
    sellGoldBar.innerHTML = "Sell all for " + bars.gold * price.goldBar;
    sellMithrilOre.innerHTML = "Sell all for " + ores.mithril * price.mithrilOre;
    sellMithrilBar.innerHTML = "Sell all for " + bars.mithril * price.mithrilBar;
    ironBarsInventory.style.display = "none";
    ironOreInventory.style.display = "none";
    silverBarsInventory.style.display = "none";
    silverOreInventory.style.display = "none";
    goldBarsInventory.style.display = "none";
    goldOreInventory.style.display = "none";
    mithrilBarsInventory.style.display = "none";
    mithrilOreInventory.style.display = "none";
    sellIronOre.style.display = "none";
    sellIronBar.style.display = "none";
    sellSilverOre.style.display = "none";
    sellSilverBar.style.display = "none";
    sellGoldOre.style.display = "none";
    sellGoldBar.style.display = "none";
    sellMithrilOre.style.display = "none";
    sellMithrilBar.style.display = "none";
    unlockNextMineralSilver.style.display = "none";
    unlockNextSilverHeader.style.display = "none";
    unlockNextMineralGold.style.display = "none";
    unlockNextGoldHeader.style.display = "none";
    unlockNextMithrilHeader.style.display = "none";
    unlockNextMineralMithril.style.display = "none";
};

init();

// Onclicks for buttons to run functions

mineCopperOreBtn.onclick = mineCopperOre;
mineIronOreBtn.onclick = mineIronOre;
mineSilverOreBtn.onclick = mineSilverOre;
mineGoldOreBtn.onclick = mineGoldOre;
mineMithrilOreBtn.onclick = mineMithrilOre;
smithCopperBarBtn.onclick = smithCopperBar;
smithIronBarBtn.onclick = smithIronBar;
smithSilverBarBtn.onclick = smithSilverBar;
smithGoldBarBtn.onclick = smithGoldBar;
smithMithrilBarBtn.onclick = smithMithrilBar;
unlockNextMineralIron.onclick = unlockIron;
unlockNextMineralSilver.onclick = unlockSilver;
unlockNextMineralGold.onclick = unlockGold;
unlockNextMineralMithril.onclick = unlockMithril;
sellCopperOre.onclick = sellAllCopperOre;
sellCopperBar.onclick = sellAllCopperBars;
sellIronOre.onclick = sellAllIronOre;
sellIronBar.onclick = sellAllIronBars;
sellSilverOre.onclick = sellAllSilverOre;
sellSilverBar.onclick = sellAllSilverBars;
sellGoldOre.onclick = sellAllGoldOre;
sellGoldBar.onclick = sellAllGoldBars;
sellMithrilOre.onclick = sellAllMithrilOre;
sellMithrilBar.onclick = sellAllMithrilBars;
miningSpeedUpgradeBtn.onclick = upgradeMiningSpeed;
smithingSpeedUpgradeBtn.onclick = upgradeSmithingSpeed;
upgradeOreQuantityBtn.onclick = upgradeOreQuantity;
toggleInventoryBtn.onclick = toggleInventory;
toggleUpgradeBtn.onclick = toggleUpgrades;
toggleUnlockBtn.onclick = toggleUnlocks;