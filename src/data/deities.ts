export interface Deity {
  id: string;
  name: string;
  sanskrit: string;
  description: string;
  icon: string;
}

export const deities: Deity[] = [
  {
    id: 'shiva',
    name: 'Shiva',
    sanskrit: 'शिव',
    description: 'The Destroyer — lord of meditation, transformation and the cosmic dance.',
    icon: 'Moon',
  },
  {
    id: 'vishnu',
    name: 'Vishnu',
    sanskrit: 'विष्णु',
    description: 'The Preserver — protector of the universe with ten divine avatars.',
    icon: 'Disc',
  },
  {
    id: 'krishna',
    name: 'Krishna',
    sanskrit: 'कृष्ण',
    description: 'The Divine Cowherd — teacher of the Bhagavad Gita and embodiment of love.',
    icon: 'Feather',
  },
  {
    id: 'rama',
    name: 'Rama',
    sanskrit: 'राम',
    description: 'The Perfect King — avatar of Vishnu and exemplar of dharma and duty.',
    icon: 'Crown',
  },
  {
    id: 'devi',
    name: 'Devi',
    sanskrit: 'देवी',
    description: 'The Divine Mother — all-powerful goddess in forms like Durga and Lakshmi.',
    icon: 'Flower2',
  },
  {
    id: 'ganesha',
    name: 'Ganesha',
    sanskrit: 'गणेश',
    description: 'The Remover of Obstacles — invoked at the start of every sacred endeavor.',
    icon: 'Sparkles',
  },
  {
    id: 'murugan',
    name: 'Murugan',
    sanskrit: 'मुरुगन',
    description: 'The God of War and Victory — beloved deity of Tamil devotion.',
    icon: 'Zap',
  },
  {
    id: 'venkateswara',
    name: 'Venkateswara',
    sanskrit: 'वेङ्कटेश्वर',
    description: 'Lord of the Seven Hills — the most worshipped form of Vishnu in India.',
    icon: 'Mountain',
  },
];
