import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {requestTypes} from "./http.requests";
import {IRequest} from "./IRequest";
import {catchError, Observable, of, throwError} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {ErrorCodes} from "@shared/helpers/service/http/errorCodes";
import {Router} from "@angular/router";
import {AuthService} from "@app/core/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  serverUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient, private route: Router, private _authService: AuthService) {
    this.headers = this.headers.
      set('Authorization', 'Bearer ' + this._authService.accessToken).
      set('Coato-Code', this._authService.coatoCode);
  }

  private headers = new HttpHeaders().append('Content-Type', 'application/json');

  request(request: IRequest, method: requestTypes = "get"): Observable<Object> {
    return this.httpClient.request(method, this.serverUrl + request.getUri(), {
      headers: this.headers,
      params: request.params,
      body: JSON.stringify(request.body, HttpClientService.JSONParser)
    }).pipe(
        catchError((error) => {
          this.onErrorHandler(error);
          return throwError(error);
        })
    );
  }

  public onErrorHandler(error: any): Observable<Object> {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
      } else {
        switch (error.status) {
          case ErrorCodes.FORBIDDEN:
            this.route.navigate(['sign-out']);
            break;
        }
      }
      return of({});
    }
  }

  public static JSONParser(k: any, v: any) {
    if (v instanceof Set || v instanceof Map)
      return Array.from(v);
    return v;
  }

}


