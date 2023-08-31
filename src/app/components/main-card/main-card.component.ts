import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
})
export class MainCardComponent implements OnInit {
  public mainCardContainer: string = 'main-card-container';

  @Input()
  public mainCardImg: string = '';
  @Input()
  public mainCardSpanType: string = '';
  @Input()
  public mainCardSpanDate: string = '';
  @Input()
  public mainCardTitle: string = '';
  constructor() {}

  ngOnInit(): void {}
}
