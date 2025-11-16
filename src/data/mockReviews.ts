export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  source: 'Trustpilot' | 'Google';
  date: string;
}

export const mockReviews: Review[] = [
  {
    id: '1',
    name: 'Sarah M.',
    rating: 5,
    text: 'Super snelle levering en de AirPod werkt perfect! Blij dat ik niet een hele nieuwe set hoefde te kopen.',
    source: 'Trustpilot',
    date: '2025-01-10',
  },
  {
    id: '2',
    name: 'Jan P.',
    rating: 5,
    text: 'Uitstekende service. Kon mijn verloren rechter AirPod vervangen voor een fractie van de prijs van een nieuwe set.',
    source: 'Google',
    date: '2025-01-08',
  },
  {
    id: '3',
    name: 'Lisa K.',
    rating: 5,
    text: 'Ik was eerst sceptisch, maar de losse AirPod koppelt perfect met mijn bestaande set. Aanrader!',
    source: 'Trustpilot',
    date: '2025-01-05',
  },
  {
    id: '4',
    name: 'Mark V.',
    rating: 5,
    text: 'Afgehaald in de winkel in Amsterdam. Vriendelijk personeel en ze hebben me geholpen met koppelen.',
    source: 'Google',
    date: '2025-01-03',
  },
  {
    id: '5',
    name: 'Emma D.',
    rating: 5,
    text: 'Precies wat ik zocht! Website is duidelijk en ik had mijn bestelling de volgende dag al binnen.',
    source: 'Trustpilot',
    date: '2024-12-28',
  },
  {
    id: '6',
    name: 'Thomas H.',
    rating: 5,
    text: '100% origineel Apple product. Blij dat ik dit gevonden heb, scheelt een hoop geld!',
    source: 'Google',
    date: '2024-12-22',
  },
];

export const reviewStats = {
  averageRating: 4.9,
  totalReviews: 360,
};
