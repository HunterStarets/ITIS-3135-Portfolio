const coachesContainer = document.getElementById("coaches-container");

fetch("data/coaches.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((coach) => {
      const coachCard = document.createElement("div");
      coachCard.className = "coach-card";

      const coachImg = document.createElement("img");
      coachImg.src = coach.image;
      coachImg.alt = coach.name;

      const coachInfo = document.createElement("div");
      coachInfo.className = "coach-info";

      const coachName = document.createElement("h2");
      coachName.textContent = coach.name;

      const coachTitle = document.createElement("h3");
      coachTitle.textContent = coach.title;

      const coachBio = document.createElement("p");
      coachBio.textContent = coach.bio;

      coachInfo.appendChild(coachName);
      coachInfo.appendChild(coachTitle);
      coachInfo.appendChild(coachBio);

      coachCard.appendChild(coachImg);
      coachCard.appendChild(coachInfo);

      coachesContainer.appendChild(coachCard);
    });
  })
  .catch((error) => console.error(error));
