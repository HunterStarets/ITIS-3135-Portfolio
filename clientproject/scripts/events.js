const eventsData = [
  {
    title: "Practice #1",
    date: "2023-09-01",
    description: "First rugby practice of the fall semester.",
  },
  {
    title: "Fundraiser Dinner",
    date: "2023-09-15",
    description: "Dinner fundraiser for the rugby club.",
  },
  {
    title: "Practice #2",
    date: "2023-09-16",
    description: "Second rugby practice of the fall semester.",
  },
  {
    title: "Game vs. NC State",
    date: "2023-09-23",
    description: "Rugby match against the NC State team.",
  },
  {
    title: "Club Meeting",
    date: "2023-09-28",
    description: "Monthly meeting for the UNCC Rugby Club.",
  },
  {
    title: "Game vs. Chapel Hill",
    date: "2023-10-07",
    description: "Rugby match against the Chapel Hill team.",
  },
  {
    title: "Homecoming Parade",
    date: "2023-10-14",
    description: "Participation in the UNCC Homecoming parade.",
  },
  {
    title: "Game vs. UNCG",
    date: "2023-10-21",
    description: "Rugby match against the UNCG team.",
  },
  {
    title: "End of Season Banquet",
    date: "2023-11-04",
    description: "Banquet to celebrate the end of the rugby season.",
  },
];

const eventsContainer = document.getElementById("eventsContainer");

// Modal Elements
const eventModal = document.getElementById("eventModal");
const closeModal = document.getElementsByClassName("close")[0];

closeModal.addEventListener("click", () => {
  eventModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === eventModal) {
    eventModal.style.display = "none";
  }
});

function openModal(eventData) {
  document.getElementById("modalTitle").innerText = eventData.title;
  document.getElementById("modalDate").innerText = eventData.date;
  document.getElementById("modalDescription").innerText = eventData.description;
  eventModal.style.display = "block";
}

eventsData.forEach((event) => {
  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event");

  const eventTitle = document.createElement("h3");
  eventTitle.innerText = event.title;
  eventDiv.appendChild(eventTitle);

  const eventDate = document.createElement("p");
  eventDate.innerText = event.date;
  eventDiv.appendChild(eventDate);

  eventDiv.addEventListener("click", () => {
    openModal(event);
  });

  eventsContainer.appendChild(eventDiv);
});
