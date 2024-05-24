const path = require('path');
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
  entry: {
    about: './src/about/index.ts',
    home: './src/index.ts',
    developer: './src/developer/index.ts',
    contact: './src/contact/index.ts',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name][ext]',
    chunkFilename: '[name]/[id].chunk.css',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'about.html'),
      filename: 'about.html',
      chunks: ['about'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'developer.html'),
      filename: 'developer.html',
      chunks: ['developer'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'contact.html'),
      filename: 'contact.html',
      chunks: ['contact'],
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: ({ chunk }) => {
        if (chunk.name === 'about') {
          return `${chunk.name}/[name].css`;
        } else if (chunk.name === 'developer') {
          return `${chunk.name}/[name].css`;
        } else if (chunk.name === 'contact') {
          return `${chunk.name}/[name].css`;
        } else {
          return `[name].css`;
        }
      },
    })
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
            filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'media/'
            }
          }
        ]
      }
    ],
  },
  devServer: {
    watchFiles: ["src/**/*.html"], // Отслеживаем все HTML-файлы в папке src и её подпапках
    port: 8080,
    static: {
      directory: path.join(__dirname, 'dist'), // Указываем директорию для статических файлов
    },
    open: true,
    compress: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

