import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  users: any[] = [
    {name: "Chris", phone: "0610102020"},
    {name: "Hugo", phone: "0788996633"},
    {name: "Noémie", phone: "0610104000"}
  ]

  constructor(private vibration: Vibration) {}

  onClick() {
    this.vibration.vibrate(2000);
  }

}
