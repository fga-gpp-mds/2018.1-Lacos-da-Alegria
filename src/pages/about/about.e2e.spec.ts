import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { clickAboutButton, clickEntryButton, clickLastSlide, clickLoginButton, clickSettingsButton, fillSigninFields, clickSignUpButton, signUpUser, goToLoginPage, signInUser, goToAboutPage} from '../../acceptanceTestFunctions/testFunctions';

var user;
var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

describe('About tests', () =>{
    // Run before each case test
    beforeEach(() => {

        user = {
            username: 'renatinhosss',
            password:'abc123456',
        };

        goToLoginPage();
        browser.driver.sleep(500);
        signInUser(user);

    });
    afterEach(() => {

    });

    it('About succesful', () =>{
        browser.driver.sleep(500);
        goToAboutPage();
    });

});
