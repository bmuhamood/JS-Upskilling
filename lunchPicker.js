// Step 1: Declare an empty array
let lunches = [];

// Step 2-5: Add lunch to the end
function addLunchToEnd(menu, lunchItem) {
  menu.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return menu;
}

// Step 6-9: Add lunch to the start
function addLunchToStart(menu, lunchItem) {
  menu.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return menu;
}

// Step 10-14: Remove last lunch
function removeLastLunch(menu) {
  if (menu.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = menu.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  }
  return menu;
}

// Step 15-19: Remove first lunch
function removeFirstLunch(menu) {
  if (menu.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = menu.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  }
  return menu;
}

// Step 21-24: Get random lunch
function getRandomLunch(menu) {
  if (menu.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * menu.length);
    const lunch = menu[randomIndex];
    console.log(`Randomly selected lunch: ${lunch}`);
  }
}

// Step 25-29: Show lunch menu
function showLunchMenu(menu) {
  if (menu.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${menu.join(', ')}`);
  }
}
