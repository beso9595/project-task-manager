import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {CrudService} from "../api/crud.service";
import {Task} from "../models/task";

export const backlogsResolver: ResolveFn<Task[]> = (route, state) => {
  const taskCrudService = inject(CrudService<Task>);
  return taskCrudService.getAll('backlogs?status_id=BACKLOG');
};
