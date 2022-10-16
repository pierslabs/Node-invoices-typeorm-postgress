import "reflect-metadata";
import { DataSource } from "typeorm";

export const connection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "typeormDB",
  synchronize: true,
  logging: false,
  entities: [
     "src/entity/**/*.ts"
  ],
  migrations: [
     "src/migration/**/*.ts"
  ],
  subscribers: [
     "src/subscriber/**/*.ts"
  ]
});

connection.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

