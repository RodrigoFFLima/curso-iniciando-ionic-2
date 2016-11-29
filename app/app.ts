import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {ConnectionService} from './providers/connection-service/connection-service';
import {HomePage} from './pages/home/home';
import {MenuTestPage} from './pages/menu-test/menu-test';
import {AlertPage} from './pages/alert/alert';
import {GeneratedTestPage} from './pages/generated-test/generated-test';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  pages: Array<{component: any, title: string, icon: string}>;
  rootPage: any = HomePage;

  constructor(platform: Platform, private menuCtrl: MenuController) {

    this.pages = [ //array de paginas da nossa aplicação
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: MenuTestPage, title: 'Menu Test', icon: 'menu'},
      {component: GeneratedTestPage, title: 'Generated Page', icon: 'home'},
      {component: AlertPage, title: 'Alert Page', icon: 'home'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page: any, menuSide: string) : void {
    this.rootPage = page.component;
    this.menuCtrl.close(menuSide); //ao inves de usar o menuToggle usamos este metodo para fechar a aba menu
  }

  menuOpened() : void{
    console.log('Abriu');
  }
}

ionicBootstrap(MyApp, [ConnectionService], {
  menuType: 'push', //menuType para todas as plataformas
  platforms: {
    ios:  {
      menuType: 'overlay', //aqui falamos para o menuType no iOs ser do tipo overlay
    }
  }
});
