import Page from "../../page";
import LoginRepo from "../repos/login.repo";
import testData from "../../specs/data/test.json";

class LoginPage extends Page {
    async open() {
        await super.open('http://ghezemice.hu/oktatas/xpath.html');
    }

    get emailInpt() { return $(LoginRepo.emailInpt) };
    get pswdInpt() { return $(LoginRepo.pswdInpt) };
    get loginBtn() { return $(LoginRepo.loginBtn) };
    get alertBox() { return $(LoginRepo.alertBox) };

    userLogin = function (loginName: string, password: string) {
        this.loginNameInpt.setValue(loginName);
        this.passwordInpt.setValue(password);
        this.loginBtn.click();
    }

    async typeEmail(txt: string) {
        await this.emailInpt.setValue(testData.loginEmail);
    }
}

export default new LoginPage();