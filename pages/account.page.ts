import { Page, Locator } from '@playwright/test';
class AccountPage {
    private page: Page;
    ordersLink: Locator;
    downloadsLink: Locator;
    usernameField: Locator;
    passwordField: Locator;
    loginBtn: Locator;
    logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ordersLink = page.locator('li a[href*="orders"]');
        this.downloadsLink = page.locator('li a[href*="downloads"]');
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.loginBtn = page.locator('[value="Log in"]');
        this.logoutLink = page.locator('a:has-text("Logout")');
    }

    async loginUser(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }

    async navigate() {
        await this.page.goto("/my-account");
    }

}

export default AccountPage;