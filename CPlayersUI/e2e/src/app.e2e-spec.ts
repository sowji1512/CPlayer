import { AppPage } from './app.po';
import { browser, by, element, protractor } from 'protractor';

fdescribe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('CPlayersUI');
  });

  it('should bnavigate to register page directly', () => {
    page.navigateTo();
   
    expect(browser.getCurrentUrl()).toContain('/register');
  });
  it('should be able to register user', () => {
    page.navigateTo();
    var userid=page.getRandomString(10);
    browser.element(by.id('firstName')).sendKeys('Super2 User');
    browser.element(by.id('lastName')).sendKeys('Super1 lastUser');
    browser.element(by.id('userId')).sendKeys(userid);
    browser.element(by.id('password')).sendKeys('Super1 Userpass');
    browser.element(by.css('.register-user')).click();
    expect(browser.getCurrentUrl()).toContain('/login');
  });
  

  it('should be able to login user and navigate to search', () => {
    browser.element(by.id('userId')).sendKeys('sowji');
    browser.element(by.id('password')).sendKeys('sowjanya');
    browser.element(by.css('.login-user')).click();
    expect(browser.getCurrentUrl()).toContain('/player/search');
  });

  it('should be able to search players', () => {
    browser.element(by.css('.search-button')).click();
    expect(browser.getCurrentUrl()).toContain('/player/search');
    browser.element(by.id('search-button-input')).sendKeys('Sachin');
    browser.element(by.id('search-button-input')).sendKeys(protractor.Key.ENTER);
    const searchItems = element.all(by.css('.playerName'));
    expect(searchItems.count()).length>0;
    for(let i = 0; i < 1; i += 1) {
      expect(searchItems.get(i).getText()).toContain('Sachin');
    }
  });

  it('should be able to add player to favourites', async() => {
    browser.driver.sleep(1000);
    const searchItems = element.all(by.css('.player-thumbnail'));
    expect(searchItems.count()).toBe(25);
    searchItems.get(0).click();
    browser.element(by.css('.addToFav')).click();
    browser.driver.sleep(1000);
  });

  it('should be able to see favourite players and can also see his statistics', async() => {
    browser.element(by.id('favourites')).click();
    expect(browser.getCurrentUrl()).toContain('/favourites');
    const searchItems = element.all(by.css('.playerName'));
    searchItems.get(0).click();
    browser.element(by.css('.viewDetails')).click();
    expect(browser.getCurrentUrl()).toContain('/statistics');
    browser.driver.sleep(1000);
  });

  it('should logout from website after all operations', async() => {
   
    browser.element(by.css('.logout-button')).click();
    expect(browser.getCurrentUrl()).toContain('/login');

  });
});
