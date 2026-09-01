import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const TopicModel = sequelize.define("topic", {
  titleTopic: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descriptionGeneral: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});
