import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Lowercase} from './../../pipes/lowercase';

/*
  Generated class for the MenuTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/menu-test/menu-test.html',
  pipes: [Lowercase]
})
export class MenuTestPage {
  constructor(private nav: NavController) {}
}
