let persons = [];
let salaries = [];

function addSalary() {
  let employee = document.getElementById("employee").value;
  let salary = document.getElementById("salary").value;
  if (employee == "" || salary == "") {
    alert("Please input an Employee name AND Salary!");
    return;
  }
  if (isNaN(parseFloat(salary))) {
    alert("Please input a valid Salary");
    return;
  }
  persons.push(employee);
  salaries.push(parseFloat(salary));
  document.getElementById("salary").value = "";
  document.getElementById("employee").focus();
}

function displayResults() {
  let total = 0;
  let largest = 0;
  let average;
  for (var i = 0; i < salaries.length; i++) {
    total += salaries[i];
    if (salaries[i] > largest) {
      largest = salaries[i];
    }
  }
  average = total / salaries.length;
  let output =
    "The largest salary is: " + largest + ". The average salary is: " + average;
  document.getElementById("results-header").innerHTML = "Salary Information";
  document.getElementById("results-body").innerHTML = output;
}

function displaySalary() {
  table = document.getElementById("results-table");
  table.innerHTML = "<th>Employee</th><th>Salary</th>";
  for (var i = 0; i < persons.length; i++) {
    let row = table.insertRow(-1);
    let nameCell = row.insertCell(0);
    nameCell.innerHTML = persons[i];
    let salaryCell = row.insertCell(1);
    salaryCell.innerHTML = salaries[i];
  }
  displayResults();
}
