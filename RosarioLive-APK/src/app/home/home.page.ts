import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private browser: InAppBrowser) {}

  ngOnInit(): void {
      const browserInstance = this.browser.create(
        'https://yocharlyz.github.io/RosarioLive', 
        '_self', 
        'location=no,hidenavigationbuttons=true,hiddeurlbar=true,zoom=no'
      );
      browserInstance.on("exit").subscribe((evt) => {
        App.exitApp();
      })
  }
}
