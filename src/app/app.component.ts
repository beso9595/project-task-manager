import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {State} from "./store/app.state";
import {Store} from "@ngrx/store";
import {menuSetValue} from "./store/app.actions";
import {selectIsExpanded} from "./store/app.selectors";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatDrawerContainer, MatIcon, MatDrawer, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @ViewChild('drawer') drawer!: ElementRef;
  menuItems = [
    { name: 'Ongoing Tasks', icon: 'task_alt', path: 'tasks' },
    { name: 'Backlog', icon: 'list_alt', path: 'backlog' },
    { name: 'Users', icon: 'group', path: 'users' },
  ]

  constructor(private stateStore: Store<State>) {
  }

  ngOnInit(): void {
    // TODO for some reason not triggered
    this.stateStore.select(selectIsExpanded).subscribe((state: boolean) => {
      console.log(state);
      if (state) {
        setTimeout(() => {
          this.drawer.nativeElement.open();
        }, 0);
      } else {
        setTimeout(() => {
          this.drawer.nativeElement.close();
        }, 0);
      }
    });
    this.restoreState();
  }

  restoreState(): void {
    // restore state after refresh
    const isExpanded = localStorage.getItem("isExpanded");
    this.stateStore.dispatch(menuSetValue({isExpanded: !!isExpanded}));
  }
}
