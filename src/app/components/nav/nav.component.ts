import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() nav!: any;
  @Input() nightMode!: any;
  @Input() theme!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
