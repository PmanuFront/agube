export * from './address.service';
import { AddressService } from './address.service';
export * from './dwelling.service';
import { DwellingService } from './dwelling.service';
export * from './manager.service';
import { ManagerService } from './manager.service';
export * from './phone.service';
import { PhoneService } from './phone.service';
export * from './reservoir.service';
import { ReservoirService } from './reservoir.service';
export * from './token.service';
import { TokenService } from './token.service';
export * from './user.service';
import { UserService } from './user.service';
export * from './waterMeter.service';
import { WaterMeterService } from './waterMeter.service';
export const APIS = [
  AddressService,
  DwellingService,
  ManagerService,
  PhoneService,
  ReservoirService,
  TokenService,
  UserService,
  WaterMeterService,
];
