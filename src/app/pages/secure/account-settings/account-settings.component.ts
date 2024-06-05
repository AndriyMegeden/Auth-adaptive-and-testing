import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@theme/shared.module';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class AccountSettingsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
