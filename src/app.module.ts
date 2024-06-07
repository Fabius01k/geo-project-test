import { Module } from '@nestjs/common';
import { GeoIPController } from "./geoIp.controller";
import { GeoIPService } from "./geoIp.service";

@Module({
  imports: [],
  controllers: [GeoIPController],
  providers: [GeoIPService],

})
export class AppModule {}
