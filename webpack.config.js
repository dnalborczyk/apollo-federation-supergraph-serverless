'use strict'

const { lib } = require('serverless-webpack')

module.exports = {
  entry: lib.entries,
  // externalsPresets: {
  //   node: true,
  // },
  // externals: [
  //   "@apollo/federation",
  //   "@apollo/gateway",
  //   "apollo-server-lambda",
  //   "graphql",
  // ],
  mode: 'development',
  // mode: 'production',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        options: {
          experimentalWatchApi: true,
          // transpileOnly: true,
        },
        test: /\.ts$/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
    mainFields: ['main'],
  },
  target: 'node',
}
