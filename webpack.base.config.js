const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const PATHS = require('./paths');

const baseConfig = {
    // Specify additional Plugins to expand the functionality of Webpack.
    // Note: Don't forget the new keyword.
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(PATHS.PATH_SRC, './index.html'),
        }),
        new ForkTSCheckerWebpackPlugin()
    ],

    // Specify the Entry-Points for Webpack.
    // Note: Webpack will traverse the Entry-Points in the order that they are specified.
    entry: {
        'main': path.resolve(PATHS.PATH_SRC, './index.js'),
    },

    // Adjust Dependency Resolution Behaviour.
    resolve: {
        // Aliases are used to shorten import or require declarations in Files.
        alias: { 
            '@': PATHS.PATH_PROJECT_ROOT,
        },

        // Specify which Directories should be searched for Dependencies. Upon a match, it will ignore the rest.
        modules: [
            PATHS.PATH_SRC,
            'node_modules'
        ],

        // Specify which Files should be the Entry Point in a Directory Module. Upon a match, it will ignore the rest.
        mainFiles: [
            'index'
        ],

        // Allow for resolution of the listed Extensions, in the specified order. Upon a match, it will ignore the rest.
        extensions: [
            '.tsx', '.ts', '.jsx', '.js'
        ],
    },

    // Specify how different Modules in the Project will be treated.
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: [
                    PATHS.PATH_NODE_MODULES,
                ],

                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,

                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript'
                            ]
                        }
                    },
                ]
            },
        ],
    },

    // Specify the Output-Points for Webpack.
    output: {
        path: PATHS.PATH_DIST,
        filename: '[name].js',
    },
};

module.exports = baseConfig;
