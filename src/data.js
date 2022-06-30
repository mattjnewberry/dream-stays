let stays = [
  {
    id: "theScafellPike",
    name: "Scafell Pike",
    img:
      "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160418172831-beautiful-england-11-scafell-pike-and-wastwater-in-wasdale-valley.jpg",
    description:
      "At 978 meters, Scafell Pike isn't only the highest mountain in England, it also offers the best views of the unspoiled Wasdale Valley and Wastwater -- the deepest lake in England. On a clear day Scotland, Wales, Ireland and the Isle of Man can be seen from the hilltops.",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"]
  },
  {
    id: "theritz",
    name: "The Windermere",
    img:
      "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160418172551-beautiful-england-11-low-wood-hotel-jetty-on-lake-windermere-in-the-lake-district-lake-windermere-cumbria-england.jpg",
    description:
      "We are London’s most iconic hotel. A five star haven on Piccadilly that is famous the world over for its historic elegance, impeccable service, impressive suites, and legendary Afternoon Tea.",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"]
  },
  {
    id: "theritz",
    name: "The Ritz",
    img:
      "https://media.cntraveler.com/photos/5f6198aa987090832029b181/16:9/w_2560%2Cc_limit/ritz-london-exterior.jpg",
    description:
      "We are London’s most iconic hotel. A five star haven on Piccadilly that is famous the world over for its historic elegance, impeccable service, impressive suites, and legendary Afternoon Tea.",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"]
  }
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}
