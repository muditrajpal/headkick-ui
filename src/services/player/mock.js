const playerDetails = {
  playerId: "HK000000001",
  bio: {
    photo: "",
    fullName: "Gaurang Bhardwaj",
    height: Math.floor(Math.random() * 200),
    weight: Math.floor(Math.random() * 100),
    dateOfBirth: Date.now(), //Timestamp
    position: "RW",
    workRate: Math.floor(Math.random() * 50),
    preferredFoot: "Left",
  },
  trophies: [
    {leagueName: "La Liga", titles: Math.floor(Math.random() * 10)},
    {leagueName: "La Liga", titles: Math.floor(Math.random() * 10)},
    {leagueName: "La Liga", titles: Math.floor(Math.random() * 10)},
  ],
  socialAccounts: [
    {account: "FACEBOOK", name: "facebook/name", link: "https://facebook.com"},
    {account: "INSTAGRAM", name: "instagram_name", link: "https://twitter.com"},
    {account: "TWITTER", name: "@twitterName", link: "https://instagram.com"},
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
