const glob = require('glob');

const wMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = require('./paths');

const baseConfig = require('./webpack.base.config');

module.exports = wMerge(
    baseConfig,
    {
        // Use CSS Modules, Minified and Extracted CSS for Production.
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css'
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
                        {
                            loader: 'postcss-loader',
    
                            options: {
                                // Removes Webpack's usage of JSON.stringify to allow for Dynamic Module Imports within this Webpack Options Object.
                                ident: 'postcss',
    
                                plugins: loader => [
                                    require('@fullhuman/postcss-purgecss')({
									    // Each Dependency that is passed to the Loader will have its content that is unused by the Files specified here removed from the Output Bundle.
                                        content: glob.sync(`${PATHS.PATH_SRC}/**/*`, { nodir: true }),                             
                                    })
                                ],
                            }
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
                                    require('@fullhuman/postcss-purgecss')({
									    // Each Dependency that is passed to the Loader will have its content that is unused by the Files specified here removed from the Output Bundle.
                                        content: glob.sync(
                                            `${loader.context}/*`, 
                                            {
                                                nodir: true,
                                                ignore: `${loader.context}/*.?(s)css*`
                                            }
                                        ),
                                    }),
                                ],
                            }
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ]
                },
            ]
        },
    }
);
