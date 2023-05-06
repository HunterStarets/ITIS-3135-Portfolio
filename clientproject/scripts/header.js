const topNavID = "header-top-nav";

const topLinks = {
  1: {
    url: "index.html",
    text: "Home",
  },
  2: {
    url: "events.html",
    text: "Events",
  },
  3: {
    url: "join.html",
    text: "Join",
  },
  4: {
    url: "standings.html",
    text: "Standings",
  },
  5: {
    url: "gallery.html",
    text: "Gallery",
  },
  6: {
    url: "about-us.html",
    text: "About Us",
  },
  7: {
    url: "coaches.html",
    text: "Meet the Coaches",
  },
};

loadHeader(topNavID, topLinks);

function loadHeader(navID, links) {
  const currentPagesPathname = String(location.pathname.split("/").splice(-1));
  let outputHtmlString = "";

  //Formats information from "links" list into <a> tags that can be sent to HTML
  for (var id in links) {
    if (currentPagesPathname === links[id]["url"]) {
      outputHtmlString += "<p>" + links[id]["text"] + "</p>";
    } else {
      outputHtmlString +=
        '<a href="' + links[id]["url"] + '">' + links[id]["text"] + "</a>";
    }
  }
  document.getElementById(navID).innerHTML = outputHtmlString;
  console.log("#" + navID);
}

// JavaScript code to handle header background color on scroll
const header = document.getElementById("main-header");
header.classList.add("header-transparent");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    header.classList.remove("header-transparent");
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
    header.classList.add("header-transparent");
  }
});
