# BEAST test assignment

To run the project execute the following command:

### `docker-compose stop && docker-compose up --build -d --remove-orphans`

Open [http://localhost:3000](http://localhost:3000) to view frontend application.

Open [http://localhost:4000](http://localhost:4000) to use backend API application.

To seed the DB with test data run the following command under backend directory:

### `npx typeorm -d dist/datasource.js migration:run`