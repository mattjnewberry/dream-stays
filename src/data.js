let stays = [
  {
    id: "Aurora",
    name: "The Northern Lights in Husøy",
    img: "https://images.unsplash.com/photo-1514563229751-01c68026cb49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    description:
      "A beautiful small village in Senja with only no more than 300 people. Have a great hiking and a great view in Husøy Lighthouse.  ",
    nearby: ["", "", ""],
    attractions: [
      {
        name: "Husøy Lighthouse",
        distance: 850,
      },
    ],
    videoUrl: "https://www.youtube.com/watch?v=T75IKSXVXlc",
  },
  {
    id: "Mountains",
    name: "Mountains in Bergen",
    img: "https://images.unsplash.com/photo-1612126404748-d540c1a72289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    description:
      "You can visit the highest mountain in Bergen, Ukriken, with 643 m (2110 ft) elevation or you can visit Fløyfjellet which is the most popular mountain among tourists.",
    nearby: ["", ""],
    attractions: [
      {
        name: "Stavanger",
        distance: 208,
      },
    ],
    videoUrl: "https://www.youtube.com/watch?v=mB1dE0FotdY",
  },
  {
    id: "oslo",
    name: "Oslo",
    img: "https://images.unsplash.com/photo-1609793654930-1bfbefe939d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    description:
      "Visit the art galleries and the glacier white opera house and see the similarity with the Sydney Opera House (but it is more beautiful!).",
    nearby: [""],
    attractions: [
      {
        name: "Haldenkanalen Regionalpark",
        distance: 86.7,
      },
    ],
    videoUrl: "https://www.youtube.com/watch?v=UESsFgnk7e8",
  },
  {
    id: "Aurora1",
    name: "The Northern Lights in Husøy",
    img: "https://images.unsplash.com/photo-1514563229751-01c68026cb49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    description:
      "A beautiful small village in Senja with only no more than 300 people. Have a great hiking and a great view in Husøy Lighthouse.  ",
    nearby: ["", "", ""],
    attractions: [
      {
        name: "Husøy Lighthouse",
        distance: 850,
      },
    ],
    videoUrl: "https://www.youtube.com/watch?v=T75IKSXVXlc",
  },
  {
    id: "Aurora3",
    name: "The Northern Lights in Husøy",
    img: "https://images.unsplash.com/photo-1514563229751-01c68026cb49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    description:
      "A beautiful small village in Senja with only no more than 300 people. Have a great hiking and a great view in Husøy Lighthouse.  ",
    nearby: ["", "", ""],
    attractions: [
      {
        name: "Husøy Lighthouse",
        distance: 850,
      },
    ],
    videoUrl: "https://www.youtube.com/watch?v=T75IKSXVXlc",
  },
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}
