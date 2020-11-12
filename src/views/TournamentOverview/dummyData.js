export const onGoingMatchDummyData = [
  {
    leagueStatus: 'Live',
    leagueName: 'English Premier League',
    teamOne: 'Barcelona',
    teamTwo: 'Arsenal',
    teamOneLogo: 'https://via.placeholder.com/75',
    teamTwoLogo: 'https://via.placeholder.com/75',
    teamOneGoals: 2,
    teamTwoGoals: 1,
    matchReferee: 'Jack Paretta',
    matchTime: '30:00',
    matchTimelineLink: 'https://somelinkhere.com',
  },
];

export const upcomingmatches = [
  {
    matchId: 1,
    teamOne: 'Barcelona',
    teamOneIcon: 'https://via.placeholder.com/21x21',
    teamTwo: 'Arsenal',
    teamTwoIcon: 'https://via.placeholder.com/21x21',
    matchDate: '10-09-2021',
    matchTime: '19:00',
    matchLink: 'https://example.com',
  },
  {
    matchId: 2,
    teamOne: 'Real Madrid',
    teamOneIcon: 'https://via.placeholder.com/21x21',
    teamTwo: 'Liverpool',
    teamTwoIcon: 'https://via.placeholder.com/21x21',
    matchDate: '15-09-2021',
    matchTime: '15:00',
    matchLink: 'https://example.com',
  },
  {
    matchId: 3,
    teamOne: 'Mancester City',
    teamOneIcon: 'https://via.placeholder.com/21x21',
    teamTwo: 'Aston Villa',
    teamTwoIcon: 'https://via.placeholder.com/21x21',
    matchDate: '19-09-2021',
    matchTime: '17:00',
    matchLink: 'https://example.com',
  },
  {
    matchId: 4,
    teamOne: 'Real Madrid',
    teamOneIcon: 'https://via.placeholder.com/21x21',
    teamTwo: 'Mancester City',
    teamTwoIcon: 'https://via.placeholder.com/21x21',
    matchDate: '15-09-2021',
    matchTime: '15:00',
    matchLink: 'https://example.com',
  },
  {
    matchId: 5,
    teamOne: 'Real Madrid',
    teamOneIcon: 'https://via.placeholder.com/21x21',
    teamTwo: 'Arsenal',
    teamTwoIcon: 'https://via.placeholder.com/21x21',
    matchDate: '15-09-2021',
    matchTime: '15:00',
    matchLink: 'https://example.com',
  },
];

const pastMatchesTeamList = [
  {
    key: 'barcelona',
    text: 'barcelona',
    value: 'BRCA',
    image: {
      avatar: true,
      src: 'https://via.placeholder.com/30x30',
    },
  },
  {
    key: 'manchesterUnited',
    text: 'Manchester United',
    value: 'MANU',
    image: {
      avatar: true,
      src: 'https://via.placeholder.com/30x30',
    },
  },
];

const pastMatches = [
  {
    team: 'Barcelona',
    teamIcon: 'https://via.placeholder.com/21x21',
    matches: [
      {
        matchId: '1',
        teamOne: 'Barcelona',
        teamOneIcon: 'https://via.placeholder.com/21x21',
        teamTwo: 'Real Medrid',
        teamTwoIcon: 'https://via.placeholder.com/21x21',
        matchDuration: '90',
        extraTime: '0',
        color: 'red',
      },
      {
        matchId: '2',
        teamOne: 'Barcelona',
        teamOneIcon: 'https://via.placeholder.com/21x21',
        teamTwo: 'Arsenal',
        teamTwoIcon: 'https://via.placeholder.com/21x21',
        matchDuration: '94',
        extraTime: '4',
        color: 'green',
      },
      {
        matchId: '3',
        teamOne: 'Barcelona',
        teamOneIcon: 'https://via.placeholder.com/21x21',
        teamTwo: 'Juventus',
        teamTwoIcon: 'https://via.placeholder.com/21x21',
        matchDuration: '120',
        extraTime: '30',
        color: 'blue',
      },
      {
        matchId: '4',
        teamOne: 'Barcelona',
        teamOneIcon: 'https://via.placeholder.com/21x21',
        teamTwo: 'Mancester City',
        teamTwoIcon: 'https://via.placeholder.com/21x21',
        matchDuration: '90',
        extraTime: '0',
        color: 'red',
      },
    ],
  },
  {
    team: 'Manchester United',
    teamIcon: 'https://via.placeholder.com/21x21',
    matches: [
      {
        matchId: '1',
        teamOne: 'Manchester United',
        teamOneIcon: 'https://via.placeholder.com/21x21',
        teamTwo: 'Arsenal',
        teamTwoIcon: 'https://via.placeholder.com/21x21',
        matchDuration: '95',
        extraTime: '5',
        color: 'blue',
      },
      {
        matchId: '2',
        teamOne: 'Manchester United',
        teamOneIcon: 'https://via.placeholder.com/21x21',
        teamTwo: 'Real Medrid',
        teamTwoIcon: 'https://via.placeholder.com/21x21',
        matchDuration: '90',
        extraTime: '0',
        color: 'green',
      },

      {
        matchId: '3',
        teamOne: 'Manchester United',
        teamOneIcon: 'https://via.placeholder.com/21x21',
        teamTwo: 'Juventus',
        teamTwoIcon: 'https://via.placeholder.com/21x21',
        matchDuration: '120',
        extraTime: '30',
        color: 'red',
      },
      {
        matchId: '4',
        teamOne: 'Manchester United',
        teamOneIcon: 'https://via.placeholder.com/21x21',
        teamTwo: 'Mancester City',
        teamTwoIcon: 'https://via.placeholder.com/21x21',
        matchDuration: '90',
        extraTime: '0',
        color: 'red',
      },
    ],
  },
];

export const pastmatchesdata = {
  pastMatches,
  pastMatchesTeamList,
};

export const leagueOptions = [
  {
    key: 'epl',
    text: 'Premier League',
    value: 'EPL',
    image: {
      avatar: true,
      src:
        'https://yt3.ggpht.com/a/AATXAJznyYl94RkgGa-dr-rsJAAgufjqxY-uLa-21pxy=s900-c-k-c0x00ffffff-no-rj',
    },
  },
  {
    key: 'll',
    text: 'LaLiga',
    value: 'LL',
    image: {
      avatar: true,
      src:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQkbr4sp5MzSLRQnuxkCpbmdSU6UsQz9YpSA&usqp=CAU',
    },
  },
  {
    key: 'sa',
    text: 'Serie A',
    value: 'SA',
    image: {
      avatar: true,
      src:
        'https://lh3.googleusercontent.com/ktpS0TBR93beQNnMvoY6OCzeY89TW_KbToCV7H0gcUOSNuwO9BIGqwLLF-tfNhGyVhcQflKolEUkScekTYXkZhE',
    },
  },
];

export const blogData = [
  {
    id: '5f6a2cbc9c42baf7007d9a18',
    title: 'laboris aliquip elit',
    time: 9,
    author: 'Patrick House',
    authorImage: 'https://randomuser.me/api/portraits/men/75.jpg',
    articleImage: 'https://via.placeholder.com/360x160',
    lead:
      'Est cillum ad eiusmod id labore deserunt incididunt culpa non nulla. Laborum culpa et excepteur aliquip proident id sint dolor ut sunt excepteur. Adipisicing laborum minim officia nostrud adipisicing cillum exercitation proident eu elit amet.\r\n',
  },
  {
    id: '5f6a2cbca80484c3bf55a42e',
    title: 'ad et labore',
    time: 4,
    author: 'Elvia Tillman',
    authorImage: 'https://randomuser.me/api/portraits/women/75.jpg',
    articleImage: 'https://via.placeholder.com/360x160',
    lead:
      'Magna ipsum voluptate labore esse ut labore reprehenderit deserunt occaecat. Voluptate qui do mollit enim adipisicing esse exercitation nostrud. Qui eiusmod proident consectetur veniam voluptate aliqua. Labore nisi minim non non ea nisi non ullamco mollit reprehenderit do fugiat.\r\n',
  },
  {
    id: '5f6a2cbc7ec12129b3b29918',
    title: 'mollit ullamco est',
    time: 7,
    author: 'Ruby Boyd',
    authorImage: 'https://randomuser.me/api/portraits/women/45.jpg',
    articleImage: 'https://via.placeholder.com/360x160',
    lead:
      'Elit fugiat eiusmod Lorem ipsum commodo exercitation. Sint adipisicing non in dolore tempor deserunt est ullamco commodo ea adipisicing. Duis sit irure fugiat aliquip qui. Laboris dolore eiusmod laboris laboris officia sit et officia est sint ad. Nostrud do excepteur officia quis id irure laboris fugiat et et veniam et aliquip. Non qui aute nulla aliqua eiusmod labore tempor exercitation sunt occaecat.\r\n',
  },
];

// array so that list of video and can be randomized
export const overviewVideoInfo = [
  {
    videoTitle: 'Barcelona Match',
    videoSubtitle: 'Lionel Messi',
  },
];
