import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Network } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isConnected: boolean = false;

  constructor() {

    // état courant du réseau
    Network.getStatus()
      .then(status => this.isConnected = status.connected)
    
    // écouteur d'événement sur l'état réseau
    Network.addListener("networkStatusChange", (status) => {
      this.isConnected = status.connected
    })
  }

}
