/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable, Type } from '@angular/core';
// eslint-disable-next-line max-len
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@environments/environment';
import { LocalStorageService } from './localstorage.service';

export type RestApiContentType = 'application/json' | 'multipart/form-data';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  public remoteApi: string = environment.remoteApi;

  constructor(
    private http: HttpClient,
    public localStorage: LocalStorageService,
  ) {
  }

  beforeRequest(secure: boolean, contentType: RestApiContentType = 'application/json'){
    if(secure){
      const authToken = this.localStorage.getAuthorization().authorization.access_token;
      const headers = new HttpHeaders({
        'Content-Type': contentType,
        'Authorization': `Bearer ${authToken}`
      });
      return headers;
    }
    else {
      return {};
    }
  }

  
  public get(secure: boolean, url: string, params: HttpParams | any, resFn?, errFn?, returnParams = false, contentType: RestApiContentType = 'application/json'){
    const urlAddress = this.remoteApi + url;
    const reqHeaders = this.beforeRequest(secure, contentType);
    
    if(!returnParams){
      this.http.get(urlAddress, { headers: reqHeaders, params: {...params} })
      .subscribe({
        next: (res) => resFn(res),
        error: (err) => errFn(err)
      });
    }
    else{
      return this.http.get(urlAddress, { headers: reqHeaders, params: {...params} });
    }
  }

  public post<BODY>(secure: boolean,url: string, params: HttpParams | any ,body: BODY, resFn?, errFn?, returnParams = false, contentType: RestApiContentType = 'application/json'){
    const urlAdress = this.remoteApi + url;
    const reqHeaders = this.beforeRequest(secure, contentType);
    if(!returnParams){
      this.http.post(urlAdress, body, { headers: reqHeaders, params: {...params} })
      .subscribe({
        next: (res) => resFn(res),
        error: (err) => errFn(err)
      });
    }
    else{
      return this.http.post(urlAdress, body, { headers: reqHeaders, params: {...params} });
    }
  }

  public async put<BODY>(secure: boolean,url: string,id: string, params: HttpParams | any,  body: BODY, resFn, errFn, contentType: RestApiContentType = 'application/json'){
    const urlAdress = this.remoteApi + url + `/${id}`;
    const reqHeaders = this.beforeRequest(secure, contentType);
    this.http.put(urlAdress, body, { headers: reqHeaders, params: {...params} })
    .subscribe({
      next: (res) => resFn(res),
      error: (err) => errFn(err)
    });
  }
  
}


