module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              eslintPath: 'eslint',
              eslintOptions: {
                fix: true,
              },
            },
          },
        ],
      },
    ],  
  }
}