import LoginPage from "../pages/login.page";
import LoginRepo from "../repos/login.repo";
import testData from "../specs/data/test.json";

describe('sample test', () => {
    it('sample test', async () => {
        LoginPage.open();
        await LoginPage.emailInpt.setValue(testData.loginEmail);
        await browser.pause(1000);
        await LoginPage.pswdInpt.setValue(testData.loginPswd);
        await browser.pause(1000);
        await expect(LoginPage.emailInpt).toHaveValue(testData.loginEmail);
        await LoginPage.loginBtn.click();
        await expect(LoginPage.alertBox).toBeExisting();
        await (await expect(LoginPage.alertBox)).not.toBeDisplayed();
    });
});


