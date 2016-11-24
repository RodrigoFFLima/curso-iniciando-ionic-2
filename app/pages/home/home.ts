import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';

import { MenuTestPage} from '../menu-test/menu-test';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }

  pushPage() : void {
    this.navCtrl.push(MenuTestPage); //aqui fazemos aparecer uma nova página, porem sem os menus,
                                    //para isso adicionamos na pagina app.html persistent = true.
  }

}
