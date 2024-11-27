const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

dotenv.config();

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/random-names.js', to: 'dist/random-names.js' },
        { from: 'src/random-fiche.js', to: 'dist/random-fiche.js' },
        { from: 'src/script.js', to: 'dist/script.js' },
        { from: 'src/style.css', to: 'dist/style.css' },
        { from: 'src/fiche.html', to: 'dist/fiche.html' },
        { from: 'src/fiche_style.css', to: 'dist/fiche_style.css' },
        { from: 'src/menu-style.css', to: 'dist/menu-style.css' },
        { from: 'src/images', to: 'dist/images' },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  devServer: { 
    static: { 
        directory: path.join(__dirname, 'dist'), 
    }, 
    compress: true, 
    port: 9000, 
    proxy: { '/env': 'http://localhost:3000' } 
  },
};

