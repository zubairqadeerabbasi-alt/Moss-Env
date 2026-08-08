import { EnvironmentalService, ProjectCaseStudy, ImpactMetric, WhyChooseItem, Testimonial, FAQItem, EquipmentItem } from '../types';

import wasteCollectionImg from '../assets/images/waste_collection.png';
import wasteTransportationImg from '../assets/images/waste_transportation.png';
import industrialCleaningImg from '../assets/images/industrial_cleaning.png';
import buildingCleaningImg from '../assets/images/building_cleaning.png';
import specializedCleaningImg from '../assets/images/specialized_cleaning.png';
import wasteDisposalImg from '../assets/images/waste_disposal.png';
import wasteSegregationImg from '../assets/images/waste_segregation.png';
import hazardousWasteImg from '../assets/images/hazardous_waste.png';
import environmentalManagementImg from '../assets/images/environmental_management.png';

export const SERVICES: EnvironmentalService[] = [
  {
    id: 'waste-collection',
    title: 'Waste Collection',
    category: 'Waste & Recycling',
    description: 'Scheduled and on-demand collection of municipal, commercial and industrial waste streams.',
    fullDetails: 'We provide comprehensive waste collection services using our modern, specialized fleet. Our solutions cover municipal solid waste, commercial waste, and industrial streams, scheduled to fit your operational timeline.',
    iconName: 'Recycle',
    image: wasteCollectionImg,
    benefits: [
      'Flexible scheduling (24/7 service available)',
      'Compliant with Tadweer regulations',
      'Dedicated bins and containers provided'
    ],
    badge: 'On-Demand',
    turnaroundTime: '24 hr dispatch'
  },
  {
    id: 'waste-transportation',
    title: 'Waste Transportation',
    category: 'Waste & Recycling',
    description: 'Licensed transport of waste from source to approved receiving and treatment facilities.',
    fullDetails: 'Licensed transport of waste utilizing heavy-duty trucks, hooks, and loaders. We ensure all waste is safely transported from source locations to authorized receiving, recycling, or treatment facilities with complete tracking manifests.',
    iconName: 'Recycle',
    image: wasteTransportationImg,
    benefits: [
      'Certified GPS-tracked vehicle fleet',
      'Safe transfer of hazardous & non-hazardous loads',
      'Electronic manifest logging (Tadweer / EAD)'
    ],
    badge: 'Licensed',
    turnaroundTime: 'Scheduled & Emergency'
  },
  {
    id: 'industrial-cleaning',
    title: 'Industrial Cleaning',
    category: 'Waste & Recycling',
    description: 'High-performance cleaning for plants, warehouses, workshops and industrial yards.',
    fullDetails: 'High-performance industrial cleaning services using state-of-the-art high-pressure washers, scrubbers, and specialized detergents. We clean manufacturing plants, warehouses, mechanical workshops, and industrial yards safely and thoroughly.',
    iconName: 'ShieldAlert',
    image: industrialCleaningImg,
    benefits: [
      'Removal of heavy oils, grease, and chemicals',
      'Minimum disruption to ongoing operations',
      'Highly trained operators and safety compliance'
    ],
    badge: 'Heavy Duty',
    turnaroundTime: 'Custom Schedule'
  },
  {
    id: 'building-cleaning',
    title: 'Building Cleaning',
    category: 'Compliance & Advisory',
    description: 'Complete cleaning programmes for commercial, residential and government buildings.',
    fullDetails: 'Professional, custom building cleaning and maintenance programmes. We offer comprehensive interior and exterior cleaning for commercial towers, residential complexes, and government facilities, adhering to the highest quality standards.',
    iconName: 'FileText',
    image: buildingCleaningImg,
    benefits: [
      'Tailored daily, weekly, or monthly schedules',
      'Eco-friendly, certified cleaning materials',
      'Facade, window, and deep interior cleaning'
    ],
    badge: 'Premium Care',
    turnaroundTime: 'Recurring Contract'
  },
  {
    id: 'specialized-cleaning',
    title: 'Specialized Cleaning',
    category: 'Compliance & Advisory',
    description: 'Bespoke cleaning solutions for events, sensitive assets and complex sites.',
    fullDetails: 'Custom cleaning solutions designed for events, sensitive corporate assets, high-security zones, and complex setups. We deploy specialized teams to clean, restore, and maintain spaces before, during, and after activities.',
    iconName: 'Sparkles',
    image: specializedCleaningImg,
    benefits: [
      'Pre-event prep and rapid post-event cleanup',
      'Care for delicate structures & sensitive electronics',
      'Highly secure, background-verified personnel'
    ],
    badge: 'Specialist',
    turnaroundTime: 'On-Demand / Project'
  },
  {
    id: 'waste-disposal',
    title: 'Waste Disposal',
    category: 'Waste & Recycling',
    description: 'Disposal of collected waste exclusively at licensed, approved facilities.',
    fullDetails: 'Eco-conscious waste disposal. We route collected waste streams to official, licensed, and approved disposal and recycling facilities, prioritizing material recovery, compost routing, and energy conversion over landfilling.',
    iconName: 'Recycle',
    image: wasteDisposalImg,
    benefits: [
      'Strict zero-landfill diversion alignment',
      '100% compliant with municipal laws',
      'Complete disposal certificates provided'
    ],
    badge: 'Eco-Friendly',
    turnaroundTime: 'Certified'
  },
  {
    id: 'waste-segregation',
    title: 'Waste Segregation',
    category: 'Waste & Recycling',
    description: 'On-site segregation systems that increase recovery and reduce disposal cost.',
    fullDetails: 'Providing systems and training for source-level waste segregation. We set up smart color-coded sorting systems to separate paper, plastic, metals, organics, and general waste, optimizing circular recovery rates.',
    iconName: 'Recycle',
    image: wasteSegregationImg,
    benefits: [
      'Reduction in municipal disposal fees',
      'High circular material recovery rates',
      'Staff environmental awareness training'
    ],
    badge: 'Tadweer Aligned',
    turnaroundTime: 'Full Implementation'
  },
  {
    id: 'hazardous-waste',
    title: 'Hazardous Waste Handling',
    category: 'Waste & Recycling',
    description: 'Controlled handling of hazardous streams with strict safety procedures.',
    fullDetails: 'Specialized and highly controlled storage, containment, transport, and disposal of hazardous waste streams (chemical, biological, and electronic). We adhere strictly to local EAD and international safety standards.',
    iconName: 'ShieldAlert',
    image: hazardousWasteImg,
    benefits: [
      'Hazmat-certified teams & safety vehicles',
      'Specialized containment drum supply',
      'Full liability protection & compliance tracking'
    ],
    badge: 'Strict Safety',
    turnaroundTime: 'Immediate Response'
  },
  {
    id: 'environmental-management',
    title: 'Environmental Management',
    category: 'Compliance & Advisory',
    description: 'Integrated environmental management programmes for large clients and sites.',
    fullDetails: 'Integrated environmental management advisory and execution. We design complete environmental protection frameworks, ISO 14001 setups, and compliance logs for large-scale operations, industrial hubs, and master developments.',
    iconName: 'FileText',
    image: environmentalManagementImg,
    benefits: [
      'Comprehensive auditing and monitoring logs',
      'Dedicated compliance manager support',
      'Direct coordination with local regulators'
    ],
    badge: 'Corporate',
    turnaroundTime: 'Continuous Support'
  }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: '1',
    title: 'EAD & ISO Accredited Engineers',
    description: 'Our team includes licensed environmental engineers, hydrologists, EAD-certified auditors, and ISO 14001 lead assessors based in Abu Dhabi.',
    iconName: 'Award',
    highlight: 'EAD & ISO Certified'
  },
  {
    id: '2',
    title: 'Tadweer Zero-Waste Priority',
    description: 'We prioritize ecological regeneration, material reuse, and zero-landfill policies adhering to Tadweer waste diversion standards.',
    iconName: 'Leaf',
    highlight: 'Tadweer Aligned'
  },
  {
    id: '3',
    title: '24/7 Rapid Incident Response',
    description: 'Emergency response vehicles ready to deploy from Mussafah and Al Dhafra for chemical spills or environmental hazards in < 2 hours.',
    iconName: 'Clock',
    highlight: '< 2 Hour Dispatch'
  },
  {
    id: '4',
    title: 'Transparent Pricing in AED',
    description: 'Detailed upfront proposals in AED, clear scope definitions, and no hidden charges—ensuring complete budget transparency.',
    iconName: 'DollarSign',
    highlight: 'No Hidden Fees'
  },
  {
    id: '5',
    title: 'Proven Track Record in UAE',
    description: 'Over 18 years of delivering compliant, sustainable environmental solutions to over 1,450 municipal and corporate partners in the UAE.',
    iconName: 'CheckCircle',
    highlight: '99.4% Satisfaction'
  }
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'projects',
    label: 'Abu Dhabi & UAE Projects Completed',
    value: '15,200',
    unit: '+',
    description: 'Across urban, coastal, desert, and industrial zones in Abu Dhabi',
    iconName: 'CheckSquare',
    growth: '+14% YoY'
  },
  {
    id: 'trees',
    label: 'Mangrove & Native Trees Planted',
    value: '480,000',
    unit: '+',
    description: 'Restoring Abu Dhabi coastal mangroves & capturing metric tons of CO2',
    iconName: 'Trees',
    growth: '+85K this year'
  },
  {
    id: 'waste',
    label: 'Tons Waste Diverted from Landfill',
    value: '120,000',
    unit: 'Tons',
    description: 'Recycled, composted, or converted into clean energy under Tadweer',
    iconName: 'Recycle',
    growth: '88% Diversion Rate'
  },
  {
    id: 'clients',
    label: 'Government & Corporate Clients',
    value: '1,450',
    unit: '+',
    description: 'Abu Dhabi authorities, hospitality hubs, and industrial sites',
    iconName: 'Users',
    growth: '18+ Years Trust'
  }
];

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'coastal-mangrove',
    title: 'Abu Dhabi Coastal Mangrove & Marine Habitat Rehabilitation',
    client: 'Environment Agency – Abu Dhabi (EAD) & Coastal Conservation',
    category: 'Ecological Restoration',
    location: 'Eastern Mangrove National Park, Abu Dhabi, UAE',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    summary: 'Restored 450 hectares of coastal grey mangrove lagoons, protecting Abu Dhabi shorelines from erosion and returning 32 marine species.',
    fullStory: 'MOSS led a multi-year ecological rehabilitation across Abu Dhabi coastal waters. By re-establishing tidal flow channels, eradicating invasive weeds, and planting over 120,000 grey mangrove (Avicennia marina) saplings, shoreline erosion dropped by 74% while sequestering massive amounts of blue carbon.',
    metrics: [
      { label: 'Mangrove Area', value: '450 Hectares' },
      { label: 'Erosion Reduction', value: '74%' },
      { label: 'Mangroves Planted', value: '120,000 Saplings' }
    ],
    tags: ['Mangroves', 'Blue Carbon', 'EAD Approved']
  },
  {
    id: 'zero-waste-campus',
    title: 'Yas & Al Reem Commercial Hub Zero-Waste Transformation',
    client: 'Yas Island Retail & Hospitality Group / Tadweer Partner',
    category: 'Waste & Recycling',
    location: 'Yas Island & Al Reem Island, Abu Dhabi, UAE',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    summary: 'Transformed commercial and retail complexes across Yas Island into certified Zero Waste facilities, achieving a 92% diversion rate.',
    fullStory: 'Through smart sensor bin installation, staff training, and organic composting partnerships in Mussafah, MOSS diverted over 1,400 tons of solid waste annually from Abu Dhabi landfills, saving AED 1,400,000 in municipal waste processing fees.',
    metrics: [
      { label: 'Waste Diversion', value: '92%' },
      { label: 'Annual Savings', value: 'AED 1.4M' },
      { label: 'Landfill Diverted', value: '1,400 Tons/yr' }
    ],
    tags: ['Tadweer', 'Zero Waste', 'Yas Island']
  },
  {
    id: 'solar-remediation',
    title: 'Al Dhafra Soil De-Contamination & 25MW Solar Microgrid',
    client: 'Abu Dhabi Energy & Infrastructure Board / Al Dhafra Municipality',
    category: 'Renewable Energy',
    location: 'Al Dhafra Region, Abu Dhabi, UAE',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    summary: 'De-contaminated 120 hectares of desert soil and constructed a 25-megawatt solar microgrid powering remote eco-farms.',
    fullStory: 'MOSS successfully remediated soil hydrocarbon residue using bio-slurry thermal treatment engineered for desert climates. Following EAD safety clearance, we built a ground-mounted solar microgrid that offsets 28,000 metric tons of carbon emissions annually under UAE Net Zero 2050 targets.',
    metrics: [
      { label: 'Clean Solar Output', value: '25 MW' },
      { label: 'Remote Farms Powered', value: '5,500 Units' },
      { label: 'Carbon Offset', value: '28,000 Tons' }
    ],
    tags: ['Al Dhafra', 'Solar Microgrid', 'UAE Net Zero']
  },
  {
    id: 'water-purification',
    title: 'Mussafah Industrial Hub & Marine Effluent Water Quality Audit',
    client: 'Abu Dhabi Industrial Ports & Water Board (KIZAD / Mussafah)',
    category: 'Auditing & Testing',
    location: 'Mussafah Industrial Zone, Abu Dhabi, UAE',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    summary: 'Deployed real-time IoT water monitoring sensors and automated biological filtration across 12 coastal discharge outlets in Mussafah.',
    fullStory: 'To safeguard Arabian Gulf marine ecosystems and coastal desalination intakes, MOSS installed continuous IoT sensors measuring turbidity, pH, heavy metals, and oil traces. Marine effluent purity reached 99.8%, meeting EAD environmental standards.',
    metrics: [
      { label: 'Water Purity Rating', value: '99.8%' },
      { label: 'IoT Sensor Nodes', value: '48 Nodes' },
      { label: 'EAD Compliance Rating', value: 'Grade A+' }
    ],
    tags: ['Mussafah', 'IoT Sensors', 'EAD Water Audit']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Rebecca Al-Hassani',
    role: 'Director of Environmental Compliance',
    organization: 'Abu Dhabi Eco Development Board',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    rating: 5,
    quote: 'MOSS Environment Services provided exceptional technical guidance during our coastal water purity audit in Abu Dhabi. Their team was professional, thorough, and delivered full EAD compliance well ahead of schedule.',
    verified: true,
    projectCategory: 'Water & EAD Audit'
  },
  {
    id: '2',
    name: 'Tariq Al-Mansoori',
    role: 'Chief Operations Officer',
    organization: 'Yas Hospitality & Retail Park',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&q=80',
    rating: 5,
    quote: 'Achieving Tadweer Zero Waste certification across our Yas Island commercial properties was seamless thanks to MOSS. They saved our company over AED 800,000 annually while elevating our sustainability standing in Abu Dhabi.',
    verified: true,
    projectCategory: 'Tadweer Waste Management'
  },
  {
    id: '3',
    name: 'Fatima Al-Zaabi',
    role: 'Regional Coastal Lead',
    organization: 'Gulf Marine & Mangrove Trust',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80',
    rating: 5,
    quote: 'The mangrove restoration work MOSS carried out at Eastern Mangrove National Park was groundbreaking. Their drone surveys and native sapling survival rates exceeded all expectation for coastal protection.',
    verified: true,
    projectCategory: 'Mangrove Restoration'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What types of environmental services does MOSS specialize in Abu Dhabi?',
    answer: 'MOSS offers comprehensive environmental services tailored for Abu Dhabi & the UAE, including Tadweer-certified waste management, mangrove & desert ecosystem restoration, EAD air & water quality testing, Estidama solar consulting, 24/7 HAZMAT remediation, and EAD Environmental Impact Assessments (EIA).'
  },
  {
    id: 'faq-2',
    category: 'Services',
    question: 'How quickly can MOSS dispatch emergency HAZMAT units in Abu Dhabi & Mussafah?',
    answer: 'Our emergency HAZMAT and chemical containment teams operate 24/7 with dispatch hubs in Mussafah, Al Ain, and Al Dhafra. Average arrival response time across Abu Dhabi industrial and coastal zones is under 2 hours.'
  },
  {
    id: 'faq-3',
    category: 'Compliance & Standards',
    question: 'Are MOSS environmental audits accredited by EAD and Tadweer?',
    answer: 'Yes. All our assessments, lab testing, and environmental reports adhere strictly to Environment Agency – Abu Dhabi (EAD), Tadweer waste manifest rules, Estidama Pearl Rating standards, and ISO 14001 guidelines.'
  },
  {
    id: 'faq-4',
    category: 'Pricing & Quotes',
    question: 'How does MOSS calculate project quotes in AED?',
    answer: 'We provide clear, transparent quotes in AED based on site acreage, waste tonnage, laboratory testing scope, or project timeline. We offer complimentary site visits and upfront fixed-fee proposals with zero hidden costs.'
  },
  {
    id: 'faq-5',
    category: 'Compliance & Standards',
    question: 'Can MOSS help our organization align with UAE Net Zero 2050 & UAE Vision 2031?',
    answer: 'Absolutely. We conduct carbon footprint baselining, zero-landfill waste auditing, solar energy microgrid engineering, and assist in securing verified blue carbon offsets for your enterprise.'
  }
];

export const SUSTAINABILITY_COMMITMENTS = [
  {
    title: 'UAE Net Zero 2050 Alignment',
    description: '100% of our field vehicles and Abu Dhabi offices operate on hybrid electric transportation and verified renewable power.',
    icon: 'Leaf'
  },
  {
    title: '1% for Abu Dhabi Mangrove Fund',
    description: 'We donate 1% of annual revenue directly to local coastal grey mangrove planting and Abu Dhabi marine habitat conservation.',
    icon: 'Heart'
  },
  {
    title: 'Tadweer Zero-Landfill Guarantee',
    description: 'We guarantee that at least 85% of audited waste streams are diverted to compost, recycling, or clean energy recovery.',
    icon: 'ShieldCheck'
  }
];

export const EQUIPMENT_ITEMS: EquipmentItem[] = [
  {
    id: 'mobile-air-lab',
    name: 'Mobile Air Quality Laboratory (MAQL-3)',
    category: 'Air Analysis',
    description: 'Truck-mounted certified laboratory equipped with real-time analyzers for VOCs, PM2.5/PM10, ozone, and NOx emissions.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    specs: ['EPA-Certified Gas Analyzers', 'Meteorological Station Integration', 'LTE Real-time Data Telemetry', 'Self-powered Solar / Battery Bank'],
    status: 'Ready for Dispatch'
  },
  {
    id: 'eco-survey-drone',
    name: 'Ecosystem Restoration Drone (ERD-V5)',
    category: 'Ecology & Drone Survey',
    description: 'Advanced octocopter optimized for coastal mangrove seed dispersion, high-resolution LiDAR topography mapping, and vegetation health tracking.',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80',
    specs: ['LiDAR & Multispectral Sensors', 'Precision Payload Release Hopper', 'RTK Centimeter-level Positioning', '45 Min Flight Time with Full Load'],
    status: 'Available'
  },
  {
    id: 'bio-remediation-tank',
    name: 'Modular Bio-Remediation Unit (MBRU-100)',
    category: 'Soil & Water Cleanup',
    description: 'Portable bio-remediation tank designed for rapid processing of oil/hydrocarbon contaminated soils and marine industrial effluents.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80',
    specs: ['High-throughput Aeration System', 'Automated Bio-slurry Heat Exchangers', 'Microbial Inoculation Ports', 'EAD-compliant Outlet Filters'],
    status: 'In Use'
  },
  {
    id: 'iot-water-buoy',
    name: 'Multi-Sensor Oceanographic Monitoring Buoy',
    category: 'Marine Auditing',
    description: 'Solar-powered marine monitoring system deployed in coastal lagoons and industrial ports to track water parameters.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
    specs: ['Continuous pH & Turbidity Sensors', 'Heavy Metal Ion Indicators', 'Satellite / cellular communications link', 'Antifouling copper mesh housing'],
    status: 'In Use'
  },
  {
    id: 'hazmat-spill-trailer',
    name: 'Rapid Spill Containment & Recovery Trailer',
    category: 'HAZMAT',
    description: 'Deployable trailer containing emergency booms, industrial skimmers, neutralizing agents, and chemical vacuum pumps.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
    specs: ['300m Inflatable Oil Booms', 'Pneumatic Acid/Alkali Safe Pumps', 'Personal Hazmat Protection Kits', 'Absorbent socks & dry-treatment agents'],
    status: 'Ready for Dispatch'
  },
  {
    id: 'smart-waste-sorter',
    name: 'Automated Solid Waste Sorter (ASWS-Lite)',
    category: 'Waste Management',
    description: 'AI-assisted optical sorter to automate segregation of cardboard, plastics, and metals from commercial waste streams.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
    specs: ['Near-Infrared (NIR) Optical Sensor', 'High-speed air-jet reject systems', 'Integrates with Tadweer smart bins', 'Up to 5 Tons/Hour segregation capacity'],
    status: 'Available'
  }
];


