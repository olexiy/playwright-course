import { test, expect } from '@playwright/test';

test.describe('Contact', () => {
  
    test('Fill contact form and verify sucess message', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/contact/ ");

        //fill the form 
        await page.locator('.contact-name input').fill('Max Mustermann');
        await page.locator('.contact-email input').fill('max@gmx.de');
        await page.locator('.contact-phone input').fill('55512345');
        await page.locator('.contact-message textarea').fill('Make love not war!');

        //submit form
        await page.locator('button[type=submit]').click();

        await expect(page.locator('div[role=alert]')).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    })

});