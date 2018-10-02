import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class RequestService {
  constructor(private http: HttpClient) { }

  public get(url: string): Promise<any> {
    return new Promise((resolve, reject): any => {
      this.http.get(url).subscribe((response) => resolve(response), (error) => reject(error));
    });
  }
}
