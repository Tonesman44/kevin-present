import kevinPhoto from "./kevin.jpg";
import heroPhoto from "./kevin2.webp";

import laSalleLogo from "./lasalle-logo.png";
import marylandLogo from "./maryland-logo.png";
import sjuLogo from "./sju-logo.png";

export const profile = {
  name: "Kevin Forster",
  tagline: "Lacrosse • La Salle College HS → Maryland → Saint Joseph’s",
  location: "Jenkintown, Pennsylvania",

  heroImage: {
    src: heroPhoto,
    alt: "Kevin Forster",
  },

  links: [
    { label: "Saint Joseph’s bio", href: "https://sjuhawks.com/sports/mens-lacrosse/roster/kevin-forster/1023" },
    { label: "Maryland bio", href: "https://umterps.com/sports/mens-lacrosse/roster/kevin-forster/3116" },
    {
      label: "Transfer news (Inside Lacrosse)",
      href: "https://www.insidelacrosse.com/article/transfers-forster-to-st-joe-s-rafferty-to-loyola-forsberg-to-bryant/29387",
    },
  ],

  highlights: [
    "Philadelphia-area athlete from Jenkintown, Pennsylvania.",
    "Played Division I lacrosse at the University of Maryland.",
    "Transferred to Saint Joseph’s University (St. Joe’s) to continue his lacrosse career.",
    "Also played football at La Salle; La Salle won the 2009 PIAA Class AAAA State Championship (24–7 vs State College).",
  ],

  // NEW: Lacrosse-focused “Career Highlights” section
  careerHighlights: [
    "La Salle College HS: recognized as a top lacrosse prospect (Under Armour All-America game coverage).",
    "Maryland: roster bio notes early appearances and return after missing time due to injury.",
    "Transfer: moved from Maryland to Saint Joseph’s (Inside Lacrosse transfer report).",
    "Saint Joseph’s: roster bio lists conference recognition/awards during his time with the Hawks.",
  ],

  media: {
    photos: [
      {
        title: "Kevin Forster",
        src: kevinPhoto,
        credit: "Photo provided",
        link: null,
      },
    ],
    videos: [
      {
        title: "La Salle College HS Highlights",
        kind: "vimeo",
        id: "7082115",
        link: "https://vimeo.com/7082115",
      },
      {
        title: "Saint Joseph’s vs Robert Morris",
        kind: "youtube",
        id: "aTfkiJDgoSU",
        link: "https://www.youtube.com/watch?v=aTfkiJDgoSU",
      },
    ],
  },

  timeline: [
    {
      year: "High School",
      title: "La Salle College High School (Wyndmoor, PA)",
      org: "La Salle",
      logo: { src: laSalleLogo, alt: "La Salle College High School" },
      details: [
        "Played lacrosse at La Salle.",
        "Also played football; La Salle won the 2009 PIAA Class AAAA State Championship (24–7 vs State College).",
        "2009 season materials list Kevin as a captain and credit a punt return that set up a key score.",
      ],
      sources: [
        { label: "La Salle Football 2009 recap (PDF)", href: "https://www.lschs.org/uploaded/life_at_lasalle/athletics/football/history/season-recaps/lsfb2009.pdf" },
        { label: "La Salle Football 2009 chronicle (PDF)", href: "https://www.lschs.org/uploaded/life_at_lasalle/athletics/football/history/chronicles/LSFB_Chronicle_-_2009.pdf" },
        { label: "PIAA Football Champions (PDF)", href: "https://piaadistrict3records.com/wp-content/uploads/2025/01/PIAA-FB-CHAMPIONS.pdf" },
      ],
    },
    {
      year: "2012–2014",
      title: "University of Maryland (Men’s Lacrosse)",
      org: "Maryland",
      logo: { src: marylandLogo, alt: "University of Maryland" },
      details: [
        "Played Division I lacrosse for Maryland.",
        "Roster bio references early playing time and return after missing 2013 due to injury.",
      ],
      sources: [{ label: "Maryland roster bio", href: "https://umterps.com/sports/mens-lacrosse/roster/kevin-forster/3116" }],
    },
    {
      year: "2015–2016",
      title: "Saint Joseph’s University (Men’s Lacrosse)",
      org: "Saint Joseph’s",
      logo: { src: sjuLogo, alt: "Saint Joseph’s University" },
      details: [
        "Transferred from Maryland to Saint Joseph’s.",
        "Contributed for the Hawks (Northeast Conference).",
      ],
      sources: [
        { label: "SJU roster bio", href: "https://sjuhawks.com/sports/mens-lacrosse/roster/kevin-forster/1023" },
        { label: "Inside Lacrosse — transfer coverage", href: "https://www.insidelacrosse.com/article/transfers-forster-to-st-joe-s-rafferty-to-loyola-forsberg-to-bryant/29387" },
      ],
    },
  ],
};
