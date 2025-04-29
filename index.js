/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// SETTING UP THE RANDOMIZE OBJECT
function makeFreelancerQuote() {
  const freelancerName = NAMES[Math.floor(Math.random() * NAMES.length)];
  const freelancerOccupations =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const price = Math.floor(Math.random() * 181) + 20;
  return { freelancerName, freelancerOccupations, price };
}

const freelancerTag = Array.from(
  { length: NUM_FREELANCERS },
  makeFreelancerQuote
);
console.log(freelancerTag);

// Average Rate
function getAverageRate() {
  const justPrice = freelancerTag.map(({ price }) => price);
  const sumPrice = Object.values(justPrice).reduce((acc, curr) => acc + curr);
  return sumPrice / NUM_FREELANCERS;
}
console.log(getAverageRate());

// Single Row
function freelancerRow(row) {
    const rowContainer = document.createElement("table");
    rowContainer.classList.add("row");
    // const content = 
}


// Render
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `<h1>Freelancer Forum</h1><p>The average rate is $${getAverageRate(
    freelancerTag
  )}</p>`;
}
render();
