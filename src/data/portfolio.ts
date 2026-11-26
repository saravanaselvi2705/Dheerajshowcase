import type { ImageMetadata } from 'astro';

import adoorTrailerThumb from '../assets/thumbnails/adoor-trailer.webp';
import gopinathTrailerThumb from '../assets/thumbnails/gopinath-trailer.webp';
import reelsXmasP4Thumb from '../assets/thumbnails/reels-xmas-p4.webp';
import stallingVehicleThumb from '../assets/thumbnails/stalling-vehicle.webp';
import wtCastingCallThumb from '../assets/thumbnails/wt-casting-call.webp';
import wtTheaterAdThumb from '../assets/thumbnails/wt-theater-ad.webp';
import xmasProdReelsThumb from '../assets/thumbnails/xmas-prod-reels.webp';
import raghunathTrailerThumb from '../assets/thumbnails/raghunath-trailer.webp';
import shajiTrailerThumb from '../assets/thumbnails/shaji-trailer.webp';
import chefLethaThumb from '../assets/thumbnails/chef-letha-trailer.webp';
import xmasOfferThumb from '../assets/thumbnails/xmas-offer.webp';
import xmasProductsThumb from '../assets/thumbnails/xmas-products.webp';

export type PortfolioAspect = '16:9' | '9:16';

export interface PortfolioWork {
  id: string;
  driveId: string;
  title: string;
  client: string;
  category: string;
  runtime: string;
  role: string;
  aspect: PortfolioAspect;
  year: string;
  summary: string;
  thumbnail: ImageMetadata;
  streamUrl: string;
  previewUrl: string;
}

export function buildStreamUrl(driveId: string): string {
  return `https://drive.usercontent.google.com/download?id=${driveId}&export=download`;
}

export function buildPreviewUrl(driveId: string): string {
  return `https://drive.google.com/file/d/${driveId}/preview`;
}

export const PORTFOLIO_CONTACT = {
  brand: 'Dheeraj C',
  kicker: 'SENIOR VIDEO EDITOR & CONTENT DELIVERY MANAGER',
  phoneDisplay: '+91 95397 94989',
  phoneHref: 'tel:+919539794989',
  whatsappHref: 'https://wa.me/919539794989',
  email: 'dheerajcheeppilatt@gmail.com',
  emailHref: 'mailto:dheerajcheeppilatt@gmail.com',
  location: 'Kozhikode, Kerala, India',
  driveFolderHref:
    'https://drive.google.com/drive/folders/1lXGKB4gSheozYimxkuvLpFqqI8KhYoXS',
} as const;

export const SERVICE_PILLS = [
  { icon: '✂', label: 'Commercial Post-Production' },
  { icon: '⚡', label: 'High-Retention Reels' },
  { icon: '🎨', label: 'Color Grading & Sound Mix' },
  { icon: '📦', label: 'Content Delivery Pipeline' },
] as const;

/**
 * 7-card hero arc lineup (symmetric around center flagship cut index 3)
 * featuring all 6 requested portfolio works + 1 verified spotlight reel.
 */
export const HERO_ARC_WORKS: PortfolioWork[] = [
  {
    id: 'wt-cinema-spot',
    driveId: '1QP2pzxXOpzSbSUuQau2OtFx9ca6vloGr',
    title: 'Wise Talkies — Cinema Theater Spot',
    client: 'Wise Talkies',
    category: 'Commercial',
    runtime: '00:45',
    role: 'Lead Editor · Motion & Sound Mix',
    aspect: '16:9',
    year: '2024',
    summary:
      'High-impact theatrical spot blending kinetic typography, rhythmic pacing, and cinema-calibrated audio sweetening.',
    thumbnail: wtTheaterAdThumb,
    streamUrl: buildStreamUrl('1QP2pzxXOpzSbSUuQau2OtFx9ca6vloGr'),
    previewUrl: buildPreviewUrl('1QP2pzxXOpzSbSUuQau2OtFx9ca6vloGr'),
  },
  {
    id: 'wt-casting-call',
    driveId: '12jt5dyp38otUmAP2Voynj6DRXBaRAmip',
    title: 'Wise Talkies — Casting Call',
    client: 'Wise Talkies',
    category: 'Reel',
    runtime: '00:38',
    role: 'Short-Form Edit · Kinetic Captions',
    aspect: '9:16',
    year: '2024',
    summary:
      'Fast-hook social announcement engineered with 1.5s visual pattern interrupts and punchy rhythmic transitions.',
    thumbnail: wtCastingCallThumb,
    streamUrl: buildStreamUrl('12jt5dyp38otUmAP2Voynj6DRXBaRAmip'),
    previewUrl: buildPreviewUrl('12jt5dyp38otUmAP2Voynj6DRXBaRAmip'),
  },
  {
    id: 'christmas-campaign-reels',
    driveId: '16wijCM8qxOtGSkBejQe_Na9GEb1deV5G',
    title: 'Christmas Campaign & Product Reels',
    client: 'Retail Campaign',
    category: 'Commercial',
    runtime: '00:20',
    role: 'Motion Graphics · Color & Mix',
    aspect: '9:16',
    year: '2024',
    summary:
      'Warm festive commercial package featuring custom motion titles, end-slate packaging, and multi-platform exports.',
    thumbnail: xmasProdReelsThumb,
    streamUrl: buildStreamUrl('16wijCM8qxOtGSkBejQe_Na9GEb1deV5G'),
    previewUrl: buildPreviewUrl('16wijCM8qxOtGSkBejQe_Na9GEb1deV5G'),
  },
  {
    id: 'adoor-masterclass',
    driveId: '1--qsowMuLIFVx39LgHPiTXkjS_B_bcPj',
    title: 'Masterclass Trailer — Adoor Gopalakrishnan',
    client: 'Wise Talkies',
    category: 'Long-Form Trailer',
    runtime: '02:14',
    role: 'Trailer Cut · Color Grade · QC',
    aspect: '16:9',
    year: '2024',
    summary:
      'Reverent narrative pacing and archival visual framing for the legendary Indian filmmaker’s masterclass release.',
    thumbnail: adoorTrailerThumb,
    streamUrl: buildStreamUrl('1--qsowMuLIFVx39LgHPiTXkjS_B_bcPj'),
    previewUrl: buildPreviewUrl('1--qsowMuLIFVx39LgHPiTXkjS_B_bcPj'),
  },
  {
    id: 'gopinath-masterclass',
    driveId: '1VYmzIKjvEo4oCpS4XC_W3wVdGpv0LG3v',
    title: 'Masterclass Trailer — Gopinath Muthukad',
    client: 'Wise Talkies',
    category: 'Long-Form Trailer',
    runtime: '01:52',
    role: 'Senior Editor · Dialogue Sweetening',
    aspect: '16:9',
    year: '2024',
    summary:
      'Emotional story arc structured for high-retention trailer engagement with crisp dialogue mastering.',
    thumbnail: gopinathTrailerThumb,
    streamUrl: buildStreamUrl('1VYmzIKjvEo4oCpS4XC_W3wVdGpv0LG3v'),
    previewUrl: buildPreviewUrl('1VYmzIKjvEo4oCpS4XC_W3wVdGpv0LG3v'),
  },
  {
    id: 'stalling-vehicle-reel',
    driveId: '1IyTbHi9ojraw5m2LkNDj7M0o7OYWGa8j',
    title: 'Stalling Vehicle — Explainer Reel',
    client: 'Digital Campaign',
    category: 'Short-Form Reel',
    runtime: '00:54',
    role: 'Retention Edit · Audio & Pacing',
    aspect: '9:16',
    year: '2025',
    summary:
      'Structured problem-to-resolution vertical explainer with snappy J-cuts and clean callout overlays.',
    thumbnail: stallingVehicleThumb,
    streamUrl: buildStreamUrl('1IyTbHi9ojraw5m2LkNDj7M0o7OYWGa8j'),
    previewUrl: buildPreviewUrl('1IyTbHi9ojraw5m2LkNDj7M0o7OYWGa8j'),
  },
  {
    id: 'curated-gift-box',
    driveId: '1NLshsyE_eyOjvUyEQbxe_QmQqC7NBBIB',
    title: 'Curated Gift Box — Product Spotlight Reel',
    client: 'Brand Creative',
    category: 'Short-Form Reel',
    runtime: '00:36',
    role: 'Product Edit · Color & Sound',
    aspect: '9:16',
    year: '2025',
    summary:
      'Tactile product reel emphasizing texture, warm specular highlights, and seamless speed-ramped transitions.',
    thumbnail: reelsXmasP4Thumb,
    streamUrl: buildStreamUrl('1NLshsyE_eyOjvUyEQbxe_QmQqC7NBBIB'),
    previewUrl: buildPreviewUrl('1NLshsyE_eyOjvUyEQbxe_QmQqC7NBBIB'),
  },
];

export const EXTENDED_ARCHIVE_WORKS: PortfolioWork[] = [
  {
    id: 'raghunath-screenwriting',
    driveId: '1LPqeIj9kNeTWVXRst4KO_XHqhwdAME7P',
    title: 'Screenwriting Series — Raghunath Paleri',
    client: 'Wise Talkies',
    category: 'Long-Form Series',
    runtime: '02:08',
    role: 'Editor · Pacing & Color Balance',
    aspect: '16:9',
    year: '2023',
    summary:
      'Measured editorial rhythm honoring screenwriting craft, balanced with warm filmic LUT grading.',
    thumbnail: raghunathTrailerThumb,
    streamUrl: buildStreamUrl('1LPqeIj9kNeTWVXRst4KO_XHqhwdAME7P'),
    previewUrl: buildPreviewUrl('1LPqeIj9kNeTWVXRst4KO_XHqhwdAME7P'),
  },
  {
    id: 'shaji-cinematography',
    driveId: '1lQJ3YTwVDX05MlUdVveXDJxvjyWr7R6J',
    title: 'Cinematography Cut — Shaji N. Karun',
    client: 'Wise Talkies',
    category: 'Long-Form Series',
    runtime: '01:46',
    role: 'Rough-to-Fine Cut · Visual Pacing',
    aspect: '16:9',
    year: '2023',
    summary:
      'Visual-first assembly highlighting framing philosophy, tonal continuity, and subtle atmospheric sound design.',
    thumbnail: shajiTrailerThumb,
    streamUrl: buildStreamUrl('1lQJ3YTwVDX05MlUdVveXDJxvjyWr7R6J'),
    previewUrl: buildPreviewUrl('1lQJ3YTwVDX05MlUdVveXDJxvjyWr7R6J'),
  },
  {
    id: 'chef-letha-culinary',
    driveId: '1uhWGgnrEqhM98aBgsLAXge0R1Q4yuH7X',
    title: 'Culinary Craft — Chef Letha Series',
    client: 'Wise Talkies',
    category: 'Multi-Cam Cut',
    runtime: '01:34',
    role: 'Editor · Multi-Cam Sync & Grade',
    aspect: '16:9',
    year: '2023',
    summary:
      'Tactile multi-camera cut pairing close-up culinary inserts with crisp foley and vibrant food-safe color balance.',
    thumbnail: chefLethaThumb,
    streamUrl: buildStreamUrl('1uhWGgnrEqhM98aBgsLAXge0R1Q4yuH7X'),
    previewUrl: buildPreviewUrl('1uhWGgnrEqhM98aBgsLAXge0R1Q4yuH7X'),
  },
  {
    id: 'holiday-offer-promo',
    driveId: '1aoJGFWDxmp_iXdRuljFsJ8-dBy_0tqey',
    title: 'Holiday Offer — Motion Promo',
    client: 'Retail Campaign',
    category: 'Motion Ad',
    runtime: '00:28',
    role: 'After Effects · Ad Pacing',
    aspect: '9:16',
    year: '2024',
    summary:
      'Conversion-focused motion ad built with crisp offer hierarchy, punchy kinetic typography, and tight pacing.',
    thumbnail: xmasOfferThumb,
    streamUrl: buildStreamUrl('1aoJGFWDxmp_iXdRuljFsJ8-dBy_0tqey'),
    previewUrl: buildPreviewUrl('1aoJGFWDxmp_iXdRuljFsJ8-dBy_0tqey'),
  },
  {
    id: 'festive-collection-reel',
    driveId: '1C1SAMnb2GgcEwMiImmmfcDoyQLxobjsI',
    title: 'Festive Collection — Product Showcase Reel',
    client: 'Brand Creative',
    category: 'Short-Form Reel',
    runtime: '00:32',
    role: 'Edit · Mood Grade · SFX',
    aspect: '9:16',
    year: '2024',
    summary:
      'Stylized seasonal showcase driven by crisp rhythmic cuts, warm highlights, and product-first framing.',
    thumbnail: xmasProductsThumb,
    streamUrl: buildStreamUrl('1C1SAMnb2GgcEwMiImmmfcDoyQLxobjsI'),
    previewUrl: buildPreviewUrl('1C1SAMnb2GgcEwMiImmmfcDoyQLxobjsI'),
  },
];

export const EXPERIENCE_TIMELINE = [
  {
    role: 'Senior Video Editor',
    company: 'Rinoware Digital Media',
    location: 'Kerala, India',
    period: '2026 – Present',
    active: true,
    summary:
      'Edit promotional videos, social media reels, and digital media content from rough cut through final delivery, integrating color grading, audio sweetening, and motion graphics.',
    tags: ['Promos & Reels', 'Color Grading', 'Motion Graphics'],
  },
  {
    role: 'Content Delivery Manager',
    company: 'Wise Talkies',
    location: 'Kozhikode, India',
    period: '2024 – Present',
    active: true,
    summary:
      'Oversee end-to-end content delivery pipelines, quality control, and media distribution across digital channels while aligning editors, creators, and producers on publishing schedules.',
    tags: ['Pipeline Ops', 'QC & Metadata', 'Team Leadership'],
  },
  {
    role: 'Video Editor',
    company: 'Wise Talkies',
    location: 'Kozhikode, India',
    period: '2022 – 2024',
    active: false,
    summary:
      'Edited high-retention masterclass trailers, tutorial series, brand intros, and theatrical commercial spots with DaVinci Resolve grading and audio sweetening.',
    tags: ['Masterclasses', 'Visual Pacing', 'Audio Sweetening'],
  },
  {
    role: 'Senior Video Editor',
    company: 'Steyp',
    location: 'Kerala, India',
    period: '2021 – 2022',
    active: false,
    summary:
      'Coordinated creative teams to execute diverse multimedia projects and educational video episodes, managing color correction, sound dubbing, and promotional production.',
    tags: ['Team Coordination', 'Sound Dubbing', 'Color Correction'],
  },
  {
    role: 'Video Editor',
    company: 'Talrop',
    location: 'Kerala, India',
    period: '2020 – 2021',
    active: false,
    summary:
      'Produced promotional videos, social media reels, customer testimonials, and motion graphics advertisements from raw footage review through final mastering.',
    tags: ['Reels & Ads', 'Testimonials', 'Motion Graphics'],
  },
] as const;
