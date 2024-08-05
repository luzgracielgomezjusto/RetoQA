const { devices } = require("playwright");

module.exports = {
    use: {
        browserName: 'chromium',
        headless: false,
        baseURL: 'https://opensource-demo.orangehrmlive.com',
        screenshot: 'on',
        trace: 'on',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome']},
        },
    ],
};