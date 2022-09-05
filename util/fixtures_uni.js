import {
  faFutbol,
  faBasketball,
  faVolleyball,
} from "@fortawesome/free-solid-svg-icons";

const universityFixtures = [

  {
    category: "Basketball",
    icon: faBasketball,
    note: "Each match will consist of 6min quarters with 1min break between each quarter.",
    fixtures: [
      {
        home: {
          name: "NUST",
          logo: "/uni-logos/nust.png",
        },
        away: {
          name: "Air University",
          logo: "/uni-logos/au.png",
        },
        date: "6th September",
        time: "19:00",
        detailedTime: "07:00 - 7:30 PM",
        venue: "NBS Ground",
        type: "Exhibition Match (female)",
      },
      {
        home: {
          name: "NUST",
          logo: "/uni-logos/nust.png",
        },
        away: {
          name: "COMSATS",
          logo: "/uni-logos/comsats.png",
        },
        date: "6th September",
        time: "19:40",
        detailedTime: "7:40 - 8:10 PM",
        venue: "NBS Ground",
        type: "Exhibition Match (male)",
      },
    ],
  },
  {
    category: "Volleyball",
    icon: faVolleyball,
    note: "Each will consist of 3 sets - game point 15.",
    fixtures: [
      {
        home: {
          name: "NUST",
          logo: "/uni-logos/nust.png",
        },
        away: {
          name: "Bahria",
          logo: "/uni-logos/bahria.png",
        },
        date: "6th September",
        time: "19:00",
        detailedTime: "07:00 - 7:30 PM",
        venue: "NBS Ground",
        type: "Exhibition Match (female)",
      },
      {
        home: {
          name: "NUST",
          logo: "/uni-logos/nust.png",
        },
        away: {
          name: "Bahria",
          logo: "/uni-logos/bahria.png",
        },
        date: "6th September",
        time: "19:30",
        detailedTime: "7:30 - 8:00 PM",
        venue: "NBS Ground",
        type: "Exhibition Match (male)",
      },
    ],
  },
  {
    category: "Futsal",
    icon: faFutbol,
    note: "Each match will have a 15min half.",

    fixtures: [
      {
        home: {
          name: "NUST",
          logo: "/uni-logos/nust.png",
        },
        away: {
          name: "FAST",
          logo: "/uni-logos/fast.png",
        },
        date: "6th September",
        time: "19:00",
        detailedTime: "07:00 - 7:30 PM",
        venue: "NBS Ground",
        type: "Exhibition Match",
      },
      {
        home: {
          name: "NUST",
          logo: "/uni-logos/nust.png",
        },
        away: {
          name: "Alumni",
          logo: "/uni-logos/nust.png",
        },
        date: "6th September",
        time: "19:40",
        detailedTime: "7:40 - 8:10 PM",
        venue: "NBS Ground",
        type: "Exhibition Match",
      },
    ],
  },
  {
    category: "Volta",
    icon: faFutbol,
    note: "Exhibition Match will be best of 3.",
    fixtures: [
      {
        home: {
          name: "NUST",
          logo: "/uni-logos/nust.png",
        },
        away: {
          name: "Alumni",
          logo: "/uni-logos/nust.png",
        },
        date: "6th September",
        time: "20:30",
        detailedTime: "08:30 PM",
        venue: "NBS Ground",
        type: "Exhibition Match",
      },
    ],
  },
];

export default universityFixtures;
