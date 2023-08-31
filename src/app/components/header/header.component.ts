import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public profileContainer: string = 'profile-container';
  public profileImage: string = 'profile-img';
  public profileName: string = 'profile-name';
  public profileIcons: string = 'profile-icons';
  public profileIconsContainer: string = 'profile-icons-container';
  public profileInfo: string = 'profile-info';
  public primaryFont: string = 'primary-font';
  public secondaryFont: string = 'secondary-font';
  public toggleMode: string = 'toggle-mode';

  constructor() {}

  ngOnInit(): void {}
}
