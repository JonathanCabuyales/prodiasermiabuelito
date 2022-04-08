import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.component.html',
  styleUrls: ['./quienessomos.component.css']
})
export class QuienessomosComponent implements OnInit {
  
  showNavigationArrows = false;
  showNavigationIndicators = false;

  constructor() { }

  ngOnInit(): void {
  }

}
