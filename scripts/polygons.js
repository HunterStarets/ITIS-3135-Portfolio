function submitButton() {
  var userInput = document.getElementById("sidesInput").value;
  var numSides = validateEntry(userInput);
  var outputArea = document.getElementById("output");

  if (numSides == null) {
    outputHeader.innerHTML = "Error";
    outputParagraph.innerHTML =
      "Please input <b>valid</b> parameters, a whole number between <b>1</b> and <b>10</b>";
  } else {
    var polygonName = getShape(numSides);
    outputHeader.innerHTML = polygonName;
    outputParagraph.innerHTML =
      "A shape with <b>" + numSides + " sides</b> is a <b>" + polygonName + ".";
  }
}

function getShape(numSides) {
  let polygon;
  if (numSides === 1) {
    polygon = "Henagon";
  } else if (numSides === 2) {
    polygon = "Digon";
  } else if (numSides === 3) {
    polygon = "Trigon";
  } else if (numSides === 4) {
    polygon = "Tetragon";
  } else if (numSides === 5) {
    polygon = "Pentagon";
  } else if (numSides === 6) {
    polygon = "Hexagon";
  } else if (numSides === 7) {
    polygon = "Heptagon";
  } else if (numSides === 8) {
    polygon = "Octagon";
  } else if (numSides === 9) {
    polygon = "Nonagon";
  } else {
    polygon = "Decagon";
  }
  return polygon;
}

function validateEntry(numSides) {
  numSides = Math.abs(numSides);
  if (1 <= numSides && numSides <= 10) {
    return Math.round(numSides);
  } else {
    return null;
  }
}