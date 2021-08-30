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
import { DwellingDetail } from '../model/dwellingDetail';
import { UserAddress } from '../model/userAddress';
import { UserDetailCustom } from '../model/userDetailCustom';
import { UserPhone } from '../model/userPhone';

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
   * Add new User Full Address
   * @param id
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public addUserAddress(
    id: string,
    data: UserAddress,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<UserAddress>>;
  public addUserAddress(
    id: string,
    data: UserAddress,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<UserAddress>>>;
  public addUserAddress(
    id: string,
    data: UserAddress,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<UserAddress>>>;
  public addUserAddress(
    id: string,
    data: UserAddress,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling addUserAddress.'
      );
    }

    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling addUserAddress.'
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
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<Array<UserAddress>>(
      `${this.basePath}/user/${encodeURIComponent(String(id))}/address`,
      data,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
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
    id: string,
    data: UserPhone,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<UserPhone>>;
  public addUserPhone(
    id: string,
    data: UserPhone,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<UserPhone>>>;
  public addUserPhone(
    id: string,
    data: UserPhone,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<UserPhone>>>;
  public addUserPhone(
    id: string,
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
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<Array<UserPhone>>(
      `${this.basePath}/user/${encodeURIComponent(String(id))}/phone`,
      data,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   *
   * Delete User address
   * @param fullAddressId
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteUserAddress(
    fullAddressId: string,
    id: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public deleteUserAddress(
    fullAddressId: string,
    id: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public deleteUserAddress(
    fullAddressId: string,
    id: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public deleteUserAddress(
    fullAddressId: string,
    id: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (fullAddressId === null || fullAddressId === undefined) {
      throw new Error(
        'Required parameter fullAddressId was null or undefined when calling deleteUserAddress.'
      );
    }

    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteUserAddress.'
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
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.delete<any>(
      `${this.basePath}/user/${encodeURIComponent(
        String(id)
      )}/address/${encodeURIComponent(String(fullAddressId))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
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
    id: string,
    phoneId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public deleteUserPhone(
    id: string,
    phoneId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public deleteUserPhone(
    id: string,
    phoneId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public deleteUserPhone(
    id: string,
    phoneId: string,
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
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
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
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
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
    id: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<DwellingDetail>>;
  public getDwellingDetail(
    id: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<DwellingDetail>>>;
  public getDwellingDetail(
    id: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<DwellingDetail>>>;
  public getDwellingDetail(
    id: string,
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
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<Array<DwellingDetail>>(
      `${this.basePath}/user/${encodeURIComponent(String(id))}/dwelling`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   *
   * Return list of User Full Address
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getUserAddress(
    id: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<UserAddress>>;
  public getUserAddress(
    id: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<UserAddress>>>;
  public getUserAddress(
    id: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<UserAddress>>>;
  public getUserAddress(
    id: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getUserAddress.'
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
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<Array<UserAddress>>(
      `${this.basePath}/user/${encodeURIComponent(String(id))}/address`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
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
    id: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<UserPhone>>;
  public getUserPhone(
    id: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<UserPhone>>>;
  public getUserPhone(
    id: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<UserPhone>>>;
  public getUserPhone(
    id: string,
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
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<Array<UserPhone>>(
      `${this.basePath}/user/${encodeURIComponent(String(id))}/phone`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   *
   * Return list of users with custom details.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getUsersDetails(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<UserDetailCustom>>;
  public getUsersDetails(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<UserDetailCustom>>>;
  public getUsersDetails(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<UserDetailCustom>>>;
  public getUsersDetails(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
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
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<Array<UserDetailCustom>>(
      `${this.basePath}/user`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   *
   * Update user address
   * @param fullAddressId
   * @param id
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updateUserAddress(
    fullAddressId: string,
    id: string,
    data: UserAddress,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<UserAddress>>;
  public updateUserAddress(
    fullAddressId: string,
    id: string,
    data: UserAddress,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<UserAddress>>>;
  public updateUserAddress(
    fullAddressId: string,
    id: string,
    data: UserAddress,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<UserAddress>>>;
  public updateUserAddress(
    fullAddressId: string,
    id: string,
    data: UserAddress,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (fullAddressId === null || fullAddressId === undefined) {
      throw new Error(
        'Required parameter fullAddressId was null or undefined when calling updateUserAddress.'
      );
    }

    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling updateUserAddress.'
      );
    }

    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling updateUserAddress.'
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
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.put<Array<UserAddress>>(
      `${this.basePath}/user/${encodeURIComponent(
        String(id)
      )}/address/${encodeURIComponent(String(fullAddressId))}`,
      data,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
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
    id: string,
    phoneId: string,
    data: UserPhone,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<UserPhone>>;
  public updateUserPhone(
    id: string,
    phoneId: string,
    data: UserPhone,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<UserPhone>>>;
  public updateUserPhone(
    id: string,
    phoneId: string,
    data: UserPhone,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<UserPhone>>>;
  public updateUserPhone(
    id: string,
    phoneId: string,
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
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.put<Array<UserPhone>>(
      `${this.basePath}/user/${encodeURIComponent(
        String(id)
      )}/phone/${encodeURIComponent(String(phoneId))}`,
      data,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}
