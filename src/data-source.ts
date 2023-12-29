import "reflect-metadata";
import { DataSource } from "typeorm";
import { Accounting } from "./entity/Accounting";
import { Departments } from "./entity/Departments";
import { Parent } from "./entity/Parent";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Parent, Accounting, Departments],
  migrations: [],
  subscribers: [],
});
