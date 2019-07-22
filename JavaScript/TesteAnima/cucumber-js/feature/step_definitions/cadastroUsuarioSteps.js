const{After , Given, When, Then, setDefaultTimeout } = require('cucumber'),
    {Builder} = require('selenium-webdriver');

let webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.util,
    driver =  new Builder().forBrowser('firefox').build(),    
    Assert = require("chai").assert,
    redirect;
    

    setDefaultTimeout(60 * 1000);

Given('que estou na pagina de cadastro',  function () {
    driver.get('https://automacaocombatista.herokuapp.com/users/new');
});

When('os campos são preenchidos com', function (tabela) {
    driver.findElement(By.id('user_name')).sendKeys(tabela.rawTable[0][1]);
    driver.findElement(By.id('user_lastname')).sendKeys(tabela.rawTable[1][1]);
    driver.findElement(By.id('user_email')).sendKeys(tabela.rawTable[2][1]);
    driver.findElement(By.id('user_address')).sendKeys(tabela.rawTable[3][1]);
    driver.findElement(By.id('user_university')).sendKeys(tabela.rawTable[4][1]);
    driver.findElement(By.id('user_profile')).sendKeys(tabela.rawTable[5][1]);
    driver.findElement(By.id('user_gender')).sendKeys(tabela.rawTable[6][1]);
    driver.findElement(By.id('user_age')).sendKeys(tabela.rawTable[7][1]);
});

When('envio um formulario dados usuario para cadastro',  function () {
    redirect = driver.findElement(By.xpath("//form[@id='new_user']//input[@type='submit']")).click();
});

Then('visualizo uma mensagem de sucesso {string}', function (string) {
  return redirect.then(function(){
    return driver.findElement(By.id("notice")).getText().then( (resposta) => { 
      console.log(resposta);
      return Assert.equal(resposta, string);
    });    
  }); 
});




