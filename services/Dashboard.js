import ENV from '../env/env';
import { HttpClient } from './HttpClient';


export class DashboardController {
  constructor() {
    this.client = new HttpClient(ENV.API_DASHBOARD);
  }

  async fetchDashboardData(userId) {
    try {
      // Make a request to fetch dashboard data by user ID
      const response = await this.client.get(`/dashboard/${userId}`);
    
      return response.data; // Assuming API responds with the required dashboard data
    } catch (error) {
      console.error('Error fetching dashboard data:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Error fetching dashboard data.');
    }
  }
}
