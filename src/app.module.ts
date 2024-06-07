import { Module } from '@nestjs/common';
import { GeoIPController } from "./part 1/geoIp.controller";
import { GeoIPService } from "./part 1/geoIp.service";

@Module({
  imports: [],
  controllers: [GeoIPController],
  providers: [GeoIPService],

})
export class AppModule {}
