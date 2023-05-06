const tableData = [
  {
    team: "UNCC",
    wins: 7,
    losses: 2,
    pointsScored: 310,
    pointsConceded: 180,
  },
  {
    team: "UNCG",
    wins: 5,
    losses: 4,
    pointsScored: 250,
    pointsConceded: 220,
  },
  {
    team: "NC State",
    wins: 6,
    losses: 3,
    pointsScored: 290,
    pointsConceded: 210,
  },
  {
    team: "Furman",
    wins: 2,
    losses: 7,
    pointsScored: 190,
    pointsConceded: 300,
  },
  {
    team: "ECU",
    wins: 4,
    losses: 5,
    pointsScored: 230,
    pointsConceded: 240,
  },
];

function populateTable() {
  const table = document.getElementById("standings-table");
  const tbody = table.getElementsByTagName("tbody")[0];

  tableData.forEach((row) => {
    const tr = document.createElement("tr");
    for (const key in row) {
      const td = document.createElement("td");
      td.textContent = row[key];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
}

function sortTable(columnIndex) {
  tableData.sort((a, b) => {
    const keys = ["team", "wins", "losses", "pointsScored", "pointsConceded"];
    return a[keys[columnIndex]] > b[keys[columnIndex]] ? 1 : -1;
  });

  const table = document.getElementById("standings-table");
  const tbody = table.getElementsByTagName("tbody")[0];

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  populateTable();
}

populateTable();
