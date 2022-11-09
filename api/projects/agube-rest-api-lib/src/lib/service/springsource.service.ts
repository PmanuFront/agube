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
/* tslint:disable:no-unused-variable member-ordering */

import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { SpringSource } from '../model/springSource';
import { SpringSourceDetail } from '../model/springSourceDetail';
import { SpringSourceResume } from '../model/springSourceResume';
import { Configuration } from '../configuration';
import { AgubeRestConfigurationService } from '../configuration.service';
import { SpringSourceCommentCreate } from '../model/springSourceCommentCreate';
import { Comment } from './../model/comment';

@Injectable()
export class SpringSourceService {
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
   *
   * create a new SpringSource
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public createSpringSource(
    data: SpringSource,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SpringSource>;
  public createSpringSource(
    data: SpringSource,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SpringSource>>;
  public createSpringSource(
    data: SpringSource,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SpringSource>>;
  public createSpringSource(
    data: SpringSource,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling createSpringSource.'
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

    return this.httpClient.post<SpringSource>(
      `${this.basePath}/springsource/create`,
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
   * Create a new Comment for this SpringSource.
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public createSpringSourceComment(
    data: SpringSourceCommentCreate,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SpringSourceCommentCreate>;
  public createSpringSourceComment(
    data: SpringSourceCommentCreate,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SpringSourceCommentCreate>>;
  public createSpringSourceComment(
    data: SpringSourceCommentCreate,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SpringSourceCommentCreate>>;
  public createSpringSourceComment(
    data: SpringSourceCommentCreate,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling createSpringSourceComment.'
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

    return this.httpClient.post<SpringSourceCommentCreate>(
      `${this.basePath}/springsource/comment`,
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
   * Get SpringSourceSerializer by id
   * @param id A unique integer value identifying this spring source.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getSpringSource(
    id: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SpringSource>;
  public getSpringSource(
    id: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SpringSource>>;
  public getSpringSource(
    id: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SpringSource>>;
  public getSpringSource(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getSpringSource.'
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

    return this.httpClient.get<SpringSource>(
      `${this.basePath}/springsource/${encodeURIComponent(String(id))}`,
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
   * Return the full list of comments for this SpringSource.
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getSpringSourceComments(
    id: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<Comment>>;
  public getSpringSourceComments(
    id: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<Comment>>>;
  public getSpringSourceComments(
    id: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<Comment>>>;
  public getSpringSourceComments(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getSpringSourceComments.'
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

    return this.httpClient.get<Array<Comment>>(
      `${this.basePath}/springsource/${encodeURIComponent(String(id))}/comment`,
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
   * get Resume of the SpringSource
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getSpringSourceResume(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SpringSourceResume>;
  public getSpringSourceResume(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SpringSourceResume>>;
  public getSpringSourceResume(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SpringSourceResume>>;
  public getSpringSourceResume(
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
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<SpringSourceResume>(
      `${this.basePath}/springsource/resume`,
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
   * Return a list of all SpringSource Detail.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getSpringSources(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<SpringSourceDetail>>;
  public getSpringSources(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<SpringSourceDetail>>>;
  public getSpringSources(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<SpringSourceDetail>>>;
  public getSpringSources(
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
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<Array<SpringSourceDetail>>(
      `${this.basePath}/springsource`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
        withCredentials: this.configuration.withCredentials,
      }
    );
  }
}
