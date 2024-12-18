const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);
const { chromium, expect } = require('@playwright/test');
const LoginPage = require('../../page-objects/LoginPage');
const EmployeePage = require ('../../page-objects/EmployeePage');

let browser;
let context;
let page;
let loginPage;
let employeePage;

Before(async function() {
  browser = await chromium.launch({headless: false});
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  employeePage = new EmployeePage(page);
});

After(async function() {
  await page.screenshot({path: 'screenshot.png' });
  await browser.close();
});


Given('el usuario está en la página de inicio de sesión', async function () {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('el usuario ingresa el nombre del usuario {string} y la contraseña {string}', async function (username, password) {
    await loginPage.login(username, password);
 });



Then('el usuario debería ver la página de Dashboard', async function() {
    const url = await page.url();
    expect(url).toContain('dashboard/index'); 

});



 Given('el usuario ha iniciado sesión correctamente', async function() {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.login('Admin', 'admin123');
    await page.waitForTimeout(5000);
    const isVisible = await page.isVisible('text=Dashboard');
    expect(isVisible).toBeTruthy(); 
 });

 When('el usuario navega a la página de PIM', async function() {
   await employeePage.navigateToPIM();    
 });

 When('el usuario agrega un nuevo empleado con nombre {string} y apellido {string}', async function(firstName, lastName) {
   await employeePage.addNewEmployee(firstName, lastName);
 });

 Then('el usuario debería ver {string} en la lista de empleados', async function(fullName) {
   const employeeExists = await employeePage.isEmployeeInList(fullName); 
   expect(employeeExists).toBeTruthy();  
 });

 