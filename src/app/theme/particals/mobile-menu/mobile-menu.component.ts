import { Component, OnInit } from '@angular/core';
import { Langs } from '@core/auth-service/dto/user.dto';
import { environment } from '@environments/environment';
import { Menu } from '@interfaces/theme.interface';
import { TranslateService } from '@ngx-translate/core';
import { logo, mainMenu } from '@static/theme.settings';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent  implements OnInit {
  
  public menus: Menu[] = mainMenu;
  public currentLanguage: Langs = environment.languages.default as Langs;
  constructor(private translate: TranslateService) { }

  ngOnInit() {}

  switchLanguage() {
    const currentIndex = environment.languages.available.indexOf(this.currentLanguage);
    const nextIndex = (currentIndex + 1) % environment.languages.available.length;
    const nextLanguage = environment.languages.available[nextIndex];
    this.currentLanguage = nextLanguage as Langs;
    this.translate.use(this.currentLanguage)
  }


}
