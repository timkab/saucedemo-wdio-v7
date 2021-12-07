const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('Positive Login and logout flow', () => {
    it('Should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.pageTitle).toBeExisting();
        await expect(InventoryPage.pageTitle).toHaveText('PRODUCTS');
    });

    it ('Should logout', async () => {
        await InventoryPage.logout();
        await expect(LoginPage.btnLogin).toBeExisting();
    })
});


