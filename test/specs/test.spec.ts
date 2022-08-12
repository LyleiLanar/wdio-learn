import LoginPage from "../ghezemice/pages/login.page";
import testData from "./data/test.json";

describe('sample test', () => {
    it('sample test', async () => {
        LoginPage.open();

        //await LoginPage.emailInpt.setValue(testData.loginEmail);
        LoginPage.typeEmail(testData.loginEmail);
        
        await LoginPage.pswdInpt.setValue(testData.loginPswd);
        await expect(LoginPage.emailInpt).toHaveValue(testData.loginEmail);
        await LoginPage.loginBtn.click();
        await expect(LoginPage.alertBox).toBeExisting();
        await expect(LoginPage.alertBox).not.toBeDisplayed();
    });
});


