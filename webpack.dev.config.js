const path = require('path');
const webpack = require('webpack');
const wMerge = require('webpack-merge');

const PATHS = require('./paths');

const baseConfig = require('./webpack.base.config');

const devConfig = wMerge(
    baseConfig,
    {
        plugins: [
            ...baseConfig.plugins,
            new webpack.HotModuleReplacementPlugin(),
        ],

        // Use CSS Modules and HMR for Development.
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
                            loader: 'style-loader'
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
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-modules-typescript-loader'
                        },
                        {
                            loader: 'css-loader',
    
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: 'app-[local]-[hash:base64]',
                                },
                            }
                        },
                        {
                            loader: 'sass-loader'
                        },
                    ]
                },
            ]
        },
        
        // Specify completeness of any Source Maps generated from the transformations applied.
        devtool: 'source-map',
        
        // Configure Webpack to monitor for any changes in Resolved Files and recompile them (only).
        watch: true,
        watchOptions: {
            // Ignore Folders to save on CPU Usage.
            ignored: [
                PATHS.PATH_NODE_MODULES,
            ],
        },

        // Webpack Dev Server Configuration for enabling Automatic Recompilation and Reload via an In-Memory Server Process - requires the webpack-dev-server Package.
        devServer: {
            // Indicate where should the Webpack Dev Server search for the content to serve.
            contentBase: [
                PATHS.PATH_DIST,
            ],

            // Display only errors to reduce the amount of output.
            stats: "errors-only",

            // Parse host and port from env to allow customization.
            //
            // If you use Docker, Vagrant or Cloud9, set
            // host: "0.0.0.0";
            //
            // 0.0.0.0 is available to all network devices
            host: process.env.HOST, // Defaults to `localhost`
            port: process.env.PORT, // Defaults to 8080
            open: true, // Load the content from the contentBase specifications in the Browser.

            // Request the Server to fallback to index.html if a requested resource cannot be found.
            // Note: Necessary for Front-End Routing, as 404s will be issued for Web Application Page URLs that are sent to the Server directly (i.e. initial Request for the Web Application, but with a URL that would have lead to a Page within the Web Application if the Web Application had already been loaded on the Client).
            historyApiFallback: true, 

            // Enable Hot Module Replacement.
            // hotOnly: true,
        },
    }
);

module.exports = devConfig;
