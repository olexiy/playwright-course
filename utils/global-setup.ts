import { chromium, FullConfig } from "@playwright/test";
import AccountPage from '../pages/account.page';


async function globalSetup(config: FullConfig){
    const browser = await chromium.launch();
    const page = await browser.newPage();

    //login
    const accountPage:AccountPage  = new AccountPage(page);
    await page.goto('https://practice.sdetunicorns.com//my-account/');

    //save not loggid in state
    await page.context().storageState({path : 'notLoggedInState.json'});

    await accountPage.loginUser('practiceuser1', 'PracticePass1!');

    // save sign-in state to 'loggedInState.json'
    await page.context().storageState({path : 'loggedInState.json'});
    
    await browser.close();
}

export default globalSetup;