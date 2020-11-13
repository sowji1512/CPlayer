import { browser, by, element } from 'protractor';

export class AppPage {
  i:number=0
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
  getRandomString(length) {
   
    var string = '';
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' //Include numbers if you want
            for (this.i = 0; this.i < length; this.i++) {
                string += letters.charAt(Math.floor(Math.random() * letters.length));
            }
            return string;
        }
}
