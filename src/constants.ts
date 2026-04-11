import { Service, Project, Testimonial, FAQ } from './types';

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
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'modern-villa-nairobi',
    title: 'Modern Nairobi Villa',
    category: 'Architecture',
    location: 'Nairobi, Kenya',
    description: 'A contemporary residential project focusing on open spaces and natural light.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    tools: ['Revit', 'Lumion', 'Photoshop'],
    year: '2023'
  },
  {
    id: 'urban-loft-interior',
    title: 'Urban Loft Interior',
    category: 'Interior',
    location: 'Mombasa, Kenya',
    description: 'Industrial-chic interior design for a luxury apartment.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    tools: ['3ds Max', 'Corona Renderer', 'AutoCAD'],
    year: '2024'
  },
  {
    id: 'commercial-hub-render',
    title: 'Commercial Hub',
    category: 'Visualization',
    location: 'Kisumu, Kenya',
    description: 'High-end 3D visualization for a new commercial development.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    tools: ['Unreal Engine', 'V-Ray', 'SketchUp'],
    year: '2023'
  },
  {
    id: 'minimalist-office',
    title: 'Minimalist Tech Office',
    category: 'Interior',
    location: 'Nairobi, Kenya',
    description: 'A clean, productive workspace for a growing tech startup.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    tools: ['SketchUp', 'Enscape', 'Photoshop'],
    year: '2024'
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
    answer: 'We offer Architectural Design, Interior Design, and 3D Visualization services for residential, commercial, and development projects.'
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
