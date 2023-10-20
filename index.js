const inputFlavors = prompt(
  "Please enter your desired flavors in a comma-separated list!",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const flavorList = inputFlavors.split(",");
const flavorObject = {};
for (let i = 0; i < flavorList.length; i++) {
  const items = flavorList[i];
  if (flavorObject[items] === undefined) {
    flavorObject[items] = 0;
  }
  flavorObject[items]++;
}
console.log(`Hello Customer! Here is what you ordered:`);
console.log(flavorObject);
