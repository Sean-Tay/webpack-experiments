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
            '.ts', '.js'
        ],
    },

    // Specify how different Modules in the Project will be treated.
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                include: [
                    PATHS.PATH_SRC,
                ],

                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,

                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript'
                            ],

                            plugins: [
                                '@babel/plugin-transform-runtime',
                            ]
                        }
                    },
                ]
            }, 
            {
                test: /\.(s?css)$/,
                include: [
                    PATHS.PATH_SRC,
                ],

                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',

                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader',

                        options: {
                            // Removes Webpack's usage of JSON.stringify to allow for Dynamic Module Imports within this Webpack Options Object.
                            ident: 'postcss',

                            plugins: loader => [
								require('postcss-import')({ root: loader.resourcePath }),
								require('postcss-preset-env')(),
                            ],
                        }
                    },
                    {
                        loader: 'sass-loader'
                    },
                ]
            },
            {
                test: /.(png|jpe?g|gif)$/,
                exclude: [
                    PATHS.PATH_NODE_MODULES
                ],

                use: [
                    {
                        loader: 'url-loader',

                        options: {
                            // For copying the Images wholesale into the Output-Point
                            limit: 8192

                            // For copying the Images inline into the Bundle
                            // limit: 65536
                        }
                    }
                ]
            }
        ],
    },

    // Specify the Output-Points for Webpack.
    output: {
        path: PATHS.PATH_DIST,
        filename: '[name].js',
    },
};

module.exports = baseConfig;
