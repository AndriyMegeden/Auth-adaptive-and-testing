import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Langs } from '@core/auth-service/dto/user.dto';
import { environment } from '@environments/environment';
import { Menu } from '@interfaces/theme.interface';
import { TranslateService } from '@ngx-translate/core';
import { logo, mainMenu } from '@static/theme.settings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Output() onChangeToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  public logo: string = logo;
  public currentLanguage: Langs = environment.languages.default as Langs;
  public menus: Menu[] = mainMenu;
  public mobileMenuOpen: boolean = false;
  
  constructor(private translate: TranslateService) { }

  ngOnInit() {}

  switchLanguage() {
    const currentIndex = environment.languages.available.indexOf(this.currentLanguage);
    const nextIndex = (currentIndex + 1) % environment.languages.available.length;
    const nextLanguage = environment.languages.available[nextIndex];
    this.currentLanguage = nextLanguage as Langs;
    this.translate.use(this.currentLanguage)
  }

  changeToggle(){
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.onChangeToggle.emit(this.mobileMenuOpen )
  }

}
