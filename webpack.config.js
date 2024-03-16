const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    app: './ts-module/app.ts', // Archivo de entrada TypeScript "app.ts"
    keyboardFunction: './ts-module/keyboard-Function.ts', // Archivo de entrada TypeScript "keyboardFunction.ts"
    keyboardData: './ts-module/keyboardData.ts' // Archivo de entrada TypeScript "keyboardData.ts"
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Directorio de salida
    filename: '[name].js', // Nombre del archivo de salida (se generará uno por cada entrada)
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
