import {
  Controller,
  Get,
  HttpCode,
  Query
} from "@nestjs/common";
import { IpAddressInputModel } from "./ip-validadtion";
import { GeoIPService } from "./geoIp.service";
@Controller('geo-api')
export class GeoIPController {
  constructor(private readonly geoIPService: GeoIPService) {}

  @Get('get-ip')
  @HttpCode(200)
  async getLocationByIP(@Query() IpAddress: IpAddressInputModel): Promise<GeoLocationResponse> {
    const clientIP = IpAddress.ip;

    return this.geoIPService.getLocationByIP(clientIP);
  }
}
