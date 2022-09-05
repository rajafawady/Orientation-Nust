import {
  faFutbol,
  faPeoplePulling,
  faTableTennisPaddleBall,
  faUserGroup,
  faVolleyball,
  faRunning,
  faBasketball,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
const ogsFixtures = [
  {
    category: "Races",
    icon: faRunning,
    oneTeam: true,
    fixtures: [
      {
        name: "100m Race",
        date: "6th September",
        time: "18:15",
        detailedTime: "06:15 - 06:25 PM",
        venue: "NBS Ground",
      },
      {
        name: "400m Relay Race",
        date: "6th September",
        time: "18:30",
        detailedTime: "06:30 - 06:45 PM",
        venue: "NBS Ground",
      },
    ],
  },
  {
    category: "Volta Freshies",
    icon: faUsers,
    showType: true,
    fixtures: [
      {
        home: {
          name: "Ottomans",
          logo: "/og-logos/ottomans.png",
        },
        away: {
          name: "Mughal",
          logo: "/og-logos/mughal.png",
        },
        date: "6th September",
        time: "20:25",
        detailedTime: "08:25 PM",
        venue: "NBS Ground",
        type: "Match 1",
      },
      {
        home: {
          name: "Khilji",
          logo:'/og-logos/khiljis.png'
        },
        away: {
          name: "Mongols",
          logo: "/og-logos/mongol.png",
        },
        date: "6th September",
        time: "20:28",
        detailedTime: "08:28 PM",
        venue: "NBS Ground",
        type: "Match 2",
      },
      {
        home: {
          name: "Vikings",
          logo:'/og-logos/vikings.png'
        },
        away: {
          name: "Romans",
          logo:'/og-logos/romans.png'
        },
        date: "6th September",
        time: "20:31",
        detailedTime: "08:31 PM",
        venue: "NBS Ground",
        type: "Match 3",
      },
      {
        home: {
          name: "Spartans",
          logo: "/og-logos/spartans.png",
        },
        away: {
          name: "Samurai",
          logo:'/og-logos/samurai.png'
        },
        date: "6th September",
        time: "20:34",
        detailedTime: "08:34 PM",
        venue: "NBS Ground",
        type: "Match 4",
      },
      {
        home: {
          name: "Seljuks",
          logo:'/og-logos/seljuks.png'
        },
        away: {
          name: "Winner 1",
        },
        date: "6th September",
        time: "20:35",
        detailedTime: "08:35 PM",
        venue: "NBS Ground",
        type: "Match 5",
      },
      {
        home: {
          name: "Winner 2",
        },
        away: {
          name: "Winner 3",
        },
        date: "6th September",
        time: "20:38",
        detailedTime: "08:38 PM",
        venue: "NBS Ground",
        type: "Semi-Final 1",
      },
      {
        home: {
          name: "Winner 4",
        },
        away: {
          name: "Winner 5",
        },
        date: "6th September",
        time: "20:41",
        detailedTime: "08:41 PM",
        venue: "NBS Ground",
        type: "Semi-Final 2",
      },
      {
        home: {
          name: "Winner SF 1",
        },
        away: {
          name: "Winner SF 2",
        },
        date: "6th September",
        time: "20:44",
        detailedTime: "08:44 PM",
        venue: "NBS Ground",
        type: "Final",
      },
    ],
  },
  {
    category: "Volta Alumni",
    showType: true,
    oneTeam: true,
    icon: faUsers,
    fixtures: [
      {
        name: "Alumni",
        date: "6th September",
        detailedTime: "08:15 PM",
        venue: "NBS Ground",
        type: "Match 1",
      },
      {
        name: "Alumni",
        date: "6th September",
        detailedTime: "08:18 PM",
        venue: "NBS Ground",
        type: "Match 2",
      },
      {
        name: "Alumni",
        date: "6th September",
        detailedTime: "08:21 PM",
        venue: "NBS Ground",
        type: "Match 3",
      },
    ],
  },
  {
    category: "Tug of War",
    showType: true,
    icon: faPeoplePulling,
    fixtures: [
      {
        home: { name: "Freshmen" },
        away: { name: "OC" },
        date: "6th September",
        detailedTime: "09:20 PM Onwards",
        time: "21:20",
        venue: "NBS Ground",
        type: "Match 1 - Female",
      },
      {
        home: { name: "Freshmen" },
        away: { name: "OC" },
        date: "6th September",
        detailedTime: "09:20 PM Onwards",
        time: "21:20",
        venue: "NBS Ground",
        type: "Match 2 - Male",
      },
      {
        home: { name: "OGs" },
        away: { name: "SOCs" },
        date: "6th September",
        detailedTime: "09:20 PM Onwards",
        time: "21:20",
        venue: "NBS Ground",
        type: "Match 1 - Female",
      },
      {
        home: { name: "OGs" },
        away: { name: "SOCs" },
        date: "6th September",
        detailedTime: "09:20 PM Onwards",
        time: "21:20",
        venue: "NBS Ground",
        type: "Match 2 - Male",
      },
    ],
  },
  {
    category: "Badminton Doubles",
    gNote: "Female (Court 1). Male (Court 2)",
    icon: faUserGroup,
    showType: true,
    note: "Each match will have two singles, and one double and will be worth 10 points.",
    fixtures: [
      {
        home: {
          name: "Spartans",
          logo:'/og-logos/spartans.png'
        },
        away: {
          name: "Mughal",
          logo: "/og-logos/mughal.png",
        },
        date: "7th September",
        time: "17:15",
        detailedTime: "5:15 - 5:30 PM",
        venue: "Old Gymnasium",
        type: "Match 1",
      },
      {
        home: {
          name: "Ottomans",
          logo: "/og-logos/ottomans.png",
        },
        away: {
          name: "Romans",
          logo:'/og-logos/romans.png'
        },
        date: "7th September",
        time: "17:30",
        detailedTime: "5:30 - 5:45 PM",
        venue: "Old Gymnasium",
        type: "Match 2",
      },
      {
        home: {
          name: "Seljuks",
          logo:'/og-logos/seljuks.png'
        },
        away: {
          name: "Mongols",
          logo: "/og-logos/mongol.png",
        },
        date: "7th September",
        time: "17:45",
        detailedTime: "5:45 - 6:00 PM",
        venue: "Old Gymnasium",
        type: "Match 3",
      },
      {
        home: {
          name: "Khilji",
          logo:'/og-logos/khiljis.png'
        },
        away: {
          name: "Vikings",
          logo:'/og-logos/vikings.png'
        },
        date: "7th September",
        time: "18:00",
        detailedTime: "6:00 - 6:15 PM",
        venue: "Old Gymnasium",
        type: "Match 4",
      },
      {
        home: {
          name: "Samurai",
          logo:'/og-logos/samurai.png'
        },
        away: {
          name: "Winner 1",
        },
        date: "7th September",
        time: "18:15",
        detailedTime: "6:15 - 6:30 PM",
        venue: "Old Gymnasium",
        type: "Match 5",
      },
      {
        home: {
          name: "Winner 2",
        },
        away: {
          name: "Winner 3",
        },
        date: "7th September",
        time: "18:30",
        detailedTime: "6:30 - 6:45 PM",
        venue: "Old Gymnasium",
        type: "Match 6 - SF",
      },
      {
        home: {
          name: "Winner 4",
        },
        away: {
          name: "Winner 5",
        },
        date: "7th September",
        time: "18:45",
        detailedTime: "6:45 - 7:00 PM",
        venue: "Old Gymnasium",
        type: "Match 7 - SF",
      },
      {
        home: {
          name: "Winner 6",
        },
        away: {
          name: "Winner 7",
        },
        date: "7th September",
        time: "19:00",
        detailedTime: "7:00 - 7:30 PM",
        venue: "Old Gymnasium",
        type: "Final (3 sets)",
      },
    ],
  },
  {
    category: "Table Tennis",
    icon: faTableTennisPaddleBall,
    gNote: "Female (Table 1). Male (Table 2)",
    showType: true,
    note: "All the matches will consist of one set only worth 10 points (game point 11). The final matches will consist of 3 sets of 10 points each (game point 11).",
    fixtures: [
      {
        home: {
          name: "Vikings",
          logo:'/og-logos/vikings.png'
        },
        away: {
          name: "Ottomans",
          logo: "/og-logos/ottomans.png",
        },
        date: "7th September",
        time: "17:00",
        detailedTime: "5:00 - 5:20 PM",
        venue: "Old Gymnasium",
        type: "Match 1",
      },
      {
        home: {
          name: "Seljuks",
          logo:'/og-logos/seljuks.png'
        },
        away: {
          name: "Mughal",
          logo: "/og-logos/mughal.png",
        },
        date: "7th September",
        time: "17:25",
        detailedTime: "5:25 - 5:45 PM",
        venue: "Old Gymnasium",
        type: "Match 2",
      },
      {
        home: {
          name: "Spartans",
          logo:'/og-logos/spartans.png'
        },
        away: {
          name: "Khilji",
          logo:'/og-logos/khiljis.png'
        },
        date: "7th September",
        time: "17:50",
        detailedTime: "5:50 - 6:10 PM",
        venue: "Old Gymnasium",
        type: "Match 3",
      },
      {
        home: {
          name: "Mongols",
          logo: "/og-logos/mongol.png",
        },
        away: {
          name: "Romans",
          logo:'/og-logos/romans.png'
        },
        date: "7th September",
        time: "18:15",
        detailedTime: "6:15 - 6:35 PM",
        venue: "Old Gymnasium",
        type: "Match 4",
      },
      {
        home: {
          name: "Samurai",
          logo:'/og-logos/samurai.png'
        },
        away: {
          name: "Winner 1",
        },
        date: "7th September",
        time: "18:40",
        detailedTime: "6:40 - 7:00 PM",
        venue: "Old Gymnasium",
        type: "Match 5",
      },
      {
        home: {
          name: "Winner 2",
        },
        away: {
          name: "Winner 3",
        },
        date: "7th September",
        time: "19:05",
        detailedTime: "7:05 - 6:25 PM",
        venue: "Old Gymnasium",
        type: "Match 6 - SF",
      },
      {
        home: {
          name: "Winner 4",
        },
        away: {
          name: "Winner 5",
        },
        date: "7th September",
        time: "19:30",
        detailedTime: "7:30 - 7:40 PM",
        venue: "Old Gymnasium",
        type: "Match 7 - SF",
      },
      {
        home: {
          name: "Winner 6",
        },
        away: {
          name: "Winner 7",
        },
        date: "7th September",
        time: "19:40",
        detailedTime: "7:40 - 8:00 PM",
        venue: "Old Gymnasium",
        type: "Final",
      },
    ],
  },
  {
    category: "Dodge The Ball",
    icon: faUserGroup,
    showType: true,
    note: "5 min break for between each game for setup (buffer time).",
    fixtures: [
      {
        home: {
          name: "Ottomans",
          logo: "/og-logos/ottomans.png",
        },
        away: {
          name: "Vikings",
          logo:'/og-logos/vikings.png'
        },
        date: "7th September",
        time: "17:30",
        detailedTime: "5:30 - 5:45 PM",
        venue: "NBS Ground",
        type: "Match 1",
      },
      {
        home: {
          name: "Romans",
          logo:'/og-logos/romans.png'
        },
        away: {
          name: "Samurai",
          logo:'/og-logos/samurai.png'
        },
        date: "7th September",
        time: "17:50",
        detailedTime: "5:50 - 6:05 PM",
        venue: "NBS Ground",
        type: "Match 2",
      },
      {
        home: {
          name: "Mongols",
          logo: "/og-logos/mongol.png",
        },
        away: {
          name: "Khilji",
          logo:'/og-logos/khiljis.png'
        },
        date: "7th September",
        time: "18:10",
        detailedTime: "6:10 - 6:25 PM",
        venue: "NBS Ground",
        type: "Match 3",
      },
      {
        home: {
          name: "Spartans",
          logo:'/og-logos/spartans.png'
        },
        away: {
          name: "Mughal",
          logo: "/og-logos/mughal.png",
        },
        date: "7th September",
        time: "18:30",
        detailedTime: "6:30 - 6:45 PM",
        venue: "NBS Ground",
        type: "Match 4",
      },
      {
        home: {
          name: "Seljuks",
          logo:'/og-logos/seljuks.png'
        },
        away: {
          name: "Winner 1",
        },
        date: "7th September",
        time: "18:50",
        detailedTime: "6:50 - 7:05 PM",
        venue: "NBS Ground",
        type: "Match 5",
      },
      {
        home: {
          name: "Winner 2",
        },
        away: {
          name: "Winner 3",
        },
        date: "7th September",
        time: "19:10",
        detailedTime: "7:10 - 7:25 PM",
        venue: "NBS Ground",
        type: "Match 6 - SF",
      },
      {
        home: {
          name: "Winner 4",
        },
        away: {
          name: "Winner 5",
        },
        date: "7th September",
        time: "19:30",
        detailedTime: "7:30 - 7:45 PM",
        venue: "NBS Ground",
        type: "Match 7 - SF",
      },
      {
        home: {
          name: "Winner 6",
        },
        away: {
          name: "Winner 7",
        },
        date: "7th September",
        time: "19:50",
        detailedTime: "7:50 - 8:05 PM",
        venue: "NBS Ground",
        type: "Final",
      },
    ],
  },
  {
    category: "Basketball Female",
    icon: faBasketball,
    showType: true,
    note: "10 minutes per match, 4 minutes half, 1-minute break. For Final: 12 minutes per match, 5 minutes half",
    fixtures: [
      {
        home: {
          name: "Ottomans",
          logo: "/og-logos/ottomans.png",
        },
        away: {
          name: "Seljuks",
          logo:'/og-logos/seljuks.png'
        },
        date: "7th September",
        time: "17:30",
        detailedTime: "5:30 - 5:40 PM",
        venue: "NBS Court",
        type: "Match 1",
      },
      {
        home: {
          name: "Vikings",
          logo:'/og-logos/vikings.png'
        },
        away: {
          name: "Mongols",
          logo: "/og-logos/mongol.png",
        },
        date: "7th September",
        time: "17:40",
        detailedTime: "5:40 - 5:50 PM",
        venue: "NBS Court",
        type: "Match 2",
      },
      {
        home: {
          name: "Khilji",
          logo:'/og-logos/khiljis.png'
        },
        away: {
          name: "Romans",
          logo:'/og-logos/romans.png'
        },
        date: "7th September",
        time: "17:50",
        detailedTime: "5:50 - 6:00 PM",
        venue: "NBS Court",
        type: "Match 3",
      },
      {
        home: {
          name: "Samurai",
          logo:'/og-logos/samurai.png'
        },
        away: {
          name: "Spartans",
          logo:'/og-logos/spartans.png'
        },
        date: "7th September",
        time: "18:00",
        detailedTime: "6:00 - 6:10 PM",
        venue: "NBS Court",
        type: "Match 4",
      },
      {
        home: {
          name: "Mughal",
          logo: "/og-logos/mughal.png",
        },
        away: {
          name: "Winner 1",
        },
        date: "7th September",
        time: "18:10",
        detailedTime: "6:10 - 6:20 PM",
        venue: "NBS Court",
        type: "Match 5",
      },
      {
        home: {
          name: "Winner 2",
        },
        away: {
          name: "Winner 3",
        },
        date: "7th September",
        time: "18:20",
        detailedTime: "6:20 - 6:30 PM",
        venue: "NBS Court",
        type: "Match 6 - SF",
      },
      {
        home: {
          name: "Winner 4",
        },
        away: {
          name: "Winner 5",
        },
        date: "7th September",
        time: "18:30",
        detailedTime: "6:30 - 6:40 PM",
        venue: "NBS Court",
        type: "Match 7 - SF",
      },
      {
        home: {
          name: "Winner 6",
        },
        away: {
          name: "Winner 7",
        },
        date: "7th September",
        time: "19:50",
        detailedTime: "7:50 - 8:10 PM",
        venue: "NBS Court",
        type: "Final",
      },
    ],
  },
  {
    category: "Basketball Male",
    icon: faBasketball,
    showType: true,
    note: "10 minutes per match, 4 minutes half, 1-minute break. For Final: 12 minutes per match, 5 minutes half",
    fixtures: [
      {
        home: {
          name: "Ottomans",
          logo: "/og-logos/ottomans.png",
        },
        away: {
          name: "Seljuks",
          logo:'/og-logos/seljuks.png'
        },
        date: "7th September",
        time: "18:30",
        detailedTime: "6:40 - 6:50 PM",
        venue: "NBS Court",
        type: "Match 1",
      },
      {
        home: {
          name: "Vikings",
          logo:'/og-logos/vikings.png'
        },
        away: {
          name: "Mongols",
          logo: "/og-logos/mongol.png",
        },
        date: "7th September",
        time: "18:50",
        detailedTime: "6:50 - 7:00 PM",
        venue: "NBS Court",
        type: "Match 2",
      },
      {
        home: {
          name: "Khilji",
          logo:'/og-logos/khiljis.png'
        },
        away: {
          name: "Romans",
          logo:'/og-logos/romans.png'
        },
        date: "7th September",
        time: "19:00",
        detailedTime: "7:00 - 7:10 PM",
        venue: "NBS Court",
        type: "Match 3",
      },
      {
        home: {
          name: "Samurai",
          logo:'/og-logos/samurai.png'
        },
        away: {
          name: "Spartans",
          logo:'/og-logos/spartans.png'
        },
        date: "7th September",
        time: "19:10",
        detailedTime: "7:10 - 7:20 PM",
        venue: "NBS Court",
        type: "Match 4",
      },
      {
        home: {
          name: "Mughal",
          logo: "/og-logos/mughal.png",
        },
        away: {
          name: "Winner 1",
        },
        date: "7th September",
        time: "19:20",
        detailedTime: "7:20 - 7:30 PM",
        venue: "NBS Court",
        type: "Match 5",
      },
      {
        home: {
          name: "Winner 2",
        },
        away: {
          name: "Winner 3",
        },
        date: "7th September",
        time: "19:30",
        detailedTime: "7:30 - 7:40 PM",
        venue: "NBS Court",
        type: "Match 6 - SF",
      },
      {
        home: {
          name: "Winner 4",
        },
        away: {
          name: "Winner 5",
        },
        date: "7th September",
        time: "19:30",
        detailedTime: "7:40 - 7:50 PM",
        venue: "NBS Court",
        type: "Match 7 - SF",
      },
      {
        home: {
          name: "Winner 6",
        },
        away: {
          name: "Winner 7",
        },
        date: "7th September",
        time: "20:10",
        detailedTime: "8:10 - 8:30 PM",
        venue: "NBS Court",
        type: "Final",
      },
    ],
  },
  {
    category: "Volleyball Female",
    icon: faVolleyball,
    showType: true,
    gNote:
      "In case of fewer female players, we will merge two houses. The fixture, in that case is given in next box",
    fixtures: [
      {
        home: {
          name: "Spartans",
          logo:'/og-logos/spartans.png'
        },
        away: {
          name: "Samurai",
          logo:'/og-logos/samurai.png'
        },
        date: "7th September",
        time: "17:30",
        detailedTime: "5:30 - 5:40 PM",
        venue: "NBS Ground",
        type: "Match 1",
      },
      {
        home: {
          name: "Vikings",
          logo:'/og-logos/vikings.png'
        },
        away: {
          name: "Khilji",
          logo:'/og-logos/khiljis.png'
        },
        date: "7th September",
        time: "17:40",
        detailedTime: "5:40 - 5:50 PM",
        venue: "NBS Ground",
        type: "Match 2",
      },
      {
        home: {
          name: "Seljuks",
          logo:'/og-logos/seljuks.png'
        },
        away: {
          name: "Romans",
          logo:'/og-logos/romans.png'
        },
        date: "7th September",
        time: "17:50",
        detailedTime: "5:50 - 6:00 PM",
        venue: "NBS Ground",
        type: "Match 3",
      },
      {
        home: {
          name: "Mughal",
          logo: "/og-logos/mughal.png",
        },
        away: {
          name: "Mongols",
          logo: "/og-logos/mongol.png",
        },
        date: "7th September",
        time: "18:00",
        detailedTime: "6:00 - 6:10 PM",
        venue: "NBS Ground",
        type: "Match 4",
      },
      {
        home: {
          name: "Ottomans",
          logo: "/og-logos/ottomans.png",
        },
        away: {
          name: "Winner 1",
        },
        date: "7th September",
        time: "18:10",
        detailedTime: "6:10 - 6:20 PM",
        venue: "NBS Ground",
        type: "Match 5",
      },
      {
        home: {
          name: "Winner 2",
        },
        away: {
          name: "Winner 3",
        },
        date: "7th September",
        time: "18:20",
        detailedTime: "6:20 - 6:30 PM",
        venue: "NBS Ground",
        type: "Match 6 - SF",
      },
      {
        home: {
          name: "Winner 4",
        },
        away: {
          name: "Winner 5",
        },
        date: "7th September",
        time: "18:30",
        detailedTime: "6:30 - 6:40 PM",
        venue: "NBS Ground",
        type: "Match 7 - SF",
      },
      {
        home: {
          name: "Winner 6",
        },
        away: {
          name: "Winner 7",
        },
        date: "7th September",
        time: "19:50",
        detailedTime: "7:50 - 8:10 PM",
        venue: "NBS Ground",
        type: "Final",
      },
    ],
  },
  {
    category: "Volleyball Female (Merged)",
    icon: faVolleyball,
    showType: true,
    gNote:
      "In case of fewer female players, we will merge two houses. The fixture, in that case is given in next box",
    fixtures: [
      {
        home: {
          name: "Team 1 & 2",
        },
        away: {
          name: "Team 3 & 4",
        },
        date: "7th September",
        time: "17:00",
        detailedTime: "5:00 - 5:15 PM",
        venue: "NBS Ground",
        type: "Match 1",
      },
      {
        home: {
          name: "Team 5 & 6",
        },
        away: {
          name: "Team 7 & 8",
        },
        date: "7th September",
        time: "17:15",
        detailedTime: "5:15 - 5:30 PM",
        venue: "NBS Ground",
        type: "Match 2",
      },
      {
        home: {
          name: "Winner 1",
        },
        away: {
          name: "Team 9",
        },
        date: "7th September",
        time: "17:30",
        detailedTime: "5:30 - 5:45 PM",
        venue: "NBS Ground",
        type: "Match 3",
      },
      {
        home: {
          name: "Winner 2",
        },
        away: {
          name: "Winner 3",
        },
        date: "7th September",
        time: "19:15",
        detailedTime: "7:15 - 7:45 PM",
        venue: "NBS Ground",
        type: "Final",
      },
    ],
  },
  {
    category: "Volleyball Male",
    icon: faVolleyball,
    showType: true,
    fixtures: [
      {
        home: {
          name: "Spartans",
          logo:'/og-logos/spartans.png'
        },
        away: {
          name: "Samurai",
          logo:'/og-logos/samurai.png'
        },
        date: "7th September",
        time: "18:30",
        detailedTime: "6:40 - 6:50 PM",
        venue: "NBS Ground",
        type: "Match 1",
      },
      {
        home: {
          name: "Vikings",
          logo:'/og-logos/vikings.png'
        },
        away: {
          name: "Khilji",
          logo:'/og-logos/khiljis.png'
        },
        date: "7th September",
        time: "18:50",
        detailedTime: "6:50 - 7:00 PM",
        venue: "NBS Ground",
        type: "Match 2",
      },
      {
        home: {
          name: "Seljuks",
          logo:'/og-logos/seljuks.png'
        },
        away: {
          name: "Romans",
          logo:'/og-logos/romans.png'
        },
        date: "7th September",
        time: "19:00",
        detailedTime: "7:00 - 7:10 PM",
        venue: "NBS Ground",
        type: "Match 3",
      },
      {
        home: {
          name: "Mughal",
          logo: "/og-logos/mughal.png",
        },
        away: {
          name: "Mongols",
          logo: "/og-logos/mongol.png",
        },
        date: "7th September",
        time: "19:10",
        detailedTime: "7:10 - 7:20 PM",
        venue: "NBS Ground",
        type: "Match 4",
      },
      {
        home: {
          name: "Ottomans",
          logo: "/og-logos/ottomans.png",
        },
        away: {
          name: "Winner 1",
        },
        date: "7th September",
        time: "19:20",
        detailedTime: "7:20 - 7:30 PM",
        venue: "NBS Ground",
        type: "Match 5",
      },
      {
        home: {
          name: "Winner 2",
        },
        away: {
          name: "Winner 3",
        },
        date: "7th September",
        time: "19:30",
        detailedTime: "7:30 - 7:40 PM",
        venue: "NBS Ground",
        type: "Match 6 - SF",
      },
      {
        home: {
          name: "Winner 4",
        },
        away: {
          name: "Winner 5",
        },
        date: "7th September",
        time: "19:30",
        detailedTime: "7:40 - 7:50 PM",
        venue: "NBS Ground",
        type: "Match 7 - SF",
      },
      {
        home: {
          name: "Winner 6",
        },
        away: {
          name: "Winner 7",
        },
        date: "7th September",
        time: "20:10",
        detailedTime: "8:10 - 8:30 PM",
        venue: "NBS Ground",
        type: "Final",
      },
    ],
  },
  {
    category: "Futsal",
    icon: faFutbol,
    showType: true,
    note: "5 min for break between each game for setup (buffer time)",
    fixtures: [
      {
        home: {
          name: "Samurai",
          logo:'/og-logos/samurai.png'
        },
        away: {
          name: "Mongols",
          logo: "/og-logos/mongol.png",
        },
        date: "7th September",
        time: "17:30",
        detailedTime: "5:30 PM Onwards",
        venue: "NBS Ground",
        type: "Match 1",
      },
      {
        home: {
          name: "Khilji",
          logo:'/og-logos/khiljis.png'
        },
        away: {
          name: "Spartans",
          logo:'/og-logos/spartans.png'
        },
        date: "7th September",
        time: "17:30",
        detailedTime: "5:30 PM Onwards",
        venue: "NBS Ground",
        type: "Match 2",
      },
      {
        home: {
          name: "Vikings",
          logo:'/og-logos/vikings.png'
        },
        away: {
          name: "Seljuks",
          logo:'/og-logos/seljuks.png'
        },
        date: "7th September",
        time: "17:30",
        detailedTime: "5:30 PM Onwards",
        venue: "NBS Ground",
        type: "Match 3",
      },
      {
        home: {
          name: "Romans",
          logo:'/og-logos/romans.png'
        },
        away: {
          name: "Mughal",
          logo: "/og-logos/mughal.png",
        },
        date: "7th September",
        time: "17:30",
        detailedTime: "5:30 PM Onwards",
        venue: "NBS Ground",
        type: "Match 4",
      },
      {
        home: {
          name: "Ottomans",
          logo: "/og-logos/ottomans.png",
        },
        away: {
          name: "Winner 1",
        },
        date: "7th September",
        time: "17:30",
        detailedTime: "5:30 PM Onwards",
        venue: "NBS Ground",
        type: "Match 5",
      },
      {
        home: {
          name: "Winner 2",
        },
        away: {
          name: "Winner 3",
        },
        date: "7th September",
        time: "17:30",
        detailedTime: "5:30 PM Onwards",
        venue: "NBS Ground",
        type: "Match 6 - SF",
      },
      {
        home: {
          name: "Winner 4",
        },
        away: {
          name: "Winner 5",
        },
        date: "7th September",
        time: "17:30",
        detailedTime: "5:30 PM Onwards",
        venue: "NBS Ground",
        type: "Match 7 - SF",
      },
      {
        home: {
          name: "Winner 6",
        },
        away: {
          name: "Winner 7",
        },
        date: "7th September",
        time: "17:30",
        detailedTime: "5:30 PM Onwards",
        venue: "NBS Ground",
        type: "Final",
      },
    ],
  },
  {
    category: "Volta OC Event ",
    icon: faUsers,
    showType: true,
    fixtures: [
      {
        home: {
          name: "OGs",
        },
        away: {
          name: "SOCs",
        },
        date: "7th September",
        time: "20:10",
        detailedTime: "8:10 - 8:13 PM",
        venue: "NBS Ground",
        type: "Match 1",
      },
      {
        home: {
          name: "OPs",
        },
        away: {
          name: "Resource",
        },
        date: "7th September",
        time: "20:13",
        detailedTime: "8:13 - 8:16 PM",
        venue: "NBS Ground",
        type: "Match 2",
      },
      {
        home: {
          name: "Outsource",
        },
        away: {
          name: "Media",
        },
        date: "7th September",
        time: "20:16",
        detailedTime: "8:16 - 8:18 PM",
        venue: "NBS Ground",
        type: "Match 3",
      },
      {
        home: {
          name: "HR",
        },
        away: {
          name: "Winner 1",
        },
        date: "7th September",
        time: "20:18",
        detailedTime: "8:18 - 8:21 PM",
        venue: "NBS Ground",
        type: "Match 4 - SF 1",
      },
      {
        home: {
          name: "Winner 2",
        },
        away: {
          name: "Winner 3",
        },
        date: "7th September",
        time: "20:21",
        detailedTime: "8:21 - 8:24 PM",
        venue: "NBS Ground",
        type: "Match 5 - SF 2",
      },
      {
        home: {
          name: "Winner 4",
        },
        away: {
          name: "Winner 5",
        },
        date: "7th September",
        time: "20:24",
        detailedTime: "8:24 - 8:27 PM",
        venue: "NBS Ground",
        type: "Final",
      },
    ],
  },
  {
    category: "Volta",
    icon: faUsers,
    oneTeam: true,
    fixtures: [
      {
        name: "Volta Free for All",
        date: "6th September",
        time: "20:30",
        detailedTime: "8:30 - 9:00 PM",
        venue: "NBS Ground",
      },
    ],
  },
];
export default ogsFixtures;
