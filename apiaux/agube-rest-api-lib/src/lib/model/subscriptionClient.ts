/**
 * Subscription API
 * Subscription API REST definition
 *
 * OpenAPI spec version: v1
 * Contact: frannabril@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Client } from './client';


export interface SubscriptionClient {
    readonly id?: string;
    client: Client;
    subscription: number;
  readonly expiration_date?: Date;
    readonly enabled?: boolean;
    readonly cancelled?: boolean;
}
