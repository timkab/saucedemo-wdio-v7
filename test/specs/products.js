const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const inventoryPage = require('../pageobjects/inventory.page');

describe('Verify product page items and functionality', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    })

    it('Should verify number of items on the product page', async () => {
        await expect(InventoryPage.itemsList).toBeExisting();
        await expect(InventoryPage.itemsList).toBeElementsArrayOfSize(6);
    })

    it('Should verify description of the item', async () => {
        await expect(InventoryPage.itemDesc).toBeExisting();
        await expect(InventoryPage.itemDesc).toHaveText("A red light isn't the desired state in"
            + " testing but it sure helps when riding your bike at night. Water-resistant"
            + " with 3 lighting modes, 1 AAA battery included.");
    })

    it('Should verify title of the item', async () => {
        await expect(InventoryPage.itemTitle).toBeExisting();
        await expect(InventoryPage.itemTitle).toHaveText('Sauce Labs Bike Light');
    })

    it('Should Add item to the cart', async () => {
        await InventoryPage.addToCart();
    })

    it('Should verify cart badge count is 1', async () => {
        await expect(InventoryPage.cartBadgeCount).toHaveText('1');
    })

    it('Should Remove item from the cart', async () => {
        await inventoryPage.removeFromCart();
    })
})