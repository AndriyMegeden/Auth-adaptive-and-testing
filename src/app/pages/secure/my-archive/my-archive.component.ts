import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@theme/shared.module';

@Component({
  selector: 'app-my-archive',
  templateUrl: './my-archive.component.html',
  styleUrls: ['./my-archive.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class MyArchiveComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
