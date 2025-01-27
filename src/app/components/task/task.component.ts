import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Task} from "../../models/task";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {Status} from "../../enums/status";
import {MatOption, MatSelect} from "@angular/material/select";
import {StatusPipe} from "../../pipes/status.pipe";
import {User} from "../../models/user";
import {CrudService} from "../../api/crud.service";
import {take} from "rxjs";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatFormFieldModule,
    MatSelect,
    MatOption,
    StatusPipe,
    NgIf,
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {
  isEdit = false;
  taskForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    user_id: new FormControl(null, [Validators.required]),
  });
  task!: Task;
  taskStatusList = Object.values(Status);
  users: User[] = [];

  constructor(
      private route: ActivatedRoute,
      private taskCrudService: CrudService<Task>,
      private router: Router,
  ) {}

  ngOnInit() {
    this.isEdit = !!this.route.snapshot.paramMap.get('id');
    this.users = this.route.snapshot.data['users'];
    //
    if (this.route.snapshot.data['task']) {
      this.task = this.route.snapshot.data['task'];
      this.taskForm.patchValue(this.task);
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.taskCrudService.put('tasks', this.task.id, {
        ...this.task,
        ...this.taskForm.value
      }).pipe(take(1)).subscribe((res: Task) => {
        this.task = res;
        this.taskForm.patchValue(this.task);
        this.taskForm.markAsPristine();
      });
    } else {
      this.taskCrudService.post('tasks', {
        ...this.task,
        ...this.taskForm.value
      }).pipe(take(1)).subscribe((res: Task) => {
        this.router.navigate(['/task/' + res.id]);
      });
    }
  }

  onDelete(): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskCrudService.delete('tasks', this.task.id).pipe(take(1)).subscribe(() => {
        this.router.navigate(['/tasks']);
      })
    }
  }
}
