import { test, expect } from '@playwright/test';
import AccountPage from '../pages/account.page';

test.describe('My Account', async () => {
    let accountPage: AccountPage;

    test.beforeEach(async ({ page }) => {
        accountPage = new AccountPage(page);
        await accountPage.navigate();
    })

    test('Login', async ({  }) => {
        await expect(accountPage.logoutLink).toBeVisible();
    })
    

    test('Access Orders', async ({ page }) => {
       await accountPage.ordersLink.click();
       await expect(page).toHaveURL(/.*orders/);
    });

    test('Access Downloads', async ({page }) => {
        await accountPage.downloadsLink.click();
        await expect(page).toHaveURL(/.*downloads/);
 
    }) 
})
