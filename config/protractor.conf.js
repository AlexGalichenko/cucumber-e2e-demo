const fs = require("fs-extra");
const yargs = require("yargs");
const compile = require("@cucumber-e2e/gherkin-parallel");
const reporter = require("vue-cucumber-html-reporter");
const { State } = require("@cucumber-e2e/po");
const { Memory } = require('@cucumber-e2e/memory');
const CredentialManager = require('@cucumber-e2e/credential-manager');
const PageMap = require("../po/PageMap");
const argv = yargs
    .option('env', { describe: 'environment' })
    .option("tags", { describe: "tags to run" })
    .argv;
const credentials = require(`../credentials`)[argv.env];
const ConstantMap = require('../memory/constant')[argv.env];
const ComputedMap = require('../memory/computed')[argv.env];

exports.config = {
    chromeDriver: require("../node_modules/webdriver-manager-replacement/downloads/chromedriver.config.json").last,
    directConnect: true,

    globalTimeout: 59 * 1000,
    getPageTimeout: 59 * 1000,
    allScriptsTimeout: 59 * 1000,

    capabilities: {
        browserName: "chrome",
        shardTestFiles: true,
        maxInstances: 6,
        chromeOptions: {
            args: [
                "--disable-gpu",
                "--disable-infobars",
                "--no-sandbox",
                "--incognito"
            ],
            prefs: {
                download: {
                    prompt_for_download: false
                },
            }
        }
    },

    framework: "custom",

    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../out/features/*.feature"
    ],

    cucumberOpts: {
        require: [
            "../steps/*.js"
        ],
        format: ["progress", "json:reports/report." + new Date().getTime() + ".json"],
        compiler: [],
    },

    beforeLaunch: async () => {
        fs.emptyDirSync("./reports");
        fs.emptyDirSync("./out/features");

        await compile({
            specs: ["./features/**/*.feature"],
            outDir: "./out/features",
            tagExpression: argv.tags
        });

        await CredentialManager.start(3099);
        await CredentialManager.createPool(credentials);
    },

    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        State.setPageMap(new PageMap());
        Memory.setConstantsInstance(new ConstantMap());
        Memory.setComputedInstance(new ComputedMap());
        CredentialManager.getCredentials();
    },

    afterLaunch: async () => {
        reporter.generate({
            jsonDir: './reports/',
            reportPath: './reports/',
            metadata:{
                browser: {
                    name: 'chrome',
                    version: '80'
                },
                device: 'Demo',
                platform: {
                    name: 'windows',
                    version: '10'
                }
            }
        });
    }
};
