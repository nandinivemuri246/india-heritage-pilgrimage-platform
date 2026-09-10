export interface Festival {
  id: string;
  name: string;
  region: string;
  date: string;
  description: string;
  image: string;
}

const image = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export const festivals: Festival[] = [
  {
    id: 'janmashtami',
    name: 'Krishna Janmashtami',
    region: 'Mathura & Vrindavan, Uttar Pradesh',
    date: 'August–September 2026',
    description:
      'The birth of Lord Krishna is celebrated at midnight with temple music, devotional singing, cradle ceremonies and beautifully decorated shrines across the Braj region.',
    image: image('30816806'),
  },
  {
    id: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi',
    region: 'Mumbai, Maharashtra',
    date: 'August–September 2026',
    description:
      'An eleven-day celebration welcoming Ganesha idols into homes and public pandals, culminating in colourful processions and visarjan ceremonies.',
    image: image('36278293'),
  },
  {
    id: 'durga-puja',
    name: 'Durga Puja',
    region: 'Kolkata, West Bengal',
    date: 'October 2026',
    description:
      'Kolkata transforms with magnificent pandals, artistic Durga idols, dhak rhythms and community celebrations honouring the victory of good over evil.',
    image: image('14007190'),
  },
  {
    id: 'diwali',
    name: 'Diwali — Festival of Lights',
    region: 'Varanasi, Uttar Pradesh & pan-India',
    date: 'November 2026',
    description:
      'Homes, temples and river ghats glow with rows of diyas as families gather for prayers, sweets and the celebration of light over darkness.',
    image: image('815580'),
  },
  {
    id: 'maha-shivaratri',
    name: 'Maha Shivaratri',
    region: 'Kashi, Ujjain & Shiva temples across India',
    date: 'February–March 2027',
    description:
      'A night of devotion to Shiva marked by fasting, night-long worship, bilva offerings and temple aartis that continue until dawn.',
    image: image('31598123'),
  },
  {
    id: 'rama-navami',
    name: 'Rama Navami',
    region: 'Ayodhya, Uttar Pradesh & pan-India',
    date: 'March–April 2027',
    description:
      'Devotees celebrate the birth of Lord Rama with temple processions, scripture recitations, devotional music and ceremonies at Rama shrines.',
    image: image('15902534'),
  },
  {
    id: 'ugadi',
    name: 'Ugadi',
    region: 'Andhra Pradesh, Telangana & Karnataka',
    date: 'March–April 2027',
    description:
      'The Telugu and Kannada New Year begins with mango-leaf decorations, rangoli, temple visits and the symbolic Ugadi pachadi of six flavours.',
    image: image('13617163'),
  },
  {
    id: 'onam',
    name: 'Onam',
    region: 'Kerala',
    date: 'August–September 2026',
    description:
      'Kerala welcomes the homecoming of King Mahabali with pookalam flower carpets, traditional feasts, temple rituals and community celebrations.',
    image: image('38783573'),
  },
  {
    id: 'pongal',
    name: 'Thai Pongal',
    region: 'Tamil Nadu',
    date: 'January 2027',
    description:
      'The Tamil harvest festival gives thanks for the sun and the year\'s abundance with decorated pots, kolam patterns, sugarcane and family gatherings.',
    image: image('35763758'),
  },
  {
    id: 'navratri',
    name: 'Navratri',
    region: 'Gujarat, West Bengal & pan-India',
    date: 'September–October 2026',
    description:
      'Nine nights honour the many forms of the Divine Mother through temple worship, Durga celebrations, music, dance and richly decorated shrines.',
    image: image('29403683'),
  },
];
