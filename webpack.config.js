module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: [
            'react'
          ],
          plugins: [
            'transform-es2015-modules-commonjs'
          ]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};