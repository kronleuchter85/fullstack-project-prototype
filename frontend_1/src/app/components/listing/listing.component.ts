import { Component, OnInit } from '@angular/core';
import {Device} from '../../interfaces/device'
import {DeviceService} from '../../services/device.service'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent  implements OnInit {


  devices : Device[] = [];

  constructor(
    private deviceService : DeviceService
  ) { 
  
    // this.devices = this.deviceService.getAllDevices()

    this.deviceService.getAllDevices().subscribe(data => {
      console.log("recibiendo dispositivos");
      console.log(data);
      this.devices = data;
    });
  }

  ngOnInit() {}

}
