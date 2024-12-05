export class HttpClient {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    async get(endpoint = '') {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`);
        if (!response.ok) throw new Error(await response.text());
        return await response.json();
      } catch (error) {
        console.error('GET Error:', error);
        throw error;
      }
    }
  
    async post(endpoint = '', data = {}) {
      console.warn('POST functionality is disabled in test mode.');
      return { status: 'stub', message: 'POST not implemented yet.' };
    }
  
    async put(endpoint = '', data = {}) {
      console.warn('PUT functionality is disabled in test mode.');
      return { status: 'stub', message: 'PUT not implemented yet.' };
    }
  
    async delete(endpoint = '') {
      console.warn('DELETE functionality is disabled in test mode.');
      return { status: 'stub', message: 'DELETE not implemented yet.' };
    }
  }
  