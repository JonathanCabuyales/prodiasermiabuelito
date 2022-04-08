import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  showhorizontal: boolean = false;
  showvertical: boolean = false;

  constructor() { }

  ngOnInit(): void {

    if(screen.width > 760){
      
      this.showhorizontal = true;
      this.showvertical = false;
      
    }else{
      this.showhorizontal = false;
      this.showvertical = true;
    }

  }

}
