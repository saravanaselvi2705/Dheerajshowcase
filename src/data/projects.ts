export type ScreeningCategory =
  | 'Short-Form Reels'
  | 'Commercials'
  | 'Documentary / Long-Form';

export type AspectMode = '16:9' | '9:16';

export interface ScreeningProject {
  id: string;
  driveId: string;
  title: string;
  client: string;
  category: ScreeningCategory;
  role: string;
  runtime: string;
  aspect: AspectMode;
  thumbnail: string;
  year: string;
  formatNote: string;
}

export const SCREENING_CATEGORIES: readonly ('All' | ScreeningCategory)[] = [
  'All',
  'Short-Form Reels',
  'Commercials',
  'Documentary / Long-Form',
] as const;

export const CONTACT_INFO = {
  editorName: 'DHEERAJ C',
  subtitle: 'Post-Production Screening Room',
  phoneDisplay: '+91 95397 94989',
  phoneHref: 'tel:+919539794989',
  whatsappHref: 'https://wa.me/919539794989',
  email: 'dheerajcheeppilatt@gmail.com',
  emailHref: 'mailto:dheerajcheeppilatt@gmail.com',
  driveFolderHref:
    'https://drive.google.com/drive/folders/1lXGKB4gSheozYimxkuvLpFqqI8KhYoXS',
} as const;

export function getDriveStreamUrl(driveId: string): string {
  return `https://drive.usercontent.google.com/download?id=${driveId}&export=download`;
}

export function getDrivePreviewUrl(driveId: string): string {
  return `https://drive.google.com/file/d/${driveId}/preview`;
}

export const SCREENING_PROJECTS: ScreeningProject[] = [
  {
    id: 'wt-cinema-spot',
    driveId: '1QP2pzxXOpzSbSUuQau2OtFx9ca6vloGr',
    title: 'Wise Talkies — Cinema Theater Spot',
    client: 'Wise Talkies',
    category: 'Commercials',
    role: 'Lead Editor · Motion & Sound Mix',
    runtime: '00:45',
    aspect: '16:9',
    thumbnail: '/thumbs/wt-theater-ad.webp',
    year: '2024',
    formatNote: 'DCP / 16:9 Cinema Commercial',
  },
  {
    id: 'adoor-masterclass',
    driveId: '1--qsowMuLIFVx39LgHPiTXkjS_B_bcPj',
    title: 'Masterclass Trailer — Adoor Gopalakrishnan',
    client: 'Wise Talkies',
    category: 'Documentary / Long-Form',
    role: 'Trailer Cut · Color Grade · QC',
    runtime: '02:14',
    aspect: '16:9',
    thumbnail: '/thumbs/adoor-trailer.webp',
    year: '2024',
    formatNote: '16:9 Flagship Documentary Cut',
  },
  {
    id: 'wt-casting-call',
    driveId: '12jt5dyp38otUmAP2Voynj6DRXBaRAmip',
    title: 'Casting Call — High-Retention Promo Reel',
    client: 'Wise Talkies',
    category: 'Short-Form Reels',
    role: 'Short-Form Edit · Kinetic Captions',
    runtime: '00:38',
    aspect: '9:16',
    thumbnail: '/thumbs/wt-casting-call.webp',
    year: '2024',
    formatNote: '9:16 Social Vertical Cut',
  },
  {
    id: 'gopinath-masterclass',
    driveId: '1VYmzIKjvEo4oCpS4XC_W3wVdGpv0LG3v',
    title: 'Masterclass Trailer — Gopinath Muthukad',
    client: 'Wise Talkies',
    category: 'Documentary / Long-Form',
    role: 'Senior Editor · Dialogue Sweetening',
    runtime: '01:52',
    aspect: '16:9',
    thumbnail: '/thumbs/gopinath-trailer.webp',
    year: '2024',
    formatNote: '16:9 Story & Hook Assembly',
  },
  {
    id: 'stalling-vehicle-reel',
    driveId: '1IyTbHi9ojraw5m2LkNDj7M0o7OYWGa8j',
    title: 'Stalling Vehicle — Explainer Reel',
    client: 'Digital Campaign',
    category: 'Short-Form Reels',
    role: 'Retention Edit · Audio & Pacing',
    runtime: '00:54',
    aspect: '9:16',
    thumbnail: '/thumbs/stalling-vehicle.webp',
    year: '2025',
    formatNote: '9:16 Educational Micro-Cut',
  },
  {
    id: 'festive-brand-film',
    driveId: '16wijCM8qxOtGSkBejQe_Na9GEb1deV5G',
    title: 'Festive Brand Film — Holiday Master',
    client: 'Retail Campaign',
    category: 'Commercials',
    role: 'Motion Graphics · Color & Mix',
    runtime: '00:48',
    aspect: '9:16',
    thumbnail: '/thumbs/xmas-prod-reels.webp',
    year: '2024',
    formatNote: '9:16 Social Campaign Package',
  },
  {
    id: 'raghunath-screenwriting',
    driveId: '1LPqeIj9kNeTWVXRst4KO_XHqhwdAME7P',
    title: 'Screenwriting Series — Raghunath Paleri',
    client: 'Wise Talkies',
    category: 'Documentary / Long-Form',
    role: 'Editor · Pacing & Color Balance',
    runtime: '02:08',
    aspect: '16:9',
    thumbnail: '/thumbs/raghunath-trailer.webp',
    year: '2023',
    formatNote: '16:9 Educational Series Promo',
  },
  {
    id: 'holiday-offer-promo',
    driveId: '1aoJGFWDxmp_iXdRuljFsJ8-dBy_0tqey',
    title: 'Holiday Offer — Motion Promo',
    client: 'Retail Campaign',
    category: 'Commercials',
    role: 'After Effects · Ad Pacing',
    runtime: '00:28',
    aspect: '9:16',
    thumbnail: '/thumbs/xmas-offer.webp',
    year: '2024',
    formatNote: '9:16 Performance Ad Creative',
  },
  {
    id: 'shaji-cinematography',
    driveId: '1lQJ3YTwVDX05MlUdVveXDJxvjyWr7R6J',
    title: 'Cinematography Cut — Shaji N. Karun',
    client: 'Wise Talkies',
    category: 'Documentary / Long-Form',
    role: 'Rough-to-Fine Cut · Visual Pacing',
    runtime: '01:46',
    aspect: '16:9',
    thumbnail: '/thumbs/shaji-trailer.webp',
    year: '2023',
    formatNote: '16:9 Masterclass Assembly',
  },
  {
    id: 'festive-collection-reel',
    driveId: '1C1SAMnb2GgcEwMiImmmfcDoyQLxobjsI',
    title: 'Festive Collection — Product Showcase Reel',
    client: 'Brand Creative',
    category: 'Short-Form Reels',
    role: 'Edit · Mood Grade · SFX',
    runtime: '00:32',
    aspect: '9:16',
    thumbnail: '/thumbs/xmas-products.webp',
    year: '2024',
    formatNote: '9:16 Product Reel',
  },
  {
    id: 'chef-letha-culinary',
    driveId: '1uhWGgnrEqhM98aBgsLAXge0R1Q4yuH7X',
    title: 'Culinary Craft — Chef Letha Series',
    client: 'Wise Talkies',
    category: 'Documentary / Long-Form',
    role: 'Editor · Multi-Cam Sync & Grade',
    runtime: '01:34',
    aspect: '16:9',
    thumbnail: '/thumbs/chef-letha-trailer.webp',
    year: '2023',
    formatNote: '16:9 Multi-Camera Tutorial Cut',
  },
  {
    id: 'curated-gift-box',
    driveId: '1NLshsyE_eyOjvUyEQbxe_QmQqC7NBBIB',
    title: 'Curated Gift Box — Product Spotlight Reel',
    client: 'Brand Creative',
    category: 'Short-Form Reels',
    role: 'Product Edit · Color & Sound',
    runtime: '00:36',
    aspect: '9:16',
    thumbnail: '/thumbs/reels-xmas-p4.webp',
    year: '2025',
    formatNote: '9:16 Product Showcase',
  },
];
