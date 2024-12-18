class EmployeePage {
    constructor(page) {
        this.page = page;
        this.pimModule = page.locator('a[href="/web/index.php/pim/viewPimModule"]');
        //this.addButton = page.locator('button.oxf-button--medium');
        this.addButton = page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-header-container > button');
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.saveButton = page.locator('button[type="submit"]');
        //this.searchInput = page.locator('input[placeholder="Employee Name"]');
        this.searchInput = page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div input');
        //this.searchButton = page.locator('button[type="submit"]');
        this.searchButton = page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space');
        
    }

    async navigateToPIM() {
        console.log('Navigating to PIM page');
        await this.pimModule.click();
    }

    async addNewEmployee(firstName, lastName) {
        await this.addButton.waitFor({state: 'attached', timeout: 60000 });
        await this.addButton.waitFor({ state: 'visible', timeout: 60000 });
        console.log('Clicking Add Button');
        await this.addButton.click();

        console.log('Filling in employee details');
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);

        console.log('Waiting for Save Button')
        await this.saveButton.waitFor({state: 'attached', timeout: 60000 });
        await this.saveButton.waitFor({ state: 'visible', timeout: 60000 });
        console.log('Clicking Save Button');
        await this.saveButton.click();
        
        await this.page.waitForTimeout(10000);
    }

    async isEmployeeInList(fullName) {
        console.log('Navigating to Employee List page');
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
        
        await this.page.waitForLoadState('networkidle');

        console.log('Waiting search input');
        await this.searchInput.waitFor({ state: 'visible', timeout: 60000 });

        console.log('Filling search input');
        await this.searchInput.fill(fullName);
        await this.searchButton.click();

        await this.page.waitForTimeout(5000);
        return this.page.isVisible(`text=${fullName}`);
    }
}

module.exports = EmployeePage;