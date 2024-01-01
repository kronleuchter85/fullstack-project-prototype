import { Injectable } from '@angular/core';
import { Device } from '../interfaces/device';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private httpClient:HttpClient) { }


  getAllDevices():Observable<Device[]>{
    // return this.httpClient.get<Device[]>('http://fullstack-project-backend:3000/api/devices')
    return this.httpClient.get<Device[]>('http://localhost:8000/api/devices')
  }

  // getAllDevices():Device[]{
  //   return  [
  //     {'id':1,
  //     'name':'Device 1',
  //     'lastReadingValue':123,
  //     'location': '123141;312313',
  //     'state':true,
  //     'lastReadingDate':'2023-12-01',
  //     'valveId': 1,
  //     'valveName':'Kitchen'}
  //   ]
  // }
}
