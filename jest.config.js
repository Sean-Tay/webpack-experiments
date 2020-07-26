const path = require('path');

const PATHS = require('./paths');

module.exports = {
    // verbose: true,

    bail: 1, // Specifies to Jest the number of Failed Tests to tolerate, exceeding which to terminate the Test Run.
    
    // A map between Dependency Regexes and Mock Module Paths.
    // Note: Regexes and Paths are checked in sequence until one matches.
    // Note: '<rootDir>' is a Jest defined String-Token - use with the Angled Brackets.
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.resolve(PATHS.PATH_PROJECT_ROOT, './__mocks__'),
        '\\.(s?css|less)$': 'identity-obj-proxy',

        // Aliases are used to shorten import or require declarations in Files.
        '^@/(.*)$': path.resolve(PATHS.PATH_SRC, './$1'),
    }
};