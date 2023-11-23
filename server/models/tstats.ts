import { sequelize } from "../datasource";
import { DataTypes } from "sequelize";

export const TStat = sequelize.define("TStat", {
  league: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  season: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  team: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  games: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  wins: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  loses: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  draws: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  goals: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  lineups: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
  },
  cards: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});
