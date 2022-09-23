let stays = [
  {
    id: "thelondongrandhotel",
    name: "The London Grand Hotel",
    img:
      "https://media.cntraveler.com/photos/5f6198aa987090832029b181/16:9/w_2560%2Cc_limit/ritz-london-exterior.jpg",
    description:
      "We are London’s most iconic hotel. A five star haven on Piccadilly that is famous the world over for its historic elegance, impeccable service, impressive suites, and legendary Afternoon Tea.",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"]
  },
  {
    id: "crystalpalacecamping",
    name: "Crystal Palace Camping",
    img:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    description:
      "A beautiful campsite situated in the centre of Crystal Palace, surrounded by picteresque hedge rows. Late at night gaze at the flashing lights heading towards Gatwick Airport",
    nearby: ["Crystal Palace Football Club", "Croydon"]
  },
  {
    id: "dorothycanalboat",
    name: "Dorothy Canal Boat",
    img:
      "https://images.unsplash.com/photo-1520086293406-c6dae2b77a64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    description:
      "Explore London by boat and stay at on a traditional canal boat situated on the river Thames. Dorothy is furnished with a fully working shower and microwave",
    nearby: [""]
  }
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}