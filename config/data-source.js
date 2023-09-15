import { person } from "../models/user.entity.js";

export const dataOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "terk09044",
  database: "test",
  keepConnectionAlive: false,
  synchronize: true,
  logging: true,
  entities: [person],
  subscribers: [],
  migrations: [],
};
