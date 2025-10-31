// CMPM 121 Smelly Code Activity - Jenalee Nguyen

// This variable keeps track of the counter
let counter: number = 0;

document.body.innerHTML = `
  <h1>"CMPM 121 Project"</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="inc">Click Me!</button>
  <button id="dec">Decrement</button>
  <button id="reset">Reset</button>
`;

function updateCounter(change: number, counterEl: HTMLElement): void {
  counter += change;
  counterEl.innerHTML = `${counter}`;
  document.title = "Clicked " + counter;
  document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
}

function setupCounter(): void {
  // Get the increment button element from the document
  const incBtn = document.getElementById("inc");
  // Get the decrement button element from the document
  const decBtn = document.getElementById("dec");
  // Get the reset button element from the document
  const resetBtn = document.getElementById("reset");
  // Get the counter span element from the document
  const counterEl = document.getElementById("counter");

  if (!incBtn || !decBtn || !resetBtn || !counterEl) {
    console.error("One or more elements are missing from the DOM.");
    return;
  }

  // Add click event to the increment button
  incBtn.addEventListener("click", () => updateCounter(1, counterEl));

  // Add click event to the decrement button
  decBtn.addEventListener("click", () => updateCounter(-1, counterEl));

  // Add click event to the reset button
  resetBtn.addEventListener("click", () => {
    counter = 0;
    updateCounter(0, counterEl); // reuses helper for consistency
  });
}

// Start the counter app
setupCounter();
