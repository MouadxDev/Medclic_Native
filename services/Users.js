import ENV from '../env/env';
import { HttpClient } from './HttpClient';

export class Users {
  constructor() {
    this.client = new HttpClient(ENV.API_USER_AUTH);
  }

  async getAll() {
    try {
      return await this.client.get();
    } catch (error) {
      console.error('Error fetching users:', error);
      return null;
    }
  }
  async checkToken(token) {
    try {
      const response = await this.client.get();
      return response.data; 
      
    } catch (error) {
      console.error('Invalid token:', error);
      return null; 
    }
  }

  async login(email, password) {
    try {
      // Replace with the actual endpoint and body structure for your API
      const response = await this.client.post('/login', { email, password });
      return response.data; // Assuming the API returns user data on successful login
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Login failed.');
    }
  }

  async getById(id) {
    console.warn('getById is not implemented for test mode.');
    return { status: 'stub', message: 'getById not implemented yet.' };
  }

  async create(data) {
    console.warn('Create functionality is disabled in test mode.');
    return { status: 'stub', message: 'Create not implemented yet.' };
  }
}
