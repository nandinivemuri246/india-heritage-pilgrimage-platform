export interface StateInfo {
  id: string;
  name: string;
  templeCount: number;
  description: string;
  image: string;
}

export const states: StateInfo[] = [
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    templeCount: 34,
    description: 'Home to Tirumala, the richest and most visited temple in the world.',
    image:
      'https://images.pexels.com/photos/38410656/pexels-photo-38410656.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'telangana',
    name: 'Telangana',
    templeCount: 22,
    description: 'Ancient shrines like Bhadrachalam and Yadadri draw devotees year-round.',
    image:
      'https://images.pexels.com/photos/5103732/pexels-photo-5103732.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    templeCount: 79,
    description: 'The crown jewel of Dravidian temple architecture with towering gopurams.',
    image:
      'https://images.pexels.com/photos/7567569/pexels-photo-7567569.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    templeCount: 45,
    description: 'UNESCO sites at Hampi and Pattadakal showcase centuries of craftsmanship.',
    image:
      'https://images.pexels.com/photos/31969428/pexels-photo-31969428.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'kerala',
    name: 'Kerala',
    templeCount: 28,
    description: 'Distinctive wooden temples and the sacred Padmanabhaswamy shrine.',
    image:
      'https://images.pexels.com/photos/30778230/pexels-photo-30778230.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    templeCount: 31,
    description: 'Ashtavinayak temples and the Jyotirlingas of Trimbakeshwar and Bhimashankar.',
    image:
      'https://images.pexels.com/photos/31739736/pexels-photo-31739736.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    templeCount: 26,
    description: 'Somnath and Dwarka — sacred coastal shrines of Shiva and Krishna.',
    image:
      'https://images.pexels.com/photos/24771796/pexels-photo-24771796.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    templeCount: 19,
    description: 'Dilwara marble temples and the Brahma shrine at Pushkar.',
    image:
      'https://images.pexels.com/photos/33797765/pexels-photo-33797765.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    templeCount: 38,
    description: 'Kashi Vishwanath, Ayodhya, and Mathura-Vrindavan — the heartland of devotion.',
    image:
      'https://images.pexels.com/photos/38857186/pexels-photo-38857186.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'odisha',
    name: 'Odisha',
    templeCount: 24,
    description: 'The Kalinga style shines at Jagannath Puri, Konark Sun Temple and Lingaraj.',
    image:
      'https://images.pexels.com/photos/33518945/pexels-photo-33518945.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
