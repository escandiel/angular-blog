import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-card',
  templateUrl: './other-card.component.html',
  styleUrls: ['./other-card.component.css'],
})
export class OtherCardComponent implements OnInit {
  @Input()
  public otherCardImg: string = '';
  @Input()
  public otherCardType: string = '';
  @Input()
  public otherCardDate: string = '';
  @Input()
  public otherCardTitle: string = '';
  @Input()
  Id: string = '0';

  constructor() {}

  ngOnInit(): void {}
}
