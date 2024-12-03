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
- Correr en la terminal `npm run dev`
- Abrir `localhost:5173`

## Arquitectura

## Herramientas y Tecnologías

Para el Backend se ha utilizado `express` como librería de `NodeJS`, junto con `sequelize` como ORM que se conecta a la base de datos. Para esta última se a utilizado `Postgresql`. Ambas se encuentran dentro de contenedores que corren con `docker-compose`.

Para el Frontend se ha utilizado `VITE` para la creación del proyecto, junto a la librería `ChartJS` para realizar los gráficos solicitados.
