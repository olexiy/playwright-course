import { Page, Locator } from '@playwright/test';
class HomePage {
    private page: Page;
    getStartedButton: Locator;
    headingText: Locator;
    homeLink: Locator;
    searchIcon: Locator;
    navLinks: Locator;

    constructor(page) {
        this.page = page;
        this.getStartedButton = this.page.locator('#get-started');
        this.headingText = this.page.locator('text=Think different. Make different.');
        this.homeLink = this.page.locator('#primary-menu:has-text("Home")');
        this.searchIcon = this.page.locator('//*[@id="header-action"]//*[@class="tg-icon tg-icon-search"]');
        this.navLinks = this.page.locator('#primary-menu li[id*=menu]');
    }

    async navigate(){
        await this.page.goto("/");
    }

}

export default HomePage;