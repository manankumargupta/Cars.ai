import axios from 'axios';
import { Car, Category, Post, Comment } from '../types/models';
import { mockCars, mockCategories, mockPosts, mockComments } from './mockData';

// In a real app, this would be an environment variable
const API_URL = 'https://api.cars.ai/v1';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API Service for Cars
export const CarService = {
  // Get all cars
  getAllCars: async (): Promise<Car[]> => {
    try {
      // In a real app, this would call the API
      // const response = await api.get('/cars');
      // return response.data;
      
      // For the demo, return mock data
      return Promise.resolve(mockCars);
    } catch (error) {
      console.error('Error fetching cars:', error);
      return mockCars; // Fallback to mock data
    }
  },
  
  // Get car by ID
  getCarById: async (id: string): Promise<Car | undefined> => {
    try {
      // const response = await api.get(`/cars/${id}`);
      // return response.data;
      
      // For the demo, return mock data
      const car = mockCars.find(car => car.id === id);
      return Promise.resolve(car);
    } catch (error) {
      console.error(`Error fetching car with ID ${id}:`, error);
      return mockCars.find(car => car.id === id); // Fallback to mock data
    }
  },
  
  // Get cars by category
  getCarsByCategory: async (category: string): Promise<Car[]> => {
    try {
      // const response = await api.get(`/cars?category=${category}`);
      // return response.data;
      
      // For the demo, return mock data
      const cars = mockCars.filter(car => car.category === category);
      return Promise.resolve(cars);
    } catch (error) {
      console.error(`Error fetching cars in category ${category}:`, error);
      return mockCars.filter(car => car.category === category); // Fallback to mock data
    }
  },
  
  // Get random car
  getRandomCar: async (): Promise<Car> => {
    try {
      // const response = await api.get('/cars/random');
      // return response.data;
      
      // For the demo, return a random car from mock data
      const randomIndex = Math.floor(Math.random() * mockCars.length);
      return Promise.resolve(mockCars[randomIndex]);
    } catch (error) {
      console.error('Error fetching random car:', error);
      const randomIndex = Math.floor(Math.random() * mockCars.length);
      return mockCars[randomIndex]; // Fallback to mock data
    }
  }
};

// API Service for Categories
export const CategoryService = {
  // Get all categories
  getAllCategories: async (): Promise<Category[]> => {
    try {
      // const response = await api.get('/categories');
      // return response.data;
      
      // For the demo, return mock data
      return Promise.resolve(mockCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      return mockCategories; // Fallback to mock data
    }
  },
  
  // Get category by ID
  getCategoryById: async (id: string): Promise<Category | undefined> => {
    try {
      // const response = await api.get(`/categories/${id}`);
      // return response.data;
      
      // For the demo, return mock data
      const category = mockCategories.find(category => category.id === id);
      return Promise.resolve(category);
    } catch (error) {
      console.error(`Error fetching category with ID ${id}:`, error);
      return mockCategories.find(category => category.id === id); // Fallback to mock data
    }
  }
};

// API Service for Community
export const CommunityService = {
  // Get all posts
  getAllPosts: async (): Promise<Post[]> => {
    try {
      // const response = await api.get('/posts');
      // return response.data;
      
      // For the demo, return mock data
      return Promise.resolve(mockPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      return mockPosts; // Fallback to mock data
    }
  },
  
  // Get post by ID
  getPostById: async (id: string): Promise<Post | undefined> => {
    try {
      // const response = await api.get(`/posts/${id}`);
      // return response.data;
      
      // For the demo, return mock data
      const post = mockPosts.find(post => post.id === id);
      return Promise.resolve(post);
    } catch (error) {
      console.error(`Error fetching post with ID ${id}:`, error);
      return mockPosts.find(post => post.id === id); // Fallback to mock data
    }
  },
  
  // Get comments for a car
  getCommentsForCar: async (carId: string): Promise<Comment[]> => {
    try {
      // const response = await api.get(`/cars/${carId}/comments`);
      // return response.data;
      
      // For the demo, return mock data
      const comments = mockComments.filter(comment => comment.carId === carId);
      return Promise.resolve(comments);
    } catch (error) {
      console.error(`Error fetching comments for car ${carId}:`, error);
      return mockComments.filter(comment => comment.carId === carId); // Fallback to mock data
    }
  }
};