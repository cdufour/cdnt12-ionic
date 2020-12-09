import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  coords: any;

  constructor() {

    Geolocation.getCurrentPosition()
      .then((gpsData: any) => this.coords = gpsData.coords)

  }

}
