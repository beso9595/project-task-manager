import { ResolveFn } from '@angular/router';
import {CrudService} from "../api/crud.service";
import {Task} from "../models/task";
import {inject} from "@angular/core";
import {Observable, of} from "rxjs";

export const taskResolver: ResolveFn<Observable<Task>> = (route, state) => {
  const id = route.paramMap.get('id');
  if (id) {
    const taskCrudService = inject(CrudService<Task>);
    return taskCrudService.get('tasks/' + id);
  }
  return of({} as Task);
};
