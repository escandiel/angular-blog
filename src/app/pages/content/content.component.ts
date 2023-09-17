import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  public contentTitle: string = '';
  public contentSubtitle: string = '';
  public contentImg: string = '';
  public contentArticle: string = '';
  constructor() {}

  ngOnInit(): void {}
}
