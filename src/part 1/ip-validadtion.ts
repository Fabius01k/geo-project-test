import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class IpAddressInputModel {
  @IsString()
  @IsNotEmpty()
  @Matches(/^(\d{1,3}\.){3}\d{1,3}$/)
  ip: string;
}