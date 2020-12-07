import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p (click)="test()">{{ title }}</p>`,
  styles: [`p { color: red }`]
})
export class TestComponent implements OnInit {
  title: string = "Je suis le composant Test"

  constructor() { }

  ngOnInit() {}

  test() {
    this.title = "coucou";
  }

}
