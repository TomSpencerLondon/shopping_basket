// tslint:disable-next-line:no-var-requires
// @ts-ignore
const TSConsoleReporter = require("jasmine-ts-console-reporter");


jasmine.getEnv().clearReporters(); // clear default reporter
jasmine.getEnv().addReporter(new TSConsoleReporter());
