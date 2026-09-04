import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const TopicModel = sequelize.define("topic", {
  titleTopic: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripGeneral: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
