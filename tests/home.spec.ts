import { test, expect } from '@playwright/test';
import HomePage from "../pages/home.page";

test.describe('Home', () => {
    let homePage: HomePage;
    test('Open HomePage and verify title', async ({ page }) => {

        await page.goto("https://practice.automationbro.com ");
        await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    })

    test('Open About page and verify title', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/about ");
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })

    test('Click get starten button using CSS Selectot', async ({ page }) => {
        homePage = new HomePage(page);
        await page.goto("https://practice.automationbro.com ");

        //click the button
        await homePage.getStartedButton.click();

        //verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/);
    })

    test('Verify heading text is visible usint text selector', async ({ page }) => {
        homePage = new HomePage(page);
        await page.goto("https://practice.automationbro.com ");

        //find the text locator
        const headingText = homePage.headingText;

        //verify headingText is visible
        await expect(headingText).toBeVisible();
    })


    test('Verify home linc is enabled usint text and CSS selector', async ({ page }) => {
        homePage = new HomePage(page);
        await page.goto("https://practice.automationbro.com ");

        //find the text locator
        //const homeText = page.locator('#primary-menu >> text=Home');
        const homeText = homePage.homeLink;

        //verify homeText is enabled
        await expect(homeText).toBeEnabled();
    })

    test('Verify search icon is visible using XPath selector', async ({ page }) => {
        homePage = new HomePage(page);
        await page.goto("https://practice.automationbro.com ");

        //find the search icon
        const searchIcon = homePage.searchIcon;
        //verify searchIcon is visible
        await expect(searchIcon).toBeVisible();
    })

    test('Verify text of all nav links', async ({ page }) => {
        homePage = new HomePage(page);
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
        const navLinks = homePage.navLinks;
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