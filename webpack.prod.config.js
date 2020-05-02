const wMerge = require('webpack-merge');

const PATHS = require('./paths');

const baseConfig = require('./webpack.base.config');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = wMerge(
    baseConfig,
    {
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
        ],

        // Use Minified and Extracted CSS for Production.
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    exclude: [
                        PATHS.PATH_NODE_MODULES,
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
                                importLoaders: 1,
                                modules: true,
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
