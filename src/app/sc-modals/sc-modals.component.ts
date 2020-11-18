import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ScPackageSelectionTicketingComponent } from './sc-package-selection-ticketing/sc-package-selection-ticketing.component';

@Component({
  selector: 'app-sc-modals',
  templateUrl: './sc-modals.component.html',
  styleUrls: ['./sc-modals.component.scss']
})
export class ScModalsComponent{


    constructor(public dialog: MatDialog) { }

    openModal(): void {
        const dialogRef = this.dialog.open(ScPackageSelectionTicketingComponent, {
            panelClass: ['w60modal', 'dialog-container-modal'],
            width: ''
        });
    }

    
}


