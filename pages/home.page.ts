class HomePage {
    page: any;
    getStartedButton: any;
    constructor(page){
        this.page = page;
        this.getStartedButton = this.page.locator('#get-started');
        this.headingButton = this.page.locator('text=Think different. Make different.');
    }

}

export default HomePage;