export interface Car {
  id: string;
  name: string;
  brand: string;
  category: 'common' | 'luxury' | 'hyper';
  year: number;
  price: number;
  horsepower: number;
  acceleration: number; // 0-60 mph in seconds
  topSpeed: number; // mph
  description: string;
  features: string[];
  colors: string[];
  images: {
    main: string;
    gallery: string[];
  };
  modelUrl?: string; // URL to 3D model if available
}

export interface Category {
  id: 'common' | 'luxury' | 'hyper';
  name: string;
  description: string;
  image: string;
  carCount: number;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
}

export interface Comment {
  id: string;
  userId: string;
  user: User;
  carId: string;
  text: string;
  createdAt: string;
  likes: number;
}

export interface Post {
  id: string;
  userId: string;
  user: User;
  title: string;
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
  image?: string;
}