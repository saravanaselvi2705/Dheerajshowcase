import type { ImageMetadata } from 'astro';

import adoorTrailerThumb from '../assets/thumbnails/adoor-trailer.webp';
import gopinathTrailerThumb from '../assets/thumbnails/gopinath-trailer.webp';
import stallingVehicleThumb from '../assets/thumbnails/stalling-vehicle.webp';
import wtCastingCallThumb from '../assets/thumbnails/wt-casting-call.webp';
import wtTheaterAdThumb from '../assets/thumbnails/wt-theater-ad.webp';
import xmasProdReelsThumb from '../assets/thumbnails/xmas-prod-reels.webp';

export type ShowcaseAspect = '16:9' | '9:16';

export interface ShowcaseCut {
  id: string;
  driveFileId: string;
  title: string;
  client: string;
  category: string;
  badgeLabel: string;
  aspect: ShowcaseAspect;
  duration: string;
  role: string;
  thumbnail: ImageMetadata;
  streamUrl: string;
  previewUrl: string;
}

export const SHOWCASE_META = {
  brand: 'Dheeraj C',
  statusBadge: 'Senior Video Editor & Delivery Lead · Kozhikode',
  kicker: 'POST-PRODUCTION SCREENING DECK',
  headline: 'HIGH-RETENTION VIDEO EDITING THAT COMMANDS ATTENTION AND DRIVES RESULTS',
  subheadline:
    'Commercials, high-impact social reels, motion graphics, and end-to-end delivery pipelines. Click any cut below to stream the preview.',
  whatsappNumber: '919539794989',
  phoneDisplay: '+91 95397 94989',
  whatsappHref: 'https://wa.me/919539794989',
  email: 'dheerajcheeppilatt@gmail.com',
  emailHref: 'mailto:dheerajcheeppilatt@gmail.com',
  portfolioUrl: 'https://dheerajcportfolio.vercel.app/',
  portfolioLabel: 'dheerajcportfolio.vercel.app',
} as const;

export const SHOWCASE_SERVICES = [
  { icon: '✂', label: 'Commercial Post-Production' },
  { icon: '⚡', label: 'High-Retention Reels' },
  { icon: '🎨', label: 'Color Grading & Sound Mix' },
] as const;

function makeDrivePreviewUrl(driveFileId: string): string {
  return `https://drive.google.com/file/d/${driveFileId}/preview`;
}

export const SHOWCASE_CUTS: ShowcaseCut[] = [
  {
    id: 'wt-cinema-spot',
    driveFileId: '1QP2pzxXOpzSbSUuQau2OtFx9ca6vloGr',
    title: 'Wise Talkies — Cinema Theater Spot',
    client: 'Wise Talkies',
    category: 'Commercial',
    badgeLabel: 'Commercial',
    aspect: '16:9',
    duration: '00:45',
    role: 'Lead Editor · Motion & Sound Mix',
    thumbnail: wtTheaterAdThumb,
    streamUrl: '/videos/wt-cinema-spot.mp4',
    previewUrl: makeDrivePreviewUrl('1QP2pzxXOpzSbSUuQau2OtFx9ca6vloGr'),
  },
  {
    id: 'wt-casting-call',
    driveFileId: '12jt5dyp38otUmAP2Voynj6DRXBaRAmip',
    title: 'Wise Talkies — Casting Call',
    client: 'Wise Talkies',
    category: 'Reel',
    badgeLabel: '9:16 Reel',
    aspect: '9:16',
    duration: '00:38',
    role: 'Short-Form Edit · Kinetic Captions',
    thumbnail: wtCastingCallThumb,
    streamUrl: '/videos/wt-casting-call.mp4',
    previewUrl: makeDrivePreviewUrl('12jt5dyp38otUmAP2Voynj6DRXBaRAmip'),
  },
  {
    id: 'christmas-festive-ad',
    driveFileId: '16wijCM8qxOtGSkBejQe_Na9GEb1deV5G',
    title: 'Christmas Campaign & Festive Ad',
    client: 'Retail Campaign',
    category: 'Commercial',
    badgeLabel: 'Commercial',
    aspect: '16:9',
    duration: '00:20',
    role: 'Motion Graphics · Color & Mix',
    thumbnail: xmasProdReelsThumb,
    streamUrl: '/videos/christmas-festive-ad.mp4',
    previewUrl: makeDrivePreviewUrl('16wijCM8qxOtGSkBejQe_Na9GEb1deV5G'),
  },
  {
    id: 'adoor-masterclass-trailer',
    driveFileId: '1--qsowMuLIFVx39LgHPiTXkjS_B_bcPj',
    title: 'Masterclass Trailer — Adoor Gopalakrishnan',
    client: 'Wise Talkies',
    category: 'Documentary Trailer',
    badgeLabel: 'Trailer',
    aspect: '16:9',
    duration: '02:14',
    role: 'Trailer Cut · Color Grade · QC',
    thumbnail: adoorTrailerThumb,
    streamUrl: '/videos/adoor-masterclass.mp4',
    previewUrl: makeDrivePreviewUrl('1--qsowMuLIFVx39LgHPiTXkjS_B_bcPj'),
  },
  {
    id: 'gopinath-masterclass-trailer',
    driveFileId: '1VYmzIKjvEo4oCpS4XC_W3wVdGpv0LG3v',
    title: 'Masterclass Trailer — Gopinath Muthukad',
    client: 'Wise Talkies',
    category: 'Documentary Trailer',
    badgeLabel: 'Trailer',
    aspect: '16:9',
    duration: '01:52',
    role: 'Senior Editor · Dialogue Sweetening',
    thumbnail: gopinathTrailerThumb,
    streamUrl: '/videos/gopinath-masterclass.mp4',
    previewUrl: makeDrivePreviewUrl('1VYmzIKjvEo4oCpS4XC_W3wVdGpv0LG3v'),
  },
  {
    id: 'stalling-vehicle-reel',
    driveFileId: '1IyTbHi9ojraw5m2LkNDj7M0o7OYWGa8j',
    title: 'Stalling Vehicle — Explainer Reel',
    client: 'Digital Campaign',
    category: 'Short-Form Reel',
    badgeLabel: '9:16 Reel',
    aspect: '9:16',
    duration: '00:54',
    role: 'Retention Edit · Audio & Pacing',
    thumbnail: stallingVehicleThumb,
    streamUrl: '/videos/stalling-vehicle-reel.mp4',
    previewUrl: makeDrivePreviewUrl('1IyTbHi9ojraw5m2LkNDj7M0o7OYWGa8j'),
  },
];
