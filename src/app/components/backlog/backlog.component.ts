import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {Task} from "../../models/task";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-backlog',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    DatePipe
  ],
  templateUrl: './backlog.component.html',
  styleUrl: './backlog.component.scss'
})
export class BacklogComponent implements OnInit {
  dataSource = new MatTableDataSource<Task[]>();
  displayedColumns = [
    'name',
    'status',
    'user_id',
    'created_at',
  ];

  constructor(
      private route: ActivatedRoute,
      private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.dataSource.data = this.route.snapshot.data['backlogs'];
  }

  onEdit(task: Task) {
    this.router.navigate(['/task/' + task.id]);
  }
}
