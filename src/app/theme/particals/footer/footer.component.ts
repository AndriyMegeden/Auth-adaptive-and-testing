import { Component, OnInit } from '@angular/core';
import { companyMail, companyPhone, logoBig } from '@static/theme.settings';
import { logo } from '@static/theme.settings';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
  public logoMobile: string = logo;
  public logo: string = logoBig;
  public companyPhone: string = companyPhone;
  public companyMail: string = companyMail;

  constructor() { }

  ngOnInit() {}

}
