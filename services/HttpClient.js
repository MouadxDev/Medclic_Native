export class HttpClient {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    async get(endpoint = '') {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'Authorization': `Bearer YOUR_TOKEN_HERE` // <-- uncomment and inject token if needed
          }
        });
    
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        }
    
        const jsonData = await response.json();
        return jsonData;
      } catch (error) {
        console.error('GET Error:', error);
        throw error;
      }
    }
    
  
    async post(data = {}) {
      try {
        const response = await fetch(this.baseURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        if (!response.ok) {
          throw new Error(await response.text());
        }
    
        return await response.json();
      } catch (error) {
        console.error('POST Error:', error);
        throw error;
      }
    }
    
    
  
    async put(data = {}) {
      try {
        const response = await fetch(`${this.baseURL}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            // 'Authorization': `Bearer YOUR_TOKEN_HERE` // <-- uncomment and inject token if needed
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error(await response.text());
        return await response.json();
      } catch (error) {
        console.error('PUT Error:', error);
        throw error;
      }
    }
  
    async delete(endpoint = '') {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            // 'Authorization': `Bearer YOUR_TOKEN_HERE` // <-- uncomment and inject token if needed
          },
        });
        if (!response.ok) throw new Error(await response.text());
        return await response.json();
      } catch (error) {
        console.error('DELETE Error:', error);
        throw error;
      }
    }
  }
  