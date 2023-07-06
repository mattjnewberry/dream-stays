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
    id: "atlantisthepalmdubai",
    name: "Atlantis the Palm Dubai",
    img: "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/12/ATLANTIS-THE-PALM-DUBAI.jpg?w=970&ssl=1",
    description:
      "This dynamic property is rising in Dubai from the coastline of the largest man-made island in the world, the Palm Island. Positioned as the flagship property it is, Atlantis The Palm is situated at the apex of the Palm Island’s outer crescent, surrounded by the beautifully tranquil sea of the Arabian Gulf.",
        attractions: [
  {
    name: "Dubai Marina",
    distance: 6  
  },
  {
    name: "The Pointe",
    distance: 1.5
  },
  {
    name: "Widi Wadi Waterpark",
    distance: 2.2
  },
  {
    id: "jumeriahbeachhotel",
    name: "Jumeriah Beach Hotel",
    img: "https://images.unsplash.com/photo-1520086293406-c6dae2b77a64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    description:
      "Explore London by boat and stay at on a traditional canal boat situated on the river Thames. Dorothy is furnished with a fully working shower and microwave",
        attractions: [
  {
    name: "Burj Al Arab",
    distance: 1.5
  },
  {
    name: "The Dubai Mall",
    distance: 2
  },
  {
    name: "Dubai Fountain ",
    distance: 2.2
  },
]

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}
