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
/* tslint:disable:no-unused-variable member-ordering */

import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from '../configuration';
import { AgubeRestConfigurationService } from '../configuration.service';
import { Geolocation } from '../model/geolocation';

@Injectable()
export class GeolocationService {
  protected basePath: string = '';
  public defaultHeaders: HttpHeaders = new HttpHeaders();
  public configuration: Configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    private svcConfig: AgubeRestConfigurationService,
    @Optional() configuration: Configuration,
  ) {
    if (configuration) {
      this.configuration = configuration;
      this.basePath = configuration.basePath || this.basePath;
    }
    this.basePath = this.svcConfig.getBasePath();
  }

  /**
   *
   * Get a geolocation by id
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getGeolocation(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<Geolocation>;
  public getGeolocation(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<Geolocation>>;
  public getGeolocation(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<Geolocation>>;
  public getGeolocation(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getGeolocation.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (Basic) required
    if (this.configuration.username || this.configuration.password) {
      headers = headers.set(
        'Authorization',
        'Basic ' +
          btoa(this.configuration.username + ':' + this.configuration.password)
      );
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<Geolocation>(
      `${this.basePath}/geolocation/${encodeURIComponent(String(id))}`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
        withCredentials: this.configuration.withCredentials,
      }
    );
  }

  /**
   *
   * Update a geolocation by id
   * @param id
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updateGeolocation(
    id: number,
    data: Geolocation,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<Geolocation>;
  public updateGeolocation(
    id: number,
    data: Geolocation,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<Geolocation>>;
  public updateGeolocation(
    id: number,
    data: Geolocation,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<Geolocation>>;
  public updateGeolocation(
    id: number,
    data: Geolocation,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling updateGeolocation.'
      );
    }

    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling updateGeolocation.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (Basic) required
    if (this.configuration.username || this.configuration.password) {
      headers = headers.set(
        'Authorization',
        'Basic ' +
          btoa(this.configuration.username + ':' + this.configuration.password)
      );
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<Geolocation>(
      `${this.basePath}/geolocation/${encodeURIComponent(String(id))}`,
      data,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
        withCredentials: this.configuration.withCredentials,
      }
    );
  }
}
