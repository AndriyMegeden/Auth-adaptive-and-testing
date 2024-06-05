import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-public',
  templateUrl: './public.page.html',
  styleUrls: ['./public.page.scss'],
})
export class PublicPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  public mobileMenuOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  goUp(){
    this.content.scrollToTop(500);
  }

  changeToggle(event: boolean){
    this.mobileMenuOpen = event
  }
}
