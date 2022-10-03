import { Page, Locator } from '@playwright/test';
class HomePage {
    private page: Page;
    nameField: Locator;
    emailField: Locator;
    phoneField: Locator;
    messageField: Locator;
    submitBtn: Locator;
    alert: Locator;

    constructor(page) {
        this.page = page;
        this.nameField = page.locator('.contact-name input');
        this.emailField = page.locator('.contact-email input');
        this.phoneField = page.locator('.contact-phone input');
        this.messageField = page.locator('.contact-message textarea');
        this.submitBtn = page.locator('button[type=submit]');
        this.alert = page.locator('div[role=alert]');
    }

    async navigate(){
        await this.page.goto("/contact");
    }

    async submitForm(name: string, email: string, phone: string, message: string){
        //fill the form 
        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.phoneField.fill(phone);
        await this.messageField.fill(message);
        //submit form
        await this.submitBtn.click();
    }

}

export default HomePage;