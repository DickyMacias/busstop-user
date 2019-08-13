# Busstop BLE User App
Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

Este proyecto esta alojado en un servidor de Heroku como [Bus Stop User App](https://busstop-user.herokuapp.com/).

## Información

El presente proyecto esta construido en React. Su función principal es buscar información en una API llamada [Bus Stop API](https://github.com/DickyMacias/busstop-api), la cual permite alimentar a la aplicación de usuario con información acerca de los horarios de las rutas, camiones y paradas donde el usuario se encuentra ubicado, a través de un Beacon que transmite la información a la aplicación de usuario.

Este proyecto tiene una aplicacion contigua que permite que los autobuses puedan subir datos a la aplicacion principal [Bus Stop Driver](https://github.com/DickyMacias/busstop-driver)

Para una mejor visualizacion, descargar los plugins de Prettier y Babel Javascript para VS Code.

Se recomienda la lectura del tutorial de [React JS](https://reactjs.org/) para mejor comprension de los terminos elementos, estados y componentes.

Los tres proyectos como son User, Driver y API tienen una misma estructura de funcionamiento. API esta construido con el package JSON-Server.


## Package.json

Para poder correr el proyecto es necesario tener instalado NodeJS o NPM como manejador de paquetes. Despues de clonar el proyecto, usar *npm install* para poder verificar los paquetes existentes e instalarlos.


## Public

Contiene los archivos HTML que se usaran para el despligue inicial de la App. Contiene el archivo index.html que se cargara en la aplicacion.


## Config

Contiene los elementos de Webpack asi como las variables de entorno para poder corre adecuadamente la aplicacion en el servidor y poder compilar todos los elementos del proyecto.

## src

Contiene todos los componentes del proyecto y como se desplegaran en la aplicacion.

    -- src
    |
     ----- components
        |
         _____ camiones (Contiene elementos de camiones)
         _____ logos (imagenes y recursos de estaciones)
         _____ mapas (imagenes y recursos de mapas)
         _____ rutas (contiene elementos de rutas)

Cada uno de los folder de componentes contiene los elementos que mostraran al ser llamados segun los parametros entregados por el archivo App



