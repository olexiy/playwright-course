import { test, expect } from '@playwright/test';
import path from 'path';
import CartPage from '../pages/cart.page';

test.describe('Upload File', () => {
    const fileName = ['logotitle.png', '3mb-file.pdf'];
    let cartPage: CartPage;

    for (const name of fileName) {
        test(`should upload a ${name} file`, async ({ page }) => {
            cartPage = new CartPage(page);

            await page.goto("/cart");

            const filePath = path.join(__dirname, `../data/${name}`);
            cartPage.uploadComponent().uploadFile(filePath);

            await expect(cartPage.uploadComponent().successTxt).toContainText('uploaded successfully', { timeout: 15000 });
        })
    }
})
