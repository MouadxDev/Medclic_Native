import ENV from '../env/env';
import { HttpClient } from './HttpClient';

export class Users {
  constructor() {
    this.client = new HttpClient(ENV.API_URL + ENV.API_VERSION + ENV.USER_AUTH);
    this.tokenClient = new HttpClient(ENV.API_URL + ENV.API_VERSION + ENV.Validate_TOKEN);
    
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
      const response = await this.tokenClient.post(token);
      return response; 
      
    } catch (error) {
      console.error('Invalid token:', error);
      return null; 
    }
  }

  async login(login, password) {
    try {
      const requestBody = { login, password, db: ENV.Database };
      const response = await this.client.post(requestBody);
      return response;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed.');
    }
  }
  async logout() {
 
  }
  
  

  async getById(id) {
    try {
      return await this.client.get(`/${id}`);
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      return null;
    }
  }

  async create(data) {
    try {
      return await this.client.post(data);
    } catch (error) {
      console.error('Error creating user:', error);
      return null;
    }
  }
}
