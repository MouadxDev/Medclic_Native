import ENV from '../env/env';
import { HttpClient } from './HttpClient';

export class Patients {
  constructor() {
    this.client = new HttpClient(ENV.API_PATIENTS); // Adjust base URL
  }

  /**
   * Get patients by page number
   * @param {number} page - The page number to fetch
   * @returns {Promise<Object>} - The paginated list of patients
   */

  async getByPage(page = 1) {
    try {
      const response = await this.client.get(`?page=${page}`);
      return response; 
    } catch (error) {
      console.error('Error fetching patients:', error);
      return null;
    }
  }

  /**
   * Add a new patient
   * @param {Object} patientData - Data for the new patient
   * @returns {Promise<Object>} - The created patient data
   */
  async addPatient(patientData) {
    try {
      const response = await this.client.post('/', patientData);
      return response.data; // Assuming API returns created patient object
    } catch (error) {
      console.error('Error adding patient:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to add patient.');
    }
  }

  /**
   * Remove a patient by ID
   * @param {string|number} id - The ID of the patient to delete
   * @returns {Promise<Object>} - Response status or message
   */
  async removePatient(id) {
    try {
      const response = await this.client.delete(`/${id}`);
      return response.data; // Assuming API confirms deletion
    } catch (error) {
      console.error('Error removing patient:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to remove patient.');
    }
  }
}
