import axios from 'axios';

export class GeoIPServiceSDK {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async getLocationByIP(clientIP: string): Promise<GeoLocationResponse> {
    try {
      const response = await axios.get(`$\{this\.baseURL\}/geo\-api/get\-ip?ip\=$\{clientIP\}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch location data');
    }
  }
}