import { Page } from "@playwright/test";
import UploadComponent from "./component/upload.component";

class CartPage{
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }   

    uploadComponent(){
        return new UploadComponent(this.page);
    }

    async navigate() {
        await this.page.goto('/cart');
    }
}

export default CartPage;