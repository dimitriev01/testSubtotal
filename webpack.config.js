const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss'],
  },
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    static: './public',
  },
  output: {
    path: '/src/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              esModule: true,
            },
          },
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
};
