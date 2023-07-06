import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private iab: InAppBrowser
  constructor(
  ) {
    this.iab = new InAppBrowser
  }


  async airdropSbt() {
    const browser = this.iab.create('https://huggingface.co/spaces/OneFi/similarity-check');
    console.log(browser)
    browser.on('loadstart').subscribe(event => {
      if (event.url.includes('huggingface')) {
        browser.close();
      }
      
   });
  }

}


