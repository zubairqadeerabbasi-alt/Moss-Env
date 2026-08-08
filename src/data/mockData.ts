import { EnvironmentalService, ProjectCaseStudy, ImpactMetric, WhyChooseItem, Testimonial, FAQItem, EquipmentItem } from '../types';

export const SERVICES: EnvironmentalService[] = [
  {
    id: 'waste-recycling',
    title: 'Waste Management & Circular Economy',
    category: 'Waste & Recycling',
    description: 'Commercial & industrial waste auditing, zero-landfill recycling programs, and certified organic composting.',
    fullDetails: 'Our waste management solutions analyze your waste streams to achieve maximum material recovery. We implement zero-waste to landfill strategies, automated recycling sorting, and hazardous byproduct disposal adhering strictly to environmental agency guidelines.',
    iconName: 'Recycle',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Up to 88% waste diversion rate from landfills',
      'Full regulatory compliance & manifest tracking',
      'On-site waste sorting & automated smart bin collection',
      'Custom sustainability reporting for Net-Zero & ESG goals'
    ],
    badge: 'Zero Landfill',
    turnaroundTime: '24-48 hr deployment'
  },
  {
    id: 'ecological-restoration',
    title: 'Mangrove & Ecosystem Restoration',
    category: 'Ecological Restoration',
    description: 'Restoring coastal mangroves, flora bio-remediation, wetland rehabilitation, and large-scale biodiverse tree planting.',
    fullDetails: 'MOSS specializes in repairing fragile coastal and wetland landscapes through native grey mangrove reintroduction, sand dune stabilization, and tidal marsh hydrological restoration. We partner with conservationists and topographers to build self-sustaining ecosystems.',
    iconName: 'Trees',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Native mangrove & flora species re-establishment',
      'Coastal erosion prevention & micro-climate restoration',
      'Long-term biodiversity monitoring via drone survey',
      'Verified carbon offset certification & credits'
    ],
    badge: 'Eco Restoration',
    turnaroundTime: 'Custom Project Plan'
  },
  {
    id: 'air-water-auditing',
    title: 'Air & Water Quality Auditing',
    category: 'Auditing & Testing',
    description: 'Laboratory analysis, real-time IoT sensor deployment, particulate monitoring, and water purity assessment.',
    fullDetails: 'Utilizing certified field equipment and accredited laboratories, we deliver precise chemical, particulate, and biological assessments of air emissions and effluent discharge for industrial, marine, and municipal clients.',
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Certified lab analysis (VOCs, heavy metals, salinity, turbidity)',
      'Continuous 24/7 IoT sensor monitoring network',
      'Immediate alert triggers for environmental threshold breaches',
      'Official marine & air quality compliance reporting'
    ],
    badge: 'Lab Certified',
    turnaroundTime: 'Same-day emergency response'
  },
  {
    id: 'renewable-consulting',
    title: 'Solar Energy & Energy Efficiency Consulting',
    category: 'Renewable Energy',
    description: 'Solar microgrid feasibility studies, energy storage integration, building rating auditing, and Net-Zero roadmaps.',
    fullDetails: 'We guide municipalities, commercial towers, and educational campuses toward energy independence. From rooftop solar feasibility to battery storage grid integration, our engineering team optimizes your green transition.',
    iconName: 'Sun',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      '30-50% reduction in commercial electricity & cooling costs',
      'Green Building Rating System optimization',
      'Net-Zero carbon strategy & ROI forecasting',
      'Microgrid & battery backup system engineering'
    ],
    badge: 'Green Energy',
    turnaroundTime: '1-2 weeks study'
  },
  {
    id: 'hazardous-remediation',
    title: 'Hazardous Materials & Chemical Remediation',
    category: 'Compliance & Advisory',
    description: 'Safe removal of industrial contaminants, soil de-pollution, and emergency spill containment.',
    fullDetails: 'MOSS deploys certified emergency response units to neutralize soil toxins, chemical leaks, and hydrocarbon spills while minimizing environmental fallout and restoring soil biome health.',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      '24/7 Rapid hazmat emergency response',
      'Bio-remediation & soil hydrocarbon de-contamination',
      'HAZWOPER certified field technicians',
      'Complete disposal manifest documentation'
    ],
    badge: '24/7 HAZMAT',
    turnaroundTime: '< 2 Hours Dispatch'
  },
  {
    id: 'environmental-compliance',
    title: 'Environmental Impact & Compliance (EIA)',
    category: 'Compliance & Advisory',
    description: 'Environmental Impact Assessments (EIA), ESG disclosure reporting, permit acquisition, and ISO 14001 certification.',
    fullDetails: 'Navigate environmental regulatory frameworks effortlessly. MOSS conducts Environmental Impact Assessments (EIA), Phase I & II environmental site assessments (ESA), and helps organizations secure environmental permits and ISO 14001 certification.',
    iconName: 'FileText',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Phase I & II Environmental Site Assessments (ESA)',
      'Official environmental permit filing & documentation',
      'ISO 14001 Environmental Management Systems setup',
      'ESG data verification for investors & government audits'
    ],
    badge: 'ISO 14001',
    turnaroundTime: 'Fast-track available'
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


