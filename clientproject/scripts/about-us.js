$(document).ready(function () {
  fetchAboutUsData();

  function fetchAboutUsData() {
      $.ajax({
          url: 'about_us_data.json',
          type: 'GET',
          dataType: 'json',
          success: function (data) {
              displayAboutUsContent(data);
          },
          error: function () {
              console.error('Failed to fetch about us data');
          }
      });
  }

  function displayAboutUsContent(content) {
      const container = $('#content-container');
      content.forEach(function (section, index) {
          const sectionHtml = `
              <h2>${section.title}</h2>
              <div id="tabs-${index + 1}">
                  <p>${section.content}</p>
              </div>`;
          container.append(sectionHtml);
      });

      // Initialize the accordion
      $("#tabs").accordion({
          heightStyle: "content",
          collapsible: true
      });
  }
});
