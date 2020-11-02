const playerDetails = {
  playerId: "HK000000001",
  bio: {
    photo: "",
    fullName: "Gaurang Bhardwaj",
    height: `${Math.floor(Math.random() * 200)} cm`,
    weight: `${Math.floor(Math.random() * 200)} kg`,
    dateOfBirth: Date.now(), //Timestamp
    position: "RW",
    workRate: Math.floor(Math.random() * 50),
    preferredFoot: "Left",
  },
  trophies: [
    {
      leagueName: "La Liga",
      number: Math.floor(Math.random() * 10),
      type: "Trophies",
    },
    {
      leagueName: "La Liga",
      number: Math.floor(Math.random() * 10),
      type: "Titles",
    },
    {
      leagueName: "La Liga",
      number: Math.floor(Math.random() * 10),
      type: "Titles",
    },
  ],
  socialAccounts: [
    {account: "FACEBOOK", name: "facebook", link: "https://facebook.com"},
    {account: "INSTAGRAM", name: "instagram", link: "https://twitter.com"},
    {account: "TWITTER", name: "twitter", link: "https://instagram.com"},
  ],
  skills: [
    {
      categoryName: "Shooting",
      subCategories: [
        {skillName: "Heading", progress: 50},
        {skillName: "Heading", progress: 10},
        {skillName: "Heading", progress: 30},
        {skillName: "Heading", progress: 90},
        {skillName: "Heading", progress: 10},
        {skillName: "Heading", progress: 30},
        {skillName: "Heading", progress: 10},
        {skillName: "Heading", progress: 30},
      ],
    },
    {
      categoryName: "Defence",
      subCategories: [
        {skillName: "Heading", progress: 50},
        {skillName: "Heading", progress: 10},
        {skillName: "Heading", progress: 30},
      ],
    },
    {
      categoryName: "Shooting",
      subCategories: [
        {skillName: "Heading", progress: 50},
        {skillName: "Heading", progress: 10},
        {skillName: "Heading", progress: 30},
      ],
    },
    {
      categoryName: "Shooting",
      subCategories: [
        {skillName: "Heading", progress: 50},
        {skillName: "Heading", progress: 10},
        {skillName: "Heading", progress: 30},
        {skillName: "Heading", progress: 90},
        {skillName: "Heading", progress: 10},
        {skillName: "Heading", progress: 30},
        {skillName: "Heading", progress: 10},
        {skillName: "Heading", progress: 30},
      ],
    },
    {
      categoryName: "Shooting",
      subCategories: [
        {skillName: "Heading", progress: 50},
        {skillName: "Heading", progress: 10},
      ],
    },
    {
      categoryName: "Mental",
      subCategories: [
        {skillName: "Heading", progress: 50},
        {skillName: "Heading", progress: 10},
        {skillName: "Heading", progress: 30},
        {skillName: "Heading", progress: 90},
      ],
    },
    {
      categoryName: "GoalKeeper",
      subCategories: [
        {skillName: "Heading", progress: 50},
        {skillName: "Heading", progress: 10},
        {skillName: "Heading", progress: 30},
        {skillName: "Heading", progress: 90},
      ],
    },
    {
      categoryName: "Specialities",
      subCategories: [
        {skillName: "Heading", progress: 50},
        {skillName: "Heading", progress: 10},
        {skillName: "Heading", progress: 30},
        {skillName: "Heading", progress: 90},
      ],
    },
  ],
};

export {playerDetails};
