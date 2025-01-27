import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {
  MatTableDataSource
} from "@angular/material/table";
import { Task } from '../../models/task';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  dataSource = new MatTableDataSource<Task[]>();

  constructor(
      private route: ActivatedRoute,
      private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.dataSource.data = this.route.snapshot.data['taskList'];
  }

  onAddTask(): void {
    this.router.navigate(['/task']);
  }

}
