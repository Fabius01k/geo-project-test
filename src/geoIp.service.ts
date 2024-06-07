import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import * as geoip from 'geoip-lite';
import * as ip from 'ip';
@Injectable()
export class GeoIPService {
  async getLocationByIP(clientIP: string): Promise<GeoLocationResponse> {
    if (!clientIP || !ip.isV4Format(clientIP)) {
      throw new BadRequestException('Invalid IP address format');
    }

    try {
      const geo = await geoip.lookup(clientIP);

      if (!geo) {
        throw new NotFoundException('No data found for this IP address');
      }

      return {
        lat: geo.ll[0],
        lng: geo.ll[1],
        country: geo.country,
        city: geo.city,
      };
    } catch (error) {
      throw new InternalServerErrorException('Internal server error');
    }
  }
}