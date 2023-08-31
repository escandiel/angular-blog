import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-card',
  templateUrl: './bg-card.component.html',
  styleUrls: ['./bg-card.component.css'],
})
export class BgCardComponent implements OnInit {
  public bgCard: string = 'bg-card';
  public bgCardContainer: string = 'bg-card-container';

  constructor() {}

  ngOnInit(): void {}
}
