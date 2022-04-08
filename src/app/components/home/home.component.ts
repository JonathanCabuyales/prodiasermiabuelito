import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;

  constructor(config: NgbCarouselConfig,
    public dialog: MatDialog) {
    
  }

  ngOnInit(): void {


    const dialogRef = this.dialog.open(PopupComponent, {
      width: '80%',
      height: '80%',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(res => {

    });


  }


}
