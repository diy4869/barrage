/*
 * @Author: last order
 * @Date: 2020-06-01 16:52:41
 * @LastEditTime: 2020-06-04 16:50:26
 */
import path = require('path')
import webpack = require('webpack')
import HtmlWebpackPlugin = require('html-webpack-plugin')
import MiniCssExtractPlugin = require('mini-css-extract-plugin')
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.join(__dirname, '../src/index.ts'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        library: 'Barrage',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]  
            },
            {
                test: /\.js$/,
                use: [
                    'eslint-loader',
                    'babel-loader'
                ]
            },
            {
                test: /\.ts$/,
                use: [
                    'eslint-loader',
                    'ts-loader'
                ]
            }
        ]
    },
    resolve: {
        enforceExtension: false,
        extensions: ['.js', '.ts'],
        alias: {
            '@': path.join(__dirname, '../src')
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        host: 'localhost',
        port: 8000,
        hot: true,
        compress: true,
        noInfo: true,
        quiet: true,
        overlay: {
            warnings: true,
            errors: false
        },
        clientLogLevel: 'none'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'hello world',
            filename: 'index.html',
            inject: true,
            template: path.join(__dirname, '../src/page/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contentHash:8].css'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
export default config
