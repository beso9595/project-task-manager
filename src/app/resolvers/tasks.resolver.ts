import { ResolveFn } from '@angular/router';
import {CrudService} from "../api/crud.service";
import {Task} from "../models/task";
import {inject} from "@angular/core";
import {Observable} from "rxjs";

export const tasksResolver: ResolveFn<Observable<Task[]>> = (route, state) => {
  const taskCrudService = inject(CrudService<Task>);
  return taskCrudService.getAll('tasks');
};
