$(document).ready(function () {
  fetchCoaches();

  function fetchCoaches() {
    $.ajax({
      url: "./data/coaches.json",
      type: "GET",
      dataType: "json",
      success: function (data) {
        displayCoaches(data);
      },
      error: function () {
        console.error("Failed to fetch coach data");
      },
    });
  }

  function displayCoaches(coaches) {
    const container = $("#coaches-container");
    coaches.forEach(function (coach) {
      const coachCard = `
              <div class="coach-card">
                  <a href="${coach.image}" data-lightbox="coaches-gallery" data-title="${coach.name}">
                      <img src="${coach.image}" alt="${coach.name}" />
                  </a>
                  <h3>${coach.name}</h3>
                  <p>${coach.description}</p>
              </div>
          `;
      container.append(coachCard);
    });

    // Re-initialize Lightbox after adding coach cards dynamically
    lightbox.init();
  }
});
