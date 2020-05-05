const glob = require('glob');
const wMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCssWebpackPlugin = require('purgecss-webpack-plugin');

const PATHS = require('./paths');

const baseConfig = require('./webpack.base.config');

module.exports = wMerge(
    baseConfig,
    {
        // Use CSS Modules, Minified and Extracted CSS, and Purged CSS, for Production.
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
            new PurgeCssWebpackPlugin({
                paths: () => glob.sync(`${PATHS.PATH_SRC}/**/*`, { nodir: true }),
                whitelistPatterns: [/^app*/, ],
                whitelistPatternsChildren: [/^app*/, ],
            }),
        ],

        module: {
            rules: [
                // For PureCSS:
                {
                    test: /\.(css)$/,
                    include: [
                        /node_modules\/purecss\/.*/,
                    ],

                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                esModule: true,
                            }
                        },
                        {
                            loader: 'css-loader',
                        },
                    ]
                },
                // For Source:
                {
                    test: /\.(s?css)$/,
                    include: [
                        PATHS.PATH_SRC
                    ],
    
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                esModule: true,
                            }
                        },
                        {
                            loader: 'css-modules-typescript-loader'
                        },
                        {
                            loader: 'css-loader',
    
                            options: {
                                importLoaders: 2,
                                modules: {
                                    localIdentName: 'app-[hash:base64]',
                                },
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
            ]
        },
    }
);
