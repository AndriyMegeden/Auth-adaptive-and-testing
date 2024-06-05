import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-go-up',
  templateUrl: './go-up.component.html',
  styleUrls: ['./go-up.component.scss'],
})
export class GoUpComponent  implements OnInit {

  @Output() onGoUp = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  goUp(){
    this.onGoUp.emit()
  }

}
