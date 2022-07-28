import { DwellingResume, DwellingService } from '@availa/agube-rest-api';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '@availa/auth-fe';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
    public dwellingResume: DwellingResume | undefined;

    constructor(private svcDwelling: DwellingService, private svcAccount: AccountService) {}

    ngOnInit(): void {
        this.svcDwelling.getResume().subscribe({
            next: (response) => (this.dwellingResume = response),
            error: (error) => {
                if (error.status === 401) {
                    this.svcAccount.logout();
                }
            },
        });
    }
}
