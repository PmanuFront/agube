/**
 * Agube API
 * Agube API REST definition
 *
 * OpenAPI spec version: v1.0.0
 * Contact: frannabril@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Geolocation } from './geolocation';
import { WaterMeter } from './waterMeter';


export interface ReservoirCreate {
    readonly id?: number;
    geolocation: Geolocation;
    user_id?: number;
    water_meter?: WaterMeter;
    capacity: string;
    inlet_flow: string;
    outlet_flow: string;
}