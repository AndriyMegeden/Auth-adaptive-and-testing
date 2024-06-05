import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Menu } from '@interfaces/theme.interface';
import { customerMenu } from '@static/theme.settings';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu-layout',
  templateUrl: './menu-layout.component.html',
  styleUrls: ['./menu-layout.component.scss'],
})
export class MenuLayoutComponent  implements OnInit {

  public menus: Menu[] = customerMenu;
  public activeMenu: Menu;

  constructor() { }

  ngOnInit() {
    this.activeMenu = this.menus.find(menu => menu.default === true);
  }

}
