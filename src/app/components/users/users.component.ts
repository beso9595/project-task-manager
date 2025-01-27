import {Component, OnInit} from '@angular/core';
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell, MatHeaderCellDef,
    MatHeaderRow, MatHeaderRowDef,
    MatRow, MatRowDef,
    MatTable, MatTableDataSource
} from "@angular/material/table";
import {DatePipe} from "@angular/common";
import {User} from "../../models/user";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [
        MatTable,
        MatColumnDef,
        MatHeaderCell,
        MatCell,
        MatHeaderRow,
        MatRow,
        DatePipe,
        MatCellDef,
        MatHeaderRowDef,
        MatRowDef,
        MatHeaderCellDef
    ],
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
    dataSource = new MatTableDataSource<User>();
    displayedColumns = [
        'full_name',
        'email',
        'created_at'
    ];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.dataSource.data = this.route.snapshot.data['users'];
    }

}
