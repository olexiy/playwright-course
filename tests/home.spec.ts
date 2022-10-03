import { test, expect } from '@playwright/test';
import HomePage from "../pages/home.page";

test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    })


    test('Open HomePage and verify title', async ({ page }) => {
        await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    })

    // eslint-disable-next-line playwright/no-skipped-test
    test.skip('Open About page and verify title', async ({ page }) => {
        await page.goto("/about ");
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })

    test('Click get starten button using CSS Selectot', async ({ page }) => {
        //click the button
        await homePage.getStartedButton.click();

        //verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/);
    })

    test('Verify heading text is visible usint text selector', async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();

        //find the text locator
        const headingText = homePage.headingText;

        //verify headingText is visible
        await expect(headingText).toBeVisible();
    })


    test('Verify home linc is enabled usint text and CSS selector', async ({ page }) => {
        //find the text locator
        const homeText = homePage.homeLink;

        //verify homeText is enabled
        await expect(homeText).toBeEnabled();
    })

    test('Verify search icon is visible using XPath selector', async ({ page }) => {
       //find the search icon
        const searchIcon = homePage.searchIcon;
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

        //find the nav links
        const navLinks = homePage.navLinks;

        //verify navlinks text
        expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    })
});