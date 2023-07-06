let stays = [
  {
    id: "fivepalm",
    name: "5 Palm Jumeirah",
    img: "https://bynder.onthebeach.co.uk/m/155f58f6fd027a03/original/FIVE-Palm-Jumeirah-Dubai.jpg",
    URL: "https://www.youtube.com/watch?v=RRgfZDAl1y0",
    description:
      "Palm Jumeirah's 5 Palm is an awe-inspiring man-made island situated in Dubai, designed in the shape of a palm tree. This iconic destination boasts a collection of opulent and world-class resorts that redefine luxury.",
    attractions: [
      {
        name: "Dubai Mall",
        distance: 4.1,
      },
      {
        name: "Burj Khalifa",
        distance: 4.3,
      },
      {
        name: "Atlantis ",
        distance: 4.1,
      },
    ],
  },
  {
    id: "atlantisthepalmdubai",
    name: "Atlantis the Palm Dubai",
    img: "https://www.hoteliermiddleeast.com/2021/06/5uVQcEm5-AtlantisThePalm-Exterior-FrontShotWithRoyalPool-hme.jpg",
    URL: "https://www.youtube.com/watch?v=RRgfZDAl1y0",
    description:
      "A Atlantis, The Palm offers other-worldly luxury, combining top drawer skyline views with a never-ending list of facilities, including free access to an underwater aquarium and a waterpark.",
    attractions: [
      {
        name: "Dubai Marina",
        distance: 1.5,
      },
      {
        name: "Wild Wadi waterpark",
        distance: 2.2,
      },
      {
        name: "The Pointe",
        distance: 1.5,
      },
      {
        id: "jumeriahbeachhotel",
        name: "Jumeriah Beach Hotel",
         img: "https://s3-eu-west-1.amazonaws.com/originaltravel.assets.d3r.com/images/hero_xlarge/97900-jumeirah-beach-hotel-exterior-shot-1.jpg",
        URL: "https://www.youtube.com/watch?v=RRgfZDAl1y0",
        description:
          "Jumeirah Beach Hotel is a luxury hotel in Dubai, United Arab Emirates. The hotel, which opened in 1997, is operated by the Dubai-based hotelier Jumeirah. The hotel contains 598 rooms and suites, 19 beachfront villas, and 20 restaurants and bars.",
        attractions: [
          {
            name: "Dubai Marina",
            distance: 1.5,
          },
          {
            name: "Wild Wadi waterpark",
            distance: 2.2,
          },
          {
            name: "The Pointe",
            distance: 1.5,
          },
        ],
      },
    ],
  },
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}
