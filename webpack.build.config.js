const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const defaultInclude = path.resolve(__dirname, 'src')

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            plugins: [
                                                require('tailwindcss'),
                                                require('autoprefixer'),
                                            ],
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                ],
                include: defaultInclude,
            },
            {
                test: /\.jsx?$/,
                use: [{ loader: 'babel-loader' }],
                include: defaultInclude,
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader:
                            'file-loader?name=img/[name]__[hash:base64:5].[ext]',
                    },
                ],
                include: defaultInclude,
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader:
                            'file-loader?name=font/[name]__[hash:base64:5].[ext]',
                    },
                ],
                include: defaultInclude,
            },
            {
                test: /\.jsx?$/,
                use: [{ loader: 'babel-loader' }],
                include: defaultInclude,
            },
            {
                rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    target: 'electron-renderer',
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
            chunkFilename: '[id].css',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new BabiliPlugin(),
    ],
    stats: {
        colors: true,
        children: false,
        chunks: false,
        modules: false,
    },
}
