import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = process.env.POSTGRES_DB || "postgres";
const user = process.env.POSTGRES_USER || "postgres";
const password = process.env.POSTGRES_PASSWORD || "postgres";
const host = process.env.POSTGRES_HOST || "localhost";

export const sequelize = new Sequelize(db, user, password, {
  host: host,
  dialect: "postgres",
  logging: false,
});
