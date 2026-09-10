export interface Circuit {
  id: string;
  name: string;
  sanskrit: string;
  description: string;
  sites: number;
  image: string;
}

export const circuits: Circuit[] = [
  {
    id: 'char-dham',
    name: 'Char Dham',
    sanskrit: 'चार धाम',
    description:
      'The four sacred abodes — Badrinath, Dwarka, Jagannath Puri and Rameswaram — form the holiest pilgrimage circuit in Hinduism.',
    sites: 4,
    image:
      'https://images.pexels.com/photos/33329078/pexels-photo-33329078.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'jyotirlinga',
    name: 'Jyotirlinga',
    sanskrit: 'ज्योतिर्लिङ्ग',
    description:
      'Twelve temples where Lord Shiva manifested as a radiant pillar of light, from Somnath on the coast to Kedarnath in the Himalayas.',
    sites: 12,
    image:
      'https://images.pexels.com/photos/16152405/pexels-photo-16152405.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'shakti-peethas',
    name: 'Shakti Peethas',
    sanskrit: 'शक्ति पीठ',
    description:
      'Sacred shrines where parts of Goddess Sati fell to earth, each a powerful seat of the Divine Mother across the subcontinent.',
    sites: 51,
    image:
      'https://images.pexels.com/photos/39341979/pexels-photo-39341979.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'south-india-trail',
    name: 'South India Temple Trail',
    sanskrit: 'दक्षिण भारत यात्रा',
    description:
      'A journey through the Dravidian masterpieces of Tamil Nadu and Karnataka — Meenakshi, Brihadeeswarar, Hampi and Pattadakal.',
    sites: 8,
    image:
      'https://images.pexels.com/photos/32216134/pexels-photo-32216134.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];
