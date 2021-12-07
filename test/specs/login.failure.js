const LoginPage = require('../pageobjects/login.page');

describe('Negative Login flows', () => {
    it('Should not login with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('bad', 'bad');
        await expect(LoginPage.errorMsg).toBeExisting();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('Should not Login with blank input fields', async () => {
        await LoginPage.open();
        await LoginPage.login('', '');
        await expect(LoginPage.errorMsg).toBeExisting();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username is required');
    });

    it('Should not login with locked out users credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.errorMsg).toBeExisting();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
});