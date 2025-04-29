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
  const rate = Math.floor(Math.random() * 181) + 20;
  return { freelancerName, freelancerOccupations, rate };
}

const freelancerTag = Array.from(
  { length: NUM_FREELANCERS },
  makeFreelancerQuote
);
console.log(freelancerTag);

// Average Rate
function getAverageRate() {
  const justPrice = freelancerTag.map(({ rate }) => rate);
  const sumPrice = Object.values(justPrice).reduce((acc, curr) => acc + curr);
  return sumPrice / NUM_FREELANCERS;
}
console.log(getAverageRate());

// Full Table
function freelancerTable() {
  const article = document.createElement("article");
  article.classList.add("table-container");

  const table = document.createElement("table");
  table.classList.add("rates");

  const tableHeader = `
    <thead>
        <tr>    
            <th>Name</th>
            <th>Occupation</th>
            <th>Rate</th>
        </tr>
    </thead>
    <tbody></tbody>`;
  table.innerHTML = tableHeader;

  const tbody = table.querySelector("tbody");

  freelancerTag.forEach((freelancer) => {
    const row = document.createElement("tr");
    const content = `
        <td>${freelancer.freelancerName}</td>
        <td>${freelancer.freelancerOccupations}</td>
        <td>$${freelancer.rate}</td>`;
    row.innerHTML = content;
    tbody.appendChild(row);
  });
  article.appendChild(table);
  return article;
}

// Render
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Freelancer Forum</h1>
  <p>The average rate is $${getAverageRate(freelancerTag)}</p>`;

  const table = freelancerTable(freelancerTag);
  $app.appendChild(table);
}

render();
