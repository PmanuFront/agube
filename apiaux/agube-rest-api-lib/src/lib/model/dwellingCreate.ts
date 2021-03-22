/**
 * Agube API
 * Agube API REST definition
 *
 * OpenAPI spec version: v1
 * Contact: frannabril@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { FullAddress } from './fullAddress';
import { Payment } from './payment';
import { UserDetail } from './userDetail';
import { WaterMeter } from './waterMeter';


export interface DwellingCreate { 
    readonly id?: string;
    full_address: FullAddress;
    payment: Payment;
    owner: UserDetail;
    resident: UserDetail;
    water_meter: WaterMeter;
}
