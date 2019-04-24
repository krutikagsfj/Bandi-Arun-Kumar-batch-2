import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMobile } from './[imobile]';

@Injectable({
  providedIn: 'root'
})
export class MobileservService {
  private url="/assets/mobile.json";

  constructor(private http:HttpClient) { }
  getmobile():Observable<IMobile[]>
  {
    return this.http.get<IMobile[]>(this.url);
  }
}
