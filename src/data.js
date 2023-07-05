let stays = [
  {
    id: "fivepalm",
    name: "5 Palm Jumeirah",
    img: "https://bynder.onthebeach.co.uk/m/155f58f6fd027a03/original/FIVE-Palm-Jumeirah-Dubai.jpg",
    description:
      "Palm Jumeirah's 5 Palm is an awe-inspiring man-made island situated in Dubai, designed in the shape of a palm tree. This iconic destination boasts a collection of opulent and world-class resorts that redefine luxury.",
    attractions: [
  {
    name: "Dubai Mall",
    distance: 4.1 
  },
  {
    name: "Burj Khalifa",
    distance: 4.3
  },
  {
    name: "Atlantis ",
    distance: 4.1
  }
]
  },
  {
    id: "crystalpalacecamping",
    name: "Crystal Palace Camping",
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    description:
      "A beautiful campsite situated in the centre of Crystal Palace, surrounded by picteresque hedge rows. Late at night gaze at the flashing lights heading towards Gatwick Airport",
    nearby: ["Crystal Palace Football Club", "Croydon"],
  },
  {
    id: "dorothycanalboat",
    name: "Dorothy Canal Boat",
    img: "https://images.unsplash.com/photo-1520086293406-c6dae2b77a64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    description:
      "Explore London by boat and stay at on a traditional canal boat situated on the river Thames. Dorothy is furnished with a fully working shower and microwave",
    nearby: [""],
  },
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}
