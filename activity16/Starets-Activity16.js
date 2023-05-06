$(document).ready(function () {
  var url =
    "https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=04b448c8281d0504074e97152759ade5&photoset_id=72177720308054139&format=json&nojsoncallback=1";
  $.getJSON(url, function (data) {
    var html = "";
    $.each(data.items, function (i, item) {
      html += `<a href="${item.media.m}" data-lightbox="New Building" data-title="${item.title}"><img src="${item.media.m}"></a>`;
    });
    $("#new_building").html(html);
  });
});
