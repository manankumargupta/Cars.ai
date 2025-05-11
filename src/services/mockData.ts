import { Car, Category, User, Comment, Post } from '../types/models';

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'user1',
    username: 'carEnthusiast',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    id: 'user2',
    username: 'speedRacer',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    id: 'user3',
    username: 'autoDreamer',
    avatar: 'https://images.pexels.com/photos/1266923/pexels-photo-1266923.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    id: 'user4',
    username: 'mechanicPro',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
];

// Mock Categories
export const mockCategories: Category[] = [
  {
    id: 'common',
    name: 'Common Cars',
    description: 'Everyday vehicles that offer reliability, comfort, and practicality for daily commuting and family transportation.',
    image: 'https://images.pexels.com/photos/6794811/pexels-photo-6794811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    carCount: 12,
  },
  {
    id: 'luxury',
    name: 'Luxury Cars',
    description: 'Premium automobiles that deliver exceptional comfort, advanced technology, and superior performance with exquisite craftsmanship.',
    image: 'https://images.pexels.com/photos/18369291/pexels-photo-18369291/free-photo-of-a-mercedes-benz-s-class.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    carCount: 8,
  },
  {
    id: 'hyper',
    name: 'Hyper Cars',
    description: 'Ultra-high-performance vehicles representing the pinnacle of automotive engineering with extreme speed and advanced aerodynamics.',
    image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    carCount: 6,
  },
];

// Mock Cars
export const mockCars: Car[] = [
  // Common Cars
  {
    id: 'car1',
    name: 'Civic Turbo',
    brand: 'Honda',
    category: 'common',
    year: 2024,
    price: 28000,
    horsepower: 180,
    acceleration: 7.2,
    topSpeed: 126,
    description: 'A reliable and economical sedan with modern technology and excellent fuel efficiency.',
    features: ['Apple CarPlay', 'Android Auto', 'Automatic Climate Control', 'Lane Keeping Assist', 'Adaptive Cruise Control'],
    colors: ['Crystal Black', 'Platinum White', 'Sonic Gray', 'Rallye Red'],
    images: {
      main: 'https://images.pexels.com/photos/6794821/pexels-photo-6794821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gallery: [
        'https://images.pexels.com/photos/29415490/pexels-photo-29415490/free-photo-of-red-honda-civic-type-r-in-urban-cyprus-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/16475131/pexels-photo-16475131/free-photo-of-top-view-of-a-sports-honda-civic-type-r.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
    },
  },
  {
    id: 'car2',
    name: 'Corolla Hybrid',
    brand: 'Toyota',
    category: 'common',
    year: 2024,
    price: 25000,
    horsepower: 121,
    acceleration: 8.1,
    topSpeed: 112,
    description: 'An efficient hybrid sedan with impressive fuel economy and Toyota reliability.',
    features: ['Toyota Safety Sense', 'Smart Key System', '8-inch Touchscreen', 'Wireless Charging', 'LED Headlights'],
    colors: ['Celestite Gray', 'Blueprint', 'Ruby Flare Pearl', 'Super White'],
    images: {
      main: 'https://images.pexels.com/photos/16850881/pexels-photo-16850881/free-photo-of-a-red-toyota-gr86-on-an-asphalt-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gallery: [
        'https://images.pexels.com/photos/19581626/pexels-photo-19581626/free-photo-of-raindrops-on-black-toyota-corolla.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/17507727/pexels-photo-17507727/free-photo-of-white-toyota-86-with-tsurikawa-ring-parked-near-abandoned-factory-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
    },
  },
  {
    id: 'car3',
    name: 'Avante',
    brand: 'Hyundai',
    category: 'common',
    year: 2024,
    price: 27500,
    horsepower: 201,
    acceleration: 6.9,
    topSpeed: 133,
    description: 'A sporty compact sedan with turbocharged performance and advanced technology features.',
    features: ['10.25-inch Touchscreen', 'Wireless Apple CarPlay', 'Digital Key', 'Sport Suspension', 'Paddle Shifters'],
    colors: ['Intense Blue', 'Phantom Black', 'Fiery Red', 'Fluid Metal'],
    images: {
      main: 'https://images.pexels.com/photos/12353734/pexels-photo-12353734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gallery: [
        'https://images.pexels.com/photos/17029183/pexels-photo-17029183/free-photo-of-hyndai-avante-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/14696345/pexels-photo-14696345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
    },
  },
  
  // Luxury Cars
  {
    id: 'car5',
    name: 'S-Class',
    brand: 'Mercedes-Benz',
    category: 'luxury',
    year: 2024,
    price: 115000,
    horsepower: 429,
    acceleration: 4.9,
    topSpeed: 155,
    description: 'The flagship luxury sedan that sets the standard for comfort, technology, and prestige.',
    features: ['MBUX Infotainment System', 'Burmester 3D Surround Sound', 'Augmented Reality Navigation', 'Executive Rear Seats', 'Air Suspension'],
    colors: ['Obsidian Black', 'Diamond White', 'Emerald Green', 'Rubellite Red'],
    images: {
      main: 'https://images.pexels.com/photos/18369291/pexels-photo-18369291/free-photo-of-a-mercedes-benz-s-class.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gallery: [
        'https://images.pexels.com/photos/18370955/pexels-photo-18370955/free-photo-of-black-mercedes-s-class.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/20123634/pexels-photo-20123634/free-photo-of-new-mercedes-benz-in-showroom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
    },
  },
  {
    id: 'car6',
    name: '7 Series',
    brand: 'BMW',
    category: 'luxury',
    year: 2024,
    price: 95000,
    horsepower: 375,
    acceleration: 5.3,
    topSpeed: 155,
    description: 'A luxury sedan that combines dynamic performance with cutting-edge technology and refined comfort.',
    features: ['31-inch Theatre Screen', 'Panoramic Sky Lounge LED Roof', 'Executive Lounge Seating', 'Bowers & Wilkins Diamond Surround Sound', 'Air Suspension'],
    colors: ['Carbon Black', 'Alpine White', 'Tanzanite Blue', 'Oxide Grey'],
    images: {
      main: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/951318/pexels-photo-951318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/10689099/pexels-photo-10689099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
    },
  },
  {
    id: 'car7',
    name: 'Model S Plaid',
    brand: 'Tesla',
    category: 'luxury',
    year: 2024,
    price: 120000,
    horsepower: 1020,
    acceleration: 1.99,
    topSpeed: 200,
    description: 'An all-electric luxury sedan with unprecedented acceleration and cutting-edge autonomous technology.',
    features: ['17-inch Touchscreen', 'Full Self-Driving Capability', 'Tri-Motor AWD', 'Glass Roof', 'Premium Interior'],
    colors: ['Pearl White', 'Solid Black', 'Midnight Silver', 'Deep Blue'],
    images: {
      main: 'https://images.pexels.com/photos/28576666/pexels-photo-28576666/free-photo-of-front-view-of-tesla-model-s-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gallery: [
        'https://images.pexels.com/photos/26957121/pexels-photo-26957121/free-photo-of-tesla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/28576665/pexels-photo-28576665/free-photo-of-sleek-tesla-model-s-electric-car-parked-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
    },
  },
  
  // Hyper Cars
  {
    id: 'car8',
    name: 'Chiron Super Sport',
    brand: 'Bugatti',
    category: 'hyper',
    year: 2024,
    price: 3900000,
    horsepower: 1600,
    acceleration: 2.4,
    topSpeed: 273,
    description: 'One of the fastest and most exclusive production cars in the world, representing the pinnacle of automotive engineering.',
    features: ['8.0L Quad-Turbo W16 Engine', 'Carbon Fiber Monocoque', 'Active Aerodynamics', 'Lightweight Magnesium Wheels', 'Telemetry System'],
    colors: ['Atlantic Blue', 'Black Carbon', 'French Racing Blue', 'Silver'],
    images: {
      main: 'https://images.pexels.com/photos/12964186/pexels-photo-12964186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gallery: [
        'https://images.pexels.com/photos/454604/pexels-photo-454604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/29881414/pexels-photo-29881414/free-photo-of-elegant-blue-bugatti-front-detail-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
    },
  },
  {
    id: 'car9',
    name: 'SF90 Stradale',
    brand: 'Ferrari',
    category: 'hyper',
    year: 2024,
    price: 625000,
    horsepower: 986,
    acceleration: 2.5,
    topSpeed: 211,
    description: 'A plug-in hybrid hypercar that combines Ferrari\'s racing heritage with cutting-edge electrification technology.',
    features: ['Hybrid Powertrain', 'All-Wheel Drive', 'eManettino Driving Modes', 'Retractable Hardtop', 'Carbon Fiber Body'],
    colors: ['Rosso Corsa', 'Giallo Modena', 'Nero Daytona', 'Argento Nürburgring'],
    images: {
      main: 'https://images.pexels.com/photos/12801144/pexels-photo-12801144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gallery: [
        'https://images.pexels.com/photos/14317474/pexels-photo-14317474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/12576612/pexels-photo-12576612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
    },
  },
  {
    id: 'car10',
    name: 'Sián',
    brand: 'Lamborghini',
    category: 'hyper',
    year: 2024,
    price: 3700000,
    horsepower: 819,
    acceleration: 2.8,
    topSpeed: 220,
    description: 'A limited-production hybrid hypercar featuring innovative supercapacitor technology and iconic Lamborghini design.',
    features: ['V12 Hybrid Powertrain', 'Supercapacitor Technology', 'Active Aerodynamics', 'Scissor Doors', '3D-Printed Components'],
    colors: ['Verde Gea', 'Oro Elios', 'Blu Uranus', 'Arancio Atlas'],
    images: {
      main: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
  },
];

// Mock Comments
export const mockComments: Comment[] = [
  {
    id: 'comment1',
    userId: 'user1',
    user: mockUsers[0],
    carId: 'car8',
    text: 'The Chiron is an absolute engineering marvel! I had the chance to see one at a car show and it\'s even more impressive in person.',
    createdAt: '2024-05-10T12:30:45Z',
    likes: 24,
  },
  {
    id: 'comment2',
    userId: 'user2',
    user: mockUsers[1],
    carId: 'car8',
    text: 'That top speed is insane. The fact that they have to limit it electronically for road use says everything about its capabilities.',
    createdAt: '2024-05-09T15:22:10Z',
    likes: 18,
  },
  {
    id: 'comment3',
    userId: 'user3',
    user: mockUsers[2],
    carId: 'car5',
    text: 'The S-Class interior is like a spaceship. The ambient lighting and those screens create such a futuristic atmosphere.',
    createdAt: '2024-05-11T09:15:32Z',
    likes: 12,
  },
  {
    id: 'comment4',
    userId: 'user4',
    user: mockUsers[3],
    carId: 'car1',
    text: 'Honda Civic remains one of the best values in the auto industry. Reliable, efficient, and now with much better tech than before.',
    createdAt: '2024-05-08T18:45:20Z',
    likes: 9,
  },
];

// Mock Posts
export const mockPosts: Post[] = [
  {
    id: 'post1',
    userId: 'user1',
    user: mockUsers[0],
    title: 'My experience with the new BMW 7 Series',
    content: 'I recently had the opportunity to test drive the new BMW 7 Series and I must say I was thoroughly impressed. The level of technology, comfort, and performance is simply outstanding. The Theatre Screen is a game-changer for rear passengers...',
    createdAt: '2024-05-01T10:15:30Z',
    likes: 45,
    comments: 12,
    image: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'post2',
    userId: 'user2',
    user: mockUsers[1],
    title: 'Hyper Cars: Are they worth the price?',
    content: 'With prices reaching millions of dollars, are hyper cars really worth the investment? Today I want to discuss the value proposition of these engineering marvels and whether they deliver an experience proportional to their astronomical costs...',
    createdAt: '2024-04-28T14:22:18Z',
    likes: 62,
    comments: 28,
    image: 'https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'post3',
    userId: 'user3',
    user: mockUsers[2],
    title: 'Electric vs. Gasoline: The future of automotive',
    content: 'The automotive industry is at a crossroads. Electric vehicles are gaining momentum, but traditional combustion engines continue to evolve. In this post, I\'ll explore the pros and cons of both technologies and where I see the industry heading...',
    createdAt: '2024-05-05T09:30:45Z',
    likes: 87,
    comments: 34,
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'post4',
    userId: 'user4',
    user: mockUsers[3],
    title: 'Maintenance tips for your everyday vehicle',
    content: 'Proper maintenance is key to keeping your car running smoothly for years to come. In this guide, I\'ll share some essential tips that every car owner should know, from basic checks you can do yourself to knowing when it\'s time to see a professional...',
    createdAt: '2024-05-07T16:15:22Z',
    likes: 53,
    comments: 19,
    image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];