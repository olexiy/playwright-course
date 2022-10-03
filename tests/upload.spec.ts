import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Upload File', () => {
    const fileName = ['logotitle.png', '3mb-file.pdf'];

    for (const name of fileName) {
        test(`should upload a ${name} file`, async ({ page }) => {
            //Open url
            await page.goto("https://practice.automationbro.com/cart/");

            // provide test file path
            const filePath = path.join(__dirname, `../data/${name}`);

            // upload test file
            await page.setInputFiles('input#upfile_1', filePath);

            // click the submit button 
            await page.locator('#upload_1').click();

            // hardcoded sleep - WRONG
            //await page.waitForTimeout(7000);

            // conditional await
            //await page.locator('#wfu_messageblock_header_1_1').waitFor({ state: 'visible', timeout: 10000});

            // assertion await
            await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully', { timeout: 15000 });
        })
    }
})
