import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
})
export class MainCardComponent implements OnInit {
  public mainCardContainer: string = 'main-card-container';
  public mainCardImg: string = 'main-card-img';
  public mainCardSpanType: string = 'main-card-span-type';
  public mainCardSpanDate: string = 'main-card-span-date';
  public mainCardTitle: string = 'main-card-title';
  constructor() {}

  ngOnInit(): void {}
}
