import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { fillSignupFields, clickLastSlide, clickEntryButton, clickSignUpButton, 
         clickNextButton, clickNextButton_2, clickDateFieldButton, fillSignupFields_2, 
         clickGenreFieldButton, fillSignupFields_3 , clickRegisterButton, fillSigninFields, 
         clickLoginButton, deleteUser} from '../../functions/testFunctions';

var user;
var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

describe('Login tests', () =>{
  // Run before each case test
  beforeEach(() => {

    user = {
      username: 'renatinhosss',
      name: 'renato vinicius',
      email: 'renatinho@gmail.com',
      password:'abc123456',
      passwordVerify: 'abc123456',
      cpf: '09233118070',
      endereco: 'quadra 14',
      ddd: '061',
      whatsapp: '993675487'
    };

    browser.get('');

    browser.driver.sleep(500);  
    clickLastSlide();
    browser.driver.sleep(500);
    clickEntryButton();
    browser.driver.sleep(500);
    clickSignUpButton();
    browser.driver.sleep(500);
    fillSignupFields(user);
    browser.driver.sleep(500);
    clickNextButton();
    browser.driver.sleep(500);
    fillSignupFields_2(user);
    browser.driver.sleep(500);
    clickDateFieldButton();
    browser.driver.sleep(500);
    clickGenreFieldButton();
    browser.driver.sleep(500);
    clickNextButton_2();
    browser.driver.sleep(500);
    fillSignupFields_3();
    browser.driver.sleep(500);
    clickRegisterButton();
    browser.driver.sleep(500);


  });
  afterEach(() => {
    deleteUser(user);
  });
/* 
  it('should sign-in', () => {
    fillSigninFields(user);
    clickLoginButton(); 
  }) */

  it('Login succesful', () =>{

  });
});
