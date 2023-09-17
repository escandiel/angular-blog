import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/dataFake';

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
  private id: string | null = '0';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValueToComponent(this.id);
  }

  setValueToComponent(id: string | null) {
    const result = data.filter((article) => article.id == id)[0];

    this.contentTitle = result.title;
    this.contentSubtitle = result.subtitle;
    this.contentImg = result.img;
    this.contentArticle = result.article;
  }
}
