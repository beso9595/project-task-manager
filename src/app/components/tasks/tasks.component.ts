import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Task } from '../../models/task';
import {MatButton} from "@angular/material/button";
import {Status} from "../../enums/status";
import {NgForOf} from "@angular/common";
import {StatusPipe} from "../../pipes/status.pipe";
import {MatCard} from "@angular/material/card";
import {StatusColorDirective} from "../../directives/status-color.directive";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    MatButton,
    NgForOf,
    StatusPipe,
    MatCard,
    StatusColorDirective
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  protected readonly OngoingStatuses = Object.values(Status).filter(x => x !== Status.BACKLOG);
  statusToTaskMap: any = {};

  constructor(
      private route: ActivatedRoute,
      private router: Router,
  ) {}

  ngOnInit(): void {
    this.tasks = this.route.snapshot.data['taskList'];
    this.tasks.forEach(task => {
      if (!this.statusToTaskMap[task.status]) {
        this.statusToTaskMap[task.status] = [];
      }
      this.statusToTaskMap[task.status] = [
          ...this.statusToTaskMap[task.status],
          task
      ];
    });
  }

  onAddTask(): void {
    this.router.navigate(['/task']);
  }

  onTaskClick(id: number): void {
    this.router.navigate(['/task/' + id]);
  }
}
