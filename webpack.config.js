// webpack.config.js
const path = require('path');

module.exports = {
  entry: './main.js', // Archivo de entrada TypeScript
  output: {
    path: path.resolve(__dirname, 'dist'), // Directorio de salida
    filename: 'bundle.js', // Nombre del archivo de salida
    
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.ts', '.tsx', '.js'] // Extensiones de archivo que Webpack resolverá automáticamente
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Expresión regular para coincidir con archivos TypeScript
        use: 'ts-loader', // Usar el cargador ts-loader para procesar archivos TypeScript
        exclude: /node_modules/ // Excluir la carpeta node_modules
      }
    ]
  }
};
