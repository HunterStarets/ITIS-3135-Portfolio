const topNavID = "header-top-nav";
const bottomNavID = "header-bot-nav";

const topLinks = {
  1: {
    url: "index.html",
    text: "Home",
  },
  2: {
    url: "introduction.html",
    text: "Introduction",
  },
  3: {
    url: "contract.html",
    text: "Contract",
  },
  4: {
    url: "tables.html",
    text: "Tables",
  },
  5: {
    url: "form.html",
    text: "Form",
  },
  6: {
    url: "website_evaluations.html",
    text: "Website Evaluations",
  },
  7: {
    url: "firstscripts.html",
    text: "First Scripts",
  },
  8: {
    url: "polygons.html",
    text: "Polygons",
  },
  9: {
    url: "calculator_try.html",
    text: "Calculator Try",
  },
  10: {
    url: "calculator_fcc.html",
    text: "Calculator FCC",
  },
  11: {
    url: "arrays.html",
    text: "Arrays",
  },
  12: {
    url: "slideshow.html",
    text: "Slideshow",
  },
  13: {
    url: "project_1.html",
    text: "Project 1",
  },
  14: {
    url: "Review_1.html",
    text: "Review 1",
  },
  15: {
    url: "Review_2.html",
    text: "Review 2",
  },
};

const bottomLinks = {
  1: {
    url: "Exercise/Starets-Activity_Accessibility.html",
    text: "Accessibility",
  },
  2: {
    url: "hobby/index.html",
    text: "Hobby",
  },
  3: {
    url: "activity11/Starets-Activity11.html",
    text: "Accordion Widget",
  },
  4: {
    url: "activity12/Starets-Activity12.html",
    text: "Carousel Application",
  },
  5: {
    url: "activity13/Starets-Activity13.html",
    text: "XML to JSON",
  },
  6: {
    url: "activity14/Starets-Activity14.html",
    text: "Speaker Data from JSON",
  },
  7: {
    url: "activity15/Starets-Activity15.html",
    text: "Expanded JSON",
  },
  8: {
    url: "activity16/Starets-Activity16.html",
    text: "Flickr Photo Gallery",
  },
  9: {
    url: "clientproject/index.html",
    text: "Client Project",
  },
  10: {
    url: "stuff/CRA*ppy WeBPAGE.htm",
    text: "Crappy Webpage",
  },
};

loadHeader(topNavID, topLinks);
loadHeader(bottomNavID, bottomLinks);

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
