'use strict';

module.exports = {
    "projects": [
        {
            name: "vc-core",
            displayName: "Jest - VC services",
            bail: false,
            clearMocks: false,
            collectCoverage: false,
            collectCoverageFrom: [
                '**/lib/sample/getSample.js'
                
            ],
            coverageDirectory: "/test-output/coverage",
            coverageReporters: [
                "json",
                "text-summary",
                "cobertura"
            ],
            reporters: [
                "default",
                "./common/VcTestReporter",
                "jest-junit"
            ],
            setupFilesAfterEnv: ["./common/setup.js"],
            testEnvironment: "./common/VcTestEnv.js",
            testMatch: [
                "**/__tests__/**/*.js"
            ],
            testPathIgnorePatterns: [
                "__tests__/aws.js",
               
            ],
            verbose: true,
        }
    ]
};