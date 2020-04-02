const path = require('path');

const PATH_PROJECT_ROOT = path.resolve(__dirname, '');
const PATH_NODE_MODULES = path.resolve(PATH_PROJECT_ROOT, 'node_modules');
const PATH_SRC = path.resolve(PATH_PROJECT_ROOT, 'src');
const PATH_DIST = path.resolve(PATH_PROJECT_ROOT, 'dist');

module.exports = {
    PATH_PROJECT_ROOT,
    PATH_NODE_MODULES,
    PATH_SRC,
    PATH_DIST
};
