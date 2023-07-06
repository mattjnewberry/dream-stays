
let stays = [
  {
    id: "mountetna",
    name: "The Great Mount etna",
    img:
      "https://i.guim.co.uk/img/media/d9accdd8805aa798dd4cec7c10439d7770244c56/0_176_6016_3611/master/6016.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1ec24e81a03531ae90cdb41fd0d83d02",
          description:
      "This is one of Europes' active volcanos, very active.Between 1669 and 1900, 26 more eruptions were reported. The eruption of 1852–53 flattened large stands of timber and nearly destroyed the town of Zafferana.",
    attractions: [
  {
    name: "Catania",
    distance: 12
  },
  {
    name: "The Valley of Temples in Agrigento",
    distance: 10
  },
  {
    name: "Taormina",
    distance: 3
  }
]
  },
  {
    id: "templeofapollo",
    name: "The Temple of Apollo",
    img:
      "https://i.pinimg.com/originals/66/14/c6/6614c6d7a83ea4f052d2308f340b40de.jpg",
    description:
      "The Temple of Apollo was built at the beginning of the 6th century and is the oldest Doric monument in Sicily. Over the centuries the building has undergone several modifications. It was first converted into an early Christian church, then into an Arab mosque ",
    attractions: [
  {
    name: "Anardinio",
    distance:5
  },
  {
    name: "Caoinici",
    distance: 1
  },
  {
    name: "Salinaminia",
    distance: 3
  }
]
  },
  {
    id: "Pantalicanecropolis",
    name: "Necropolis of Pantalica",
    img:
      "https://www.bing.com/th?id=A%2bq3IGLHGa3dHqg480x360&w=208&h=149&c=8&rs=1&qlt=90&dpr=1.5&pid=3.1&rm=2",
    description:
      "The Necropolis of Pantalica is a collection of cemeteries with rock-cut chamber tombs in southeast Sicily, Italy.The site of the city, which Cicero described as ‘the greatest Greek city and the most beautiful of all’, retains vestiges such as the Temple of Athena (5th century BC, later transformed to serve as a cathedral), a Greek theatre, a Roman amphitheatre, a fort and more. ",
    attractions: [
  {
    name: "Didimavoinici",
    distance: 32
  },
  {
    name: "Normendici",
    distance: 6
  },
  {
    name: "Death Catacombs Di Sanguini",
    distance: 0.5
  }
]
  }
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}