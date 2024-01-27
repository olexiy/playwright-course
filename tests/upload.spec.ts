import { test, expect } from '@playwright/test';
import path from 'path';
import CartPage from '../pages/cart.page';

test.describe('Upload File', () => {
    let cartPage: CartPage;
  
    const fileName = ['logotitle.png', '3mb-file.pdf']
  
    for (const name of fileName) {
      test.skip(`should upload a ${name} file`, async ({ page }) => {
        cartPage = new CartPage(page);
    
        // Open url
        await cartPage.navigate();
    
        // provide test file path
        const filePath = path.join(__dirname, `../data/${name}`);
        
        // upload test file
        cartPage.uploadComponent().uploadFile(filePath);
    
        // assertion
        await expect(cartPage.uploadComponent().successTxt)
          .toContainText('uploaded successfully', {timeout: 10000});
      })
    }
})