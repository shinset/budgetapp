console.log("Hello World");
// webinar https://www.crowdcast.io/e/english-build-a-budget
// Starter code source https://codesandbox.io/s/jolly-visvesvaraya-jpc7u
// Final code solution https://codesandbox.io/s/crazy-meadow-5kwdb
// Git solution https://github.com/josecarneiro/ironhack-webinar-july-2020

// DOM manipulation using  methods
// using following methods to manipulate the html code dynamicaly
// document.getElementById('')
// document.querySelector('')

// Target the following

// Total Balance
// start creating variables that will store html element tag for reference to retrieve their value later
const balanceElement = document.getElementById("balance");
// we check if the variable is retrieving the correct html element  with console.log
console.log(balanceElement);

// Value Input
const valueInputElement = document.querySelector("input");
console.log(valueInputElement);

// Income / Expense
const selectElement = document.querySelector("select");
console.log(selectElement);

// ADD button
const additionButtonElement = document.querySelector("footer button");
console.log(additionButtonElement);

// Entry List
const entryListElement = document.querySelector("section ul");
console.log(entryListElement);

// create  a function that take amount &  operation variables to append it later to the list of breakdown by creating the html element
function addEntry(amount, operation) {
  //start  creating variables that will generate the html document for appending to the entry list
  const listEntry = document.createElement("li"); // create the list item  html element 'LI'
  listEntry.classList.add(operation); //  add & apply a css style

  const listEntryValue = document.createElement("strong"); // create the 'strong' html element  for the amount value

  listEntryValue.innerText = amount + "$"; //insert the stored value of amount variable into the 'STRONG' html element

  const listEntryDesc = document.createElement("em"); // create the 'em' html element for the description
  listEntryDesc.innerText = "desc"; // insert a description text

  const listEntryOperator = document.createElement("span"); // create the "span" html element for the operator

  // create an if condition statement to transform the operation value (income / expense) into + or - string to fill the span element with plus or minus
  if (operation === "income") {
    listEntryOperator.innerText = "+";
  } else if (operation === "expense") {
    listEntryOperator.innerText = "-";
  }

  // start adding the html tag creating the entry breakdown
  listEntry.appendChild(listEntryDesc);

  listEntry.appendChild(listEntryOperator);

  listEntry.appendChild(listEntryValue); // Adding listEntryValue variable (contain the 'STRONG' html element)  as child html element of listEntry variable ( contain  the LI html element)

  entryListElement.appendChild(listEntry); // Adding the listEntry variable (contain LI html tag) as child html node of entryListElement (contain UL html)
}

function updateBalance() {}

// we want an interactive button when clicked by using "onclick"
// this button will execute a function
additionButtonElement.onclick = function() {
  console.log("Clicked !");

  //capture & store the value of the input in the amount variable
  const amount = valueInputElement.value;

  // capture the value of the type of operation  (income / expense)
  const operation = selectElement.value;

  console.log(amount, operation);

  // call a fonction taking amount and operation to add entry
  addEntry(amount, operation);

  // reset the  input field to empty
  valueInputElement.value = "";

  //call function to update the balance
  updateBalance();
};
