import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import ContactPage from "../pages/contact.page";

test.describe('Contact', () => {
    let contactPage: ContactPage;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.navigate();
    })
    
    test('Fill contact form and verify sucess message', async ({ }) => {
        //fill the form 
        contactPage.submitForm(faker.name.fullName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraphs(2));
        await expect(contactPage.alert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    })

});