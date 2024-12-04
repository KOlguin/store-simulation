# store-simulation

## Pasos ejecutar localmente

Backend:
- Completan un `.env` con los siguientes datos:\
    * `DB_NAME`
    * `DB_USERNAME`
    * `DB_PASSWORD`
- Correr en la terminal `docker compose build`
- Correr en la terminal `docker compose up` 

Frontend:
- Completar `.env` con `VITE_BACKEND_URL`, que corresponderá a la URL donde corre el backend
- Correr en la terminal `npm install`
- Correr en la terminal `npm run dev`
- Abrir `localhost:5173`

## Arquitectura

En cuanto a la arquitectura general del proyecto, considerando tanto Backend como Frontend, se puede apreciar una arquitectura MVC. Donde tanto los modelos como los controladores se encuentran en el proyecto de Backend, mientras que la vista principal del proyecto se puede encontrar en el Frontend (archivo `app.jsx`).

Los modelos que se encuentran en la carpeta `models` del Backend son una representación de la estructura con la que se guarda la información en la Base de Datos. En cuanto a los controladores, en la carpeta `controllers`, estos se encargan de traer la información desde la base de datos y la dejan procesada para ser utilizada en el Frontend. El archivo `app.jsx` se encarga de mostrar gráficamente la información que se obtuvo desde los controladores.

## Herramientas y Tecnologías

Para el Backend se ha utilizado `express` como librería de `NodeJS`, junto con `sequelize` como ORM que se conecta a la base de datos. Para esta última se a utilizado `Postgresql`. Ambas se encuentran dentro de contenedores que corren con `docker-compose`.

Para el Frontend se ha utilizado `VITE` para la creación del proyecto, junto a la librería `ChartJS` para realizar los gráficos solicitados.
