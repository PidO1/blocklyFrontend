const path = require('path');
module.exports = {
 "mode": "none",
 "entry": ['@babel/polyfill',
  './src/index.js',
  './src/index.css'
],
 "output": {
   "path": __dirname + '/build',
   "filename": "bundle.js"
 },
devServer: {
   contentBase: path.join(__dirname, 'build')
 } , 
 "module": {
    "rules": [
      {
        "test": /\.css$/,
        "use": [
          "style-loader",
          "css-loader"
        ]
      },
     {
       "test": /\.js$/,
       "exclude": /node_modules/,
       "use": {
         "loader": "babel-loader",
         "options": {
           "presets": [
             "@babel/preset-env",
           ]
         }
       }
     },
    ]
  }
 
}
