HangGame es un juego de ahorcado diseñado para dos jugadores. En este juego, el jugador 1 elige una palabra, y el jugador 2 intenta adivinarla en 6 intentos. Cada vez que el jugador 2 falla, se construye gradualmente un dibujo de un stickman ahorcado. El juego está diseñado para ayudar a aprender a usar herramientas como Webpack y TypeScript.

Cómo jugar
Jugador 1: Ingresa una palabra para que el jugador 2 la adivine.
Jugador 2: Intenta adivinar la palabra ingresando letras. Tienes un máximo de 6 intentos.
Cada vez que ingreses una letra incorrecta, se añadirá una parte del dibujo del stickman.
Si adivinas todas las letras antes de acumular 6 intentos fallidos, ganas. Si acumulas 6 intentos fallidos, pierdes.
Tecnologías utilizadas
Este proyecto utiliza las siguientes tecnologías:

Webpack: para la gestión de módulos y el empaquetado de recursos.
TypeScript: para escribir código JavaScript con tipos estáticos.
Estructura del proyecto
El proyecto está organizado de la siguiente manera:

src: Contiene los archivos fuente del proyecto.
keyboardData.ts: Define las letras del teclado virtual.
app.ts: El script principal del juego.
correctWord-Functions.ts: Contiene la lógica para manejar la palabra ingresada por el jugador 1 y comenzar el juego.
dist: Contiene los archivos de salida generados por Webpack.

Iniciar el juego
Para comenzar el juego, el jugador 1 debe ingresar una palabra en el campo de texto y presionar el botón "Empezar el juego". La palabra ingresada se almacenará en el Local Storage y el juego se iniciará en la siguiente página.
