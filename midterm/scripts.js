const button = document.getElementById("button1");
button.addEventListener("click", () => {
  document.getElementById("id").innerHTML = "boogity";
});
const section = document.getElementById("s2");
section.addEventListener("click", () => {
    section.style.display = "none";
});
function changeHeading() {
  const h2 = document.getElementById("h2");
  h2.innerHTML = "Heading 22222";
  h2.style.color = "green";

}
