exports.config = {
    framework: 'jasmine',
    directConnect: true,
    baseUrl: 'http://127.0.0.1:8080',
    SELENIUM_PROMISE_MANAGER: false,
    specs: ['spec/**/*.e2e-spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    capabilities: {
        'browserName': 'chrome',
    }
};
