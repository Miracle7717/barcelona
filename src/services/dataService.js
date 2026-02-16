// Fake JSON Data Service with delay simulation

// Matches data
export const matchesData = [
  {
    id: 1,
    team1: 'FC Barcelona',
    team2: 'Real Madrid',
    date: '2026-02-21',
    time: '20:45',
    score: '2-1',
    status: 'completed',
    competition: 'La Liga'
  },
  {
    id: 2,
    team1: 'FC Barcelona',
    team2: 'Bayern Munich',
    date: '2026-02-28',
    time: '19:00',
    score: null,
    status: 'upcoming',
    competition: 'Champions League'
  },
  {
    id: 3,
    team1: 'FC Barcelona',
    team2: 'Atletico Madrid',
    date: '2026-03-07',
    time: '18:30',
    score: null,
    status: 'upcoming',
    competition: 'La Liga'
  },
  {
    id: 4,
    team1: 'Sevilla',
    team2: 'FC Barcelona',
    date: '2026-03-15',
    time: '16:00',
    score: null,
    status: 'upcoming',
    competition: 'Copa del Rey'
  },
];

// News data with LIST/DETAIL structure
export const newsData = [
  {
    id: 1,
    title: 'Lewandowski забил 4 гола в матче',
    excerpt: 'Суперзвезда забила 4 гола в последнем матче против Реал Мадрида',
    date: '2026-02-16',
    author: 'Sports News',
    image: 'https://via.placeholder.com/400x250?text=Lewandowski',
    content: 'Роберт Левандовски показал отличную игру, забив 4 гола в matче против Реал Мадрида. Это был один из самых яких матчей сезона. Команда показала отличное мастерство и тактическую выучку.'
  },
  {
    id: 2,
    title: 'Pedri восстановился после травмы',
    excerpt: 'Молодой таланты вернулся на поле после месячного отдыха',
    date: '2026-02-15',
    author: 'Barcelona News',
    image: 'https://via.placeholder.com/400x250?text=Pedri',
    content: 'Педри успешно восстановился после травмы и вернулся на поле. Тренер выразил свою радость по поводу возвращения молодого таланта. Его присутствие на поле значительно укрепит команду в полузащите.'
  },
  {
    id: 3,
    title: 'Трансфер новости: новый вратарь в команде',
    excerpt: 'Клуб подписал контракт с португальским вратарем',
    date: '2026-02-14',
    author: 'Transfer News',
    image: 'https://via.placeholder.com/400x250?text=Goalkeeper',
    content: 'FC Barcelona подписала контракт с португальским вратарем. Это стратегическое пополнение укрепит оборону команды. Новый вратарь присоединится к команде с 1 марта 2026 года.'
  },
  {
    id: 4,
    title: 'Чемпионская подготовка начинается',
    excerpt: 'Команда начинает интенсивную подготовку к Лиге чемпионов',
    date: '2026-02-13',
    author: 'Sports News',
    image: 'https://via.placeholder.com/400x250?text=Training',
    content: 'Менеджер команды объявил о начале интенсивной подготовки к матчам Лиги чемпионов. Команда будет сфокусирована на улучшении оборонительных и наступательных тактик.'
  },
];

// Standings data
export const standingsData = [
  {
    id: 1,
    position: 1,
    team: 'FC Barcelona',
    played: 25,
    won: 18,
    drawn: 4,
    lost: 3,
    goalsFor: 65,
    goalsAgainst: 25,
    goalDifference: 40,
    points: 58
  },
  {
    id: 2,
    position: 2,
    team: 'Real Madrid',
    played: 25,
    won: 17,
    drawn: 5,
    lost: 3,
    goalsFor: 62,
    goalsAgainst: 24,
    goalDifference: 38,
    points: 56
  },
  {
    id: 3,
    position: 3,
    team: 'Atletico Madrid',
    played: 25,
    won: 15,
    drawn: 6,
    lost: 4,
    goalsFor: 48,
    goalsAgainst: 22,
    goalDifference: 26,
    points: 51
  },
  {
    id: 4,
    position: 4,
    team: 'Sevilla',
    played: 25,
    won: 13,
    drawn: 5,
    lost: 7,
    goalsFor: 45,
    goalsAgainst: 30,
    goalDifference: 15,
    points: 44
  },
];

// Service function to simulate API call with delay
const simulateDelay = (ms = 1500) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch functions with delay
export const fetchMatches = async () => {
  await simulateDelay(1500);
  return matchesData;
};

export const fetchNews = async () => {
  await simulateDelay(1200);
  return newsData;
};

export const fetchNewsDetail = async (id) => {
  await simulateDelay(1000);
  return newsData.find(item => item.id === id);
};

export const fetchStandings = async () => {
  await simulateDelay(1300);
  return standingsData;
};

export const fetchPlayers = async () => {
  await simulateDelay(1100);
  return [
    { id: 1, name: 'Robert Lewandowski', club: 'Barcelona', position: 'Forward', number: 9 },
    { id: 2, name: 'Pedri', club: 'Barcelona', position: 'Midfielder', number: 8 },
    { id: 3, name: 'Marc-André ter Stegen', club: 'Barcelona', position: 'Goalkeeper', number: 1 },
    { id: 4, name: 'Jules Koundé', club: 'Barcelona', position: 'Defender', number: 23 },
    { id: 5, name: 'Gavi', club: 'Barcelona', position: 'Midfielder', number: 6 },
  ];
};
