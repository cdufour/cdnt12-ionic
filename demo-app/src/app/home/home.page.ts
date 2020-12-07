import { Component } from '@angular/core';

interface Student {
  id: number;
  name: string;
  grade: number;
  isProjectDone: boolean;
  comment: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  students: Student[] = [
    { id: 15, name: "Hugo", grade: 12, isProjectDone: false, comment: "Appliqué, attentif" },
    { id: 232, name: "Noémie", grade: 18, isProjectDone: true, comment: "Brillante, tout simplement" },
    { id: 34, name: "Umberto", grade: 6.5, isProjectDone: false, comment: "Dissipé, pertubateur" }
  ]

  message: string = "";

  constructor() {}

  onClick(index: number) {
    this.message = this.students[index].comment;
  }

}
