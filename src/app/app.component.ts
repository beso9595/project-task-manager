import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatDrawerContainer, MatIcon, MatDrawer, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  menuItems = [
    { name: 'Dashboard', icon: 'home', path: 'dashboard' },
    { name: 'Tasks', icon: 'task_alt', path: 'tasks' },
    { name: 'Backlog', icon: 'list_alt', path: 'backlog' },
    { name: 'Users', icon: 'group', path: 'users' },
  ]
}
