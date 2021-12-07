const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
     get currentUrl() {
        return $('//*[@id="header_container"]//*[@class="title"]');
    }

    get pageTitle() {
        return $('//*[@id="header_container"]//*[@class="title"]');
    }

    get itemsList() {
        return $$('//*[@class="inventory_item"]');
    }

    get itemTitle() {
        return $('#item_0_title_link');
    }

    get itemDesc() {
        return $('//*[contains(text(),"red light")]');
    }

    get btnAddCart() {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get btnRemItemCart() {
        return $('#remove-sauce-labs-bike-light');
    }

    get cartBadgeCount() {
        return $('[class="shopping_cart_badge"]');
    }

    get btnMenu() {
        return $('#react-burger-menu-btn');
    }

    get btnLogout() {
        return $('a#logout_sidebar_link');
    }

    async logout() {
        await this.btnMenu.click();
        await this.btnLogout.waitForClickable({ timeout: 3000 });
        await this.btnLogout.click();
    }

    async addToCart() {
        await this.btnAddCart.click();
    }

    async removeFromCart() {
        await this.btnRemItemCart.click();
    }
}

module.exports = new InventoryPage();
