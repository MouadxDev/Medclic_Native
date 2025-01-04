import ENV from '../env/env';
import { HttpClient } from './HttpClient';

export class Absences {
  constructor() {
    this.client = new HttpClient(ENV.API_ABSENCES); // Adjust base URL
  }

  /**
   * Get absences by page number
   * @param {number} page - The page number to fetch
   * @param {Object} filters - Optional filters for the query (startDate, endDate, professionnel, lieu)
   * @returns {Promise<Object>} - The paginated list of absences
   */
  
  async getByPage(page = 1, filters = {}) {
    try {
      const queryParams = new URLSearchParams({
        page,
        ...filters,
      }).toString();

      const response = await this.client.get(`?${queryParams}`);
      return response;
    } catch (error) {
      console.error('Error fetching absences:', error);
      return null;
    }
  }

  /**
   * Add a new absence
   * @param {Object} absenceData - Data for the new absence
   * @returns {Promise<Object>} - The created absence data
   */
  async addAbsence(absenceData) {
    try {
      const response = await this.client.post('/', absenceData);
      return response.data; // Assuming API returns created absence object
    } catch (error) {
      console.error('Error adding absence:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to add absence.');
    }
  }

  /**
   * Remove an absence by ID
   * @param {string|number} id - The ID of the absence to delete
   * @returns {Promise<Object>} - Response status or message
   */
  async removeAbsence(id) {
    try {
      const response = await this.client.delete(`/${id}`);
      return response.data; // Assuming API confirms deletion
    } catch (error) {
      console.error('Error removing absence:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to remove absence.');
    }
  }
}
