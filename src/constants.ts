import { Service, Project, Testimonial, FAQ, QuoteService, Addon } from './types';

export const SERVICES: Service[] = [
  {
    id: 'architectural-design',
    title: 'Architectural Design',
    shortDescription: 'Functional, beautiful, and buildable architectural solutions.',
    fullDescription: 'We provide comprehensive architectural design services for residential, commercial, and development projects. Our approach combines aesthetic excellence with technical precision.',
    icon: 'Home',
    features: [
      'Concept Design',
      'Floor Plans & Elevations',
      '3D Massing',
      'Design Development',
      'Planning Support'
    ],
    deliverables: [
      'Presentation Drawings',
      'Technical Sections',
      'Site Analysis',
      'Material Specifications'
    ],
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    shortDescription: 'Curated spaces that reflect your personality and lifestyle.',
    fullDescription: 'From residential homes to commercial offices and hospitality spaces, we design interiors that are both functional and inspiring.',
    icon: 'Layout',
    features: [
      'Space Planning',
      'Material Selection',
      'Color Schemes',
      'Furniture Layout',
      'Lighting Design'
    ],
    deliverables: [
      'Mood Boards',
      '3D Interior Renders',
      'Furniture Schedules',
      'Lighting Plans'
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3d-visualization',
    title: '3D Visualization',
    shortDescription: 'Photorealistic renders and immersive walkthroughs.',
    fullDescription: 'We bring your projects to life before they are built. Our high-quality renders and animations are perfect for real estate marketing and design validation.',
    icon: 'Box',
    features: [
      'Photorealistic Renders',
      'Interior & Exterior Visuals',
      'Walkthrough Animations',
      'Concept Visualization',
      'Real Estate Marketing Visuals'
    ],
    deliverables: [
      'High-Res Still Renders',
      '4K Video Walkthroughs',
      '360 Panorama Views',
      'Virtual Reality Tours'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://player.vimeo.com/external/459389137.sd.mp4?s=91239327aa0d050491a4a6d592076ee432f529f7&profile_id=164&oauth2_token_id=57447761'
  },
  {
    id: 'landscape-design',
    title: 'Landscape Design',
    shortDescription: 'Sustainable and aesthetic outdoor living spaces.',
    fullDescription: 'We design outdoor environments that complement the architecture and enhance the natural beauty of the site. From residential gardens to commercial landscapes.',
    icon: 'Trees',
    features: [
      'Site Analysis',
      'Planting Plans',
      'Hardscape Design',
      'Irrigation Layout',
      'Outdoor Lighting'
    ],
    deliverables: [
      'Landscape Masterplan',
      'Planting Schedules',
      'Construction Details',
      '3D Landscape Renders'
    ],
    image: 'https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1200'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'modern-villa-nairobi',
    title: 'Modern Nairobi Villa',
    category: 'Architectural Design',
    type: 'Residential House',
    location: 'Nairobi, Kenya',
    size: '450 sqm',
    description: 'A contemporary residential project focusing on open spaces and natural light.',
    clientBrief: 'The client requested a minimalist yet warm family home that maximizes natural light and provides a seamless connection between indoor and outdoor living areas.',
    scopeOfWork: [
      'Site Analysis & Planning',
      'Concept Design & 3D Massing',
      'Detailed Architectural Drawings',
      'Construction Supervision'
    ],
    servicesIncluded: ['Architectural Design', 'Interior Design', '3D Visualization'],
    designHighlights: [
      'Double-height living room with floor-to-ceiling glass',
      'Floating staircase with integrated lighting',
      'Sustainable rainwater harvesting system'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200'
    ],
    tools: ['Revit', 'Lumion', 'Photoshop'],
    year: '2023',
    timeline: '14 Months'
  },
  {
    id: 'urban-loft-interior',
    title: 'Urban Loft Interior',
    category: 'Interior Design',
    type: 'Apartment',
    location: 'Mombasa, Kenya',
    size: '180 sqm',
    description: 'Industrial-chic interior design for a luxury apartment.',
    clientBrief: 'Transform a raw warehouse space into a sophisticated urban loft that retains industrial character while providing high-end comfort.',
    scopeOfWork: [
      'Space Planning',
      'Custom Furniture Design',
      'Lighting Design',
      'Material Sourcing'
    ],
    servicesIncluded: ['Interior Design', 'Lighting Design'],
    designHighlights: [
      'Exposed brick walls paired with polished concrete floors',
      'Custom-built steel and oak shelving units',
      'Smart home automation integration'
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6f3ea?auto=format&fit=crop&q=80&w=1200'
    ],
    tools: ['3ds Max', 'Corona Renderer', 'AutoCAD'],
    year: '2024',
    timeline: '6 Months'
  },
  {
    id: 'commercial-hub-render',
    title: 'Commercial Hub',
    category: 'Visualization',
    type: 'Commercial',
    location: 'Kisumu, Kenya',
    size: '2500 sqm',
    description: 'High-end 3D visualization for a new commercial development.',
    clientBrief: 'Create photorealistic marketing assets to help pre-lease office and retail spaces in a new landmark commercial building.',
    scopeOfWork: [
      'Exterior Photorealistic Rendering',
      'Interior Office Walkthrough',
      'Aerial Drone Integration',
      'Virtual Reality Tour'
    ],
    servicesIncluded: ['3D Visualization', 'Walkthrough Animation'],
    designHighlights: [
      'Dynamic lighting simulations for day/night views',
      'Accurate material representation of glass and steel facade',
      'Immersive 360-degree virtual tours'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200'
    ],
    tools: ['Unreal Engine', 'V-Ray', 'SketchUp'],
    year: '2023',
    timeline: '4 Weeks'
  },
  {
    id: 'zen-garden-landscape',
    title: 'Zen Garden Retreat',
    category: 'Landscape Design',
    type: 'Residential Landscape',
    location: 'Nairobi, Kenya',
    size: '300 sqm',
    description: 'A peaceful outdoor sanctuary designed for relaxation and meditation.',
    clientBrief: 'The client wanted a low-maintenance garden that provides a sense of tranquility and privacy in a busy urban neighborhood.',
    scopeOfWork: [
      'Site Survey & Analysis',
      'Planting Plan',
      'Hardscape Design',
      'Water Feature Engineering'
    ],
    servicesIncluded: ['Landscape Design', '3D Visualization'],
    designHighlights: [
      'Custom stone waterfall feature',
      'Native drought-resistant planting palette',
      'Ambient LED garden lighting'
    ],
    image: 'https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1200'
    ],
    tools: ['SketchUp', 'Lumion', 'AutoCAD'],
    year: '2024',
    timeline: '3 Months'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'ArchiVision transformed our vision into a reality. The 3D renders were so realistic, it felt like we were already living in our new home.',
  },
  {
    id: '2',
    name: 'David Kamau',
    role: 'Real Estate Developer',
    content: 'Professionalism and speed. Their architectural designs are not only beautiful but also highly functional and buildable.',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Business Owner',
    content: 'The interior design for our new cafe has significantly improved our customer experience. They truly understand branding through space.',
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'What services do you offer?',
    answer: 'We offer Architectural Design, Interior Design, 3D Visualization, and Landscape Design services for residential, commercial, and development projects.'
  },
  {
    question: 'Do you work remotely?',
    answer: 'Yes, we can handle design and visualization projects remotely for clients anywhere in the world.'
  },
  {
    question: 'How long does a project take?',
    answer: 'Timelines vary by scope. A simple visualization might take 1 week, while a full architectural design can take several months.'
  },
  {
    question: 'What do you need before starting?',
    answer: 'Typically we need a site plan, project brief, and any existing sketches or inspiration images you have.'
  }
];

export const QUOTE_SERVICES: QuoteService[] = [
  {
    id: 'architectural',
    name: 'Architectural Design',
    icon: 'Home',
    subBranches: [
      { id: 'residential-house', name: 'Residential House', ratePerSqm: 45 },
      { id: 'flats-apartments', name: 'Flats / Apartments', ratePerSqm: 35 },
      { id: 'commercial', name: 'Commercial', ratePerSqm: 55 }
    ]
  },
  {
    id: 'interior',
    name: 'Interior Design',
    icon: 'Layout',
    subBranches: [
      { id: 'residential', name: 'Residential', ratePerSqm: 30 },
      { id: 'commercial', name: 'Commercial', ratePerSqm: 40 }
    ]
  },
  {
    id: 'visualization',
    name: 'Visualization',
    icon: 'Box',
    subBranches: [
      { id: 'exterior-rendering', name: 'Exterior Rendering', flatRate: 500 },
      { id: 'interior-rendering', name: 'Interior Rendering', flatRate: 400 },
      { id: 'walkthrough', name: 'Walkthrough', flatRate: 1200 }
    ]
  },
  {
    id: 'landscape',
    name: 'Landscape Design',
    icon: 'Trees',
    subBranches: [
      { id: 'residential-landscape', name: 'Residential Landscape', ratePerSqm: 15 },
      { id: 'commercial-landscape', name: 'Commercial Landscape', ratePerSqm: 25 }
    ]
  }
];

export const ADDONS: Addon[] = [
  { id: 'interior-addon', name: 'Interior Design', ratePerSqm: 25 },
  { id: 'landscape-addon', name: 'Landscape Design', ratePerSqm: 12 },
  { id: 'visualization-addon', name: 'Visualization', flatRate: 800 }
];
