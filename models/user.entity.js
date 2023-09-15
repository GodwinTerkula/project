import { EntitySchema } from "typeorm";

export const person = new EntitySchema({
  name: "person",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: "increment",
    },
    username: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
  },
});
