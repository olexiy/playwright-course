import { test, expect } from '@playwright/test';
import HomePage from "../pages/home.page";

test.describe('Home', () => {
    let homePage;
    test('Open HomePage and verify title', async ({ page }) => {
        homePage = new HomePage(page);
        
        await page.goto("https://practice.automationbro.com ");
        await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    })

    test('Open About page and verify title', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/about ");
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })

    test('Click get starten button using CSS Selectot', async ({ page }) => {
        await page.goto("https://practice.automationbro.com ");

        //click the button
        await page.locator('#get-started').click();

        //verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/);
    })

    test('Verify heading text is visible usint text selector', async ({ page }) => {
        await page.goto("https://practice.automationbro.com ");

        //find the text locator
        const headingText = page.locator('text=Think different. Make different.');

        //verify headingText is visible
        await expect(headingText).toBeVisible();
    })


    test('Verify home linc is enabled usint text and CSS selector', async ({ page }) => {
        await page.goto("https://practice.automationbro.com ");

        //find the text locator
        //const homeText = page.locator('#primary-menu >> text=Home');
        const homeText = page.locator('#primary-menu:has-text("Home")');

        //verify homeText is enabled
        await expect(homeText).toBeEnabled();
    })

    test('Verify search icon is visible using XPath selector', async ({ page }) => {
        await page.goto("https://practice.automationbro.com ");

        //find the search icon
        const searchIcon = page.locator('//*[@id="header-action"]//*[@class="tg-icon tg-icon-search"]');
        //verify searchIcon is visible
        await expect(searchIcon).toBeVisible();
    })

    test('Verify text of all nav links', async ({ page }) => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
          ];

        await page.goto("https://practice.automationbro.com ");

        //find the nav links
        const navLinks = page.locator('#primary-menu li[id*=menu]');
        //Get 4. element (array starts with 0)
        //const navLinks = page.locator('#primary-menu li[id*=menu]').nth(3);

        //print out all links
        for(const el of await navLinks.elementHandles()){
            console.log(await el.textContent());
        } 

        //verify navlinks text
        expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    })
});