import { Routes } from '@angular/router';
import {TasksComponent} from "./components/tasks/tasks.component";
import {BacklogComponent} from "./components/backlog/backlog.component";
import {UsersComponent} from "./components/users/users.component";
import {tasksResolver} from "./resolvers/tasks.resolver";
import {backlogsResolver} from "./resolvers/backlogs.resolver";
import {TaskComponent} from "./components/task/task.component";
import {taskResolver} from "./resolvers/task.resolver";
import {usersResolver} from "./resolvers/users.resolver";

export const routes: Routes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    {
        path: 'task',
        component: TaskComponent,
        resolve: { task: taskResolver, users: usersResolver }
    },
    {
        path: 'task/:id',
        component: TaskComponent,
        resolve: { task: taskResolver, users: usersResolver }
    },
    {
        path: 'tasks',
        component: TasksComponent,
        resolve: { taskList: tasksResolver }
    },
    { path: 'backlog', component: BacklogComponent, resolve: { backlogs: backlogsResolver } },
    { path: 'users', component: UsersComponent, resolve: { users: usersResolver } },
    { path: '**', redirectTo: 'tasks', pathMatch: 'full' },
];
