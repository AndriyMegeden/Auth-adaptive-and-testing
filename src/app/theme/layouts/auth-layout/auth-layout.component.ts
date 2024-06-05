import { Component, Input, OnInit } from '@angular/core';
import { AuthType } from '@interfaces/auth.interface';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent  implements OnInit {

  @Input() page: AuthType = 'login';

  constructor() { }

  ngOnInit() {}

}
