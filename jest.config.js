const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts'
    ],
    collectCoverage: true,
    coverageReporters: [
        'text-summary',
        'lcov'
    ],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
    testEnvironment: 'node',
    preset: 'ts-jest',
}
