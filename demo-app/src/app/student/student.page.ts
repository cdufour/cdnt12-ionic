import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
  student: Student | null = null;
  hasErrorOccured: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService) {}

  ngOnInit() {
    let studentId: number = parseInt(this.route.snapshot.paramMap.get("id"));
    this.studentService.findById(studentId)
      .subscribe(
        student => this.student = student,
        err => this.hasErrorOccured = true);
    
  }

}
