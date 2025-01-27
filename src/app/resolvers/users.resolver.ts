import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {CrudService} from "../api/crud.service";
import {User} from "../models/user";

export const usersResolver: ResolveFn<User[]> = (route, state) => {
  const userCrudService = inject(CrudService<User>);
  return userCrudService.getAll('users');
};
