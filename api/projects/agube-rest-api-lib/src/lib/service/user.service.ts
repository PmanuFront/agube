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
  HttpParams,
} from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from '../configuration';
import { AgubeRestConfigurationService } from '../configuration.service';
import { UserGeolocation } from '../model/userGeolocation';
import { UserDetail } from '../model/userDetail';
import { PersonConfig } from '../model/personConfig';
import { UserDwellingDetail } from '../model/userDwellingDetail';
import { UserPhone } from '../model/userPhone';
import { CustomHttpUrlEncodingCodec } from '../encoder';

@Injectable()
export class UserService {
  protected basePath = '';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    private svcConfig: AgubeRestConfigurationService,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration;
      this.basePath = configuration.basePath || this.basePath;
    }
    this.basePath = this.svcConfig.getBasePath();
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   *
   * Add new User Geolocation
   * @param id
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public addUserGeolocation(
    id: number,
    data: UserGeolocation,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<UserGeolocation>;
  public addUserGeolocation(
    id: number,
    data: UserGeolocation,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<UserGeolocation>>;
  public addUserGeolocation(
    id: number,
    data: UserGeolocation,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<UserGeolocation>>;
  public addUserGeolocation(
    id: number,
    data: UserGeolocation,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling addUserGeolocation.'
      );
    }

    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling addUserGeolocation.'
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

    return this.httpClient.post<UserGeolocation>(
      `${this.basePath}/user/${encodeURIComponent(String(id))}/geolocation`,
      data,
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
   * Add new Phone to User
   * @param id
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public addUserPhone(
    id: number,
    data: UserPhone,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<UserPhone>;
  public addUserPhone(
    id: number,
    data: UserPhone,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<UserPhone>>;
  public addUserPhone(
    id: number,
    data: UserPhone,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<UserPhone>>;
  public addUserPhone(
    id: number,
    data: UserPhone,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling addUserPhone.'
      );
    }

    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling addUserPhone.'
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

    return this.httpClient.post<UserPhone>(
      `${this.basePath}/user/${encodeURIComponent(String(id))}/phone`,
      data,
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
   * Delete User Geolocation
   * @param geolocationId
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteUserGeolocation(
    geolocationId: number,
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<any>;
  public deleteUserGeolocation(
    geolocationId: number,
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<any>>;
  public deleteUserGeolocation(
    geolocationId: number,
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<any>>;
  public deleteUserGeolocation(
    geolocationId: number,
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (geolocationId === null || geolocationId === undefined) {
      throw new Error(
        'Required parameter geolocationId was null or undefined when calling deleteUserGeolocation.'
      );
    }

    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteUserGeolocation.'
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

    return this.httpClient.delete<any>(
      `${this.basePath}/user/${encodeURIComponent(
        String(id)
      )}/geolocation/${encodeURIComponent(String(geolocationId))}`,
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
   * Delete Phone of User
   * @param id
   * @param phoneId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteUserPhone(
    id: number,
    phoneId: number,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<any>;
  public deleteUserPhone(
    id: number,
    phoneId: number,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<any>>;
  public deleteUserPhone(
    id: number,
    phoneId: number,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<any>>;
  public deleteUserPhone(
    id: number,
    phoneId: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteUserPhone.'
      );
    }

    if (phoneId === null || phoneId === undefined) {
      throw new Error(
        'Required parameter phoneId was null or undefined when calling deleteUserPhone.'
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

    return this.httpClient.delete<any>(
      `${this.basePath}/user/${encodeURIComponent(
        String(id)
      )}/phone/${encodeURIComponent(String(phoneId))}`,
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
   * Return user information details.
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getConfig(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<PersonConfig>;
  public getConfig(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<PersonConfig>>;
  public getConfig(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<PersonConfig>>;
  public getConfig(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getConfig.'
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

    return this.httpClient.get<PersonConfig>(
      `${this.basePath}/user/${encodeURIComponent(String(id))}/config`,
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
   * Return list of Dwelling assigned to this user
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getDwellingDetail(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<Array<UserDwellingDetail>>;
  public getDwellingDetail(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<Array<UserDwellingDetail>>>;
  public getDwellingDetail(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<Array<UserDwellingDetail>>>;
  public getDwellingDetail(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getDwellingDetail.'
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

    return this.httpClient.get<Array<UserDwellingDetail>>(
      `${this.basePath}/user/${encodeURIComponent(String(id))}/dwelling`,
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
   * Return user information details.
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getUserDetail(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<UserDetail>;
  public getUserDetail(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<UserDetail>>;
  public getUserDetail(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<UserDetail>>;
  public getUserDetail(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getUserDetail.'
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

    return this.httpClient.get<UserDetail>(
      `${this.basePath}/user/${encodeURIComponent(String(id))}`,
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
   * Return list of User Geolocation
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getUserGeolocation(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<Array<UserGeolocation>>;
  public getUserGeolocation(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<Array<UserGeolocation>>>;
  public getUserGeolocation(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<Array<UserGeolocation>>>;
  public getUserGeolocation(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getUserGeolocation.'
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

    return this.httpClient.get<Array<UserGeolocation>>(
      `${this.basePath}/user/${encodeURIComponent(String(id))}/geolocation`,
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
   * Return list of user Phones
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getUserPhone(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<Array<UserPhone>>;
  public getUserPhone(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<Array<UserPhone>>>;
  public getUserPhone(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<Array<UserPhone>>>;
  public getUserPhone(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getUserPhone.'
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

    return this.httpClient.get<Array<UserPhone>>(
      `${this.basePath}/user/${encodeURIComponent(String(id))}/phone`,
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
   * Update configure of user
   * @param id
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updateConfig(
    id: number,
    data: PersonConfig,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<PersonConfig>;
  public updateConfig(
    id: number,
    data: PersonConfig,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<PersonConfig>>;
  public updateConfig(
    id: number,
    data: PersonConfig,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<PersonConfig>>;
  public updateConfig(
    id: number,
    data: PersonConfig,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling updateConfig.'
      );
    }

    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling updateConfig.'
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

    return this.httpClient.put<PersonConfig>(
      `${this.basePath}/user/${encodeURIComponent(Number(id))}/config/update`,
      data,
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
   * Return user information details.
   * @param id
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updateUserDetail(
    id: number,
    data: UserDetail,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<UserDetail>;
  public updateUserDetail(
    id: number,
    data: UserDetail,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<UserDetail>>;
  public updateUserDetail(
    id: number,
    data: UserDetail,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<UserDetail>>;
  public updateUserDetail(
    id: number,
    data: UserDetail,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling updateUserDetail.'
      );
    }

    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling updateUserDetail.'
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

    return this.httpClient.put<UserDetail>(
      `${this.basePath}/user/${encodeURIComponent(String(id))}/update`,
      data,
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
   * Update user address
   * @param geolocationId
   * @param id
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updateUserGeolocation(
    geolocationId: number,
    id: number,
    data: UserGeolocation,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<UserGeolocation>;
  public updateUserGeolocation(
    geolocationId: number,
    id: number,
    data: UserGeolocation,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<UserGeolocation>>;
  public updateUserGeolocation(
    geolocationId: number,
    id: number,
    data: UserGeolocation,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<UserGeolocation>>;
  public updateUserGeolocation(
    geolocationId: number,
    id: number,
    data: UserGeolocation,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (geolocationId === null || geolocationId === undefined) {
      throw new Error(
        'Required parameter geolocationId was null or undefined when calling updateUserGeolocation.'
      );
    }

    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling updateUserGeolocation.'
      );
    }

    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling updateUserGeolocation.'
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

    return this.httpClient.put<UserGeolocation>(
      `${this.basePath}/user/${encodeURIComponent(
        String(id)
      )}/geolocation/${encodeURIComponent(String(geolocationId))}`,
      data,
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
   * Update phone of user
   * @param id
   * @param phoneId
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updateUserPhone(
    id: number,
    phoneId: number,
    data: UserPhone,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<Array<UserPhone>>;
  public updateUserPhone(
    id: number,
    phoneId: number,
    data: UserPhone,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<Array<UserPhone>>>;
  public updateUserPhone(
    id: number,
    phoneId: number,
    data: UserPhone,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<Array<UserPhone>>>;
  public updateUserPhone(
    id: number,
    phoneId: number,
    data: UserPhone,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling updateUserPhone.'
      );
    }

    if (phoneId === null || phoneId === undefined) {
      throw new Error(
        'Required parameter phoneId was null or undefined when calling updateUserPhone.'
      );
    }

    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling updateUserPhone.'
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

    return this.httpClient.put<Array<UserPhone>>(
      `${this.basePath}/user/${encodeURIComponent(
        String(id)
      )}/phone/${encodeURIComponent(String(phoneId))}`,
      data,
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
   *
   * @param id A unique integer value identifying this person.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getUserPhoto(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<any>;
  public getUserPhoto(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<any>>;
  public getUserPhoto(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<any>>;
  public getUserPhoto(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getUserPhoto.'
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
    const httpHeaderAccepts: string[] = ['image/jpeg', 'image/png'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get(
      `${this.basePath}/user/${encodeURIComponent(String(id))}/photo`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
        responseType: 'blob',
        withCredentials: this.configuration.withCredentials,
      }
    );
  }

  /**
   *
   *
   * @param photo
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public setUserPhoto(
    photo: Blob,
    observe?: 'body',
    reportProgress?: boolean,
  ): Observable<any>;
  public setUserPhoto(
    photo: Blob,
    observe?: 'response',
    reportProgress?: boolean,
  ): Observable<HttpResponse<any>>;
  public setUserPhoto(
    photo: Blob,
    observe?: 'events',
    reportProgress?: boolean,
  ): Observable<HttpEvent<any>>;
  public setUserPhoto(
    photo: Blob,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (photo === null || photo === undefined) {
      throw new Error(
        'Required parameter photo was null or undefined when calling setUserPhoto.'
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
    const httpHeaderAccepts: string[] = ['image/jpeg', 'image/png'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['multipart/form-data'];

    const canConsumeForm = this.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): void | HttpParams };
    let useForm = false;
    const convertFormParamsToString = false;
    // use FormData to transmit files using content-type "multipart/form-data"
    // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
    useForm = canConsumeForm;
    if (useForm) {
      formParams = new FormData();
    } else {
      formParams = new HttpParams({
        encoder: new CustomHttpUrlEncodingCodec(),
      });
    }

    if (photo !== undefined) {
      formParams = formParams.append('photo', <any>photo) || formParams;
    }

    return this.httpClient.post(
      `${this.basePath}/user/photo`,
      convertFormParamsToString ? formParams.toString() : formParams,
      {
        headers: headers,
        observe: observe,
        responseType: 'blob',
        reportProgress: reportProgress,
        withCredentials: this.configuration.withCredentials,
      }
    );
  }
}
