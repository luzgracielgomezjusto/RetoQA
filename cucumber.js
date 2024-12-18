const common = [
    'tests/features/**/*.feature',
    //'--require-module js:babel-register',
    '--require tests/steps/**/*.js',
    '--format progress-bar',
    '--format node_modules/cucumber-pretty',
    //'--publish-quiet',
].join(' ');

module.exports = {
    default:common,
};