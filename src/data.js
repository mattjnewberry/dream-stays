let stays = [
  {
    id: "themarinabaysands",
    name: "The Marina Bay Sands",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=752&q=80",
    URL: "https://www.youtube.com/watch?v=_166VGD6kLs",
    description:
      "This is Singapore's most iconic hotel. A five star haven on the island coast that is famous the world over for its one of a kind aesthetic, impeccable service, impressive suites, and legendary view of the city.",
    nearby: ["Singapore Flyer", "Gardens By The Bay", "Marina Barrage"],
    attractions: [
      {
        name: "Singapore Flyer",
        distance: 12,
      },
      {
        name: "Gardens By The Bay",
        distance: 10,
      },
      {
        name: "Marina Barrage",
        distance: 3,
      },
    ],
  },
  {
    id: "singaporeflyer",
    name: "Singapore Flyer",
    img: "https://static1.squarespace.com/static/569e766e69492e9dd5373ef6/57ddeee16b8f5bbe959e2ae5/585ab8a61b631b3f574bf03a/1485187995315/singapore-web-018.jpg",
    URL: "https://www.youtube.com/watch?v=BLY5Rfa1hAY",
    description:
      "A classy take on the ferris wheel design, heavily inspired by the London Eye in the United Kingdom, this attraction allows you to slowly cruise through the sky, giving you a wonderful view of the Marina Barrage and Financial Sector of the city, as well as the National Museum of Art and History",
    nearby: ["National Art Museum", "Croydon"],
    attractions: [
      {
        name: "Singapore Flyer",
        distance: 12,
      },
      {
        name: "Gardens By The Bay",
        distance: 10,
      },
      {
        name: "Marina Barrage",
        distance: 3,
      },
    ],
  },
  {
    id: "dorothycanalboat",
    name: "Dorothy Canal Boat",
    img: "https://images.unsplash.com/photo-1520086293406-c6dae2b77a64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    URL: "https://www.youtube.com/watch?v=_166VGD6kLs",
    description:
      "Explore London by boat and stay at on a traditional canal boat situated on the river Thames. Dorothy is furnished with a fully working shower and microwave",
    nearby: [""],
    attractions: [
      {
        name: "Singapore Flyer",
        distance: 12,
      },
      {
        name: "Gardens By The Bay",
        distance: 10,
      },
      {
        name: "Marina Barrage",
        distance: 3,
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
