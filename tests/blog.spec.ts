import { test, expect } from '@playwright/test';

test.describe('Contact', () => {
  
    test('Verify recent post list on blog page', async ({ page }) => {
        await page.goto("/blog/ ");

        //find the search icon
        const blogPosts = page.locator('#recent-posts-3 ul li');
        //verify searchIcon is visible
        expect(await blogPosts.count()).toEqual(5);

        for(const el of await blogPosts.elementHandles()){
           expect(((await el.textContent())?.trim())?.length).toBeGreaterThan(10);
        }
    })

});