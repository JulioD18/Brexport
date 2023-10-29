import { sequelize } from "../datasource";
import { DataTypes } from "sequelize";
import { League } from "./league";

export const Team = sequelize.define("Team", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  founded: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  national: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Team.belongsTo(League, { foreignKey: "LeagueId" });
